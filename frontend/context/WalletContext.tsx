"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";
import { LOCAL_CHAIN_ID, LOCAL_CHAIN_ID_HEX, LOCAL_RPC_URL, CHAIN_NAME } from "../constants/contract";

interface WalletContextType {
  account: string | null;
  chainId: bigint | null;
  balance: string | null;
  isConnected: boolean;
  isCorrectNetwork: boolean;
  isConnecting: boolean;
  connectWallet: () => Promise<string | null>;
  switchNetwork: () => Promise<boolean>;
  requestFaucet: (amountEthHex?: string) => Promise<{ success: boolean; message: string }>;
  refreshBalance: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType>({
  account: null,
  chainId: null,
  balance: null,
  isConnected: false,
  isCorrectNetwork: false,
  isConnecting: false,
  connectWallet: async () => null,
  switchNetwork: async () => false,
  requestFaucet: async () => ({ success: false, message: "" }),
  refreshBalance: async () => {},
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<bigint | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const isConnected = Boolean(account);
  const isCorrectNetwork = chainId === LOCAL_CHAIN_ID;

  const refreshBalance = useCallback(async () => {
    if (typeof window === "undefined" || !(window as any).ethereum || !account) return;
    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const rawBal = await provider.getBalance(account);
      const formatted = parseFloat(ethers.formatEther(rawBal)).toFixed(3);
      setBalance(`${formatted} ETH`);
    } catch (err) {
      console.warn("Failed to fetch balance:", err);
    }
  }, [account]);

  const updateWalletState = useCallback(async () => {
    if (typeof window === "undefined" || !(window as any).ethereum) return;
    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const network = await provider.getNetwork();
      setChainId(network.chainId);

      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        const primary = accounts[0].address;
        setAccount(primary);
        const rawBal = await provider.getBalance(primary);
        const formatted = parseFloat(ethers.formatEther(rawBal)).toFixed(3);
        setBalance(`${formatted} ETH`);
      } else {
        setAccount(null);
        setBalance(null);
      }
    } catch (err) {
      console.warn("Wallet state update error:", err);
    }
  }, []);

  const connectWallet = useCallback(async (): Promise<string | null> => {
    if (typeof window === "undefined" || !(window as any).ethereum) {
      alert("MetaMask not detected! Please install MetaMask extension to use this dApp.");
      return null;
    }

    try {
      setIsConnecting(true);
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
        await updateWalletState();
        return accounts[0];
      }
      return null;
    } catch (err: any) {
      console.error("Connect wallet failed:", err);
      return null;
    } finally {
      setIsConnecting(false);
    }
  }, [updateWalletState]);

  const switchNetwork = useCallback(async (): Promise<boolean> => {
    if (typeof window === "undefined" || !(window as any).ethereum) return false;

    try {
      await (window as any).ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: LOCAL_CHAIN_ID_HEX }],
      });
      await updateWalletState();
      return true;
    } catch (switchError: any) {
      // 4902 indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902 || switchError?.data?.originalError?.code === 4902) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: LOCAL_CHAIN_ID_HEX,
                chainName: CHAIN_NAME,
                rpcUrls: [LOCAL_RPC_URL],
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
              },
            ],
          });
          await updateWalletState();
          return true;
        } catch (addError) {
          console.error("Failed to add Hardhat network to MetaMask:", addError);
          return false;
        }
      }
      console.error("Failed to switch network:", switchError);
      return false;
    }
  }, [updateWalletState]);

  const requestFaucet = useCallback(
    async (amountEthHex = "0x100000000000000000000"): Promise<{ success: boolean; message: string }> => {
      if (typeof window === "undefined" || !(window as any).ethereum) {
        return { success: false, message: "MetaMask not detected" };
      }

      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        let targetAccount = account;

        if (!targetAccount) {
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            targetAccount = accounts[0].address;
          }
        }

        if (!targetAccount) {
          return { success: false, message: "Please connect your wallet first" };
        }

        await provider.send("hardhat_setBalance", [targetAccount, amountEthHex]);
        await refreshBalance();
        return { success: true, message: "Successfully minted 256 test ETH to your wallet!" };
      } catch (err: any) {
        console.error("Faucet error:", err);
        return { success: false, message: err?.message || "Failed to trigger test faucet." };
      }
    },
    [account, refreshBalance]
  );

  useEffect(() => {
    updateWalletState();

    if (typeof window !== "undefined" && (window as any).ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          updateWalletState();
        } else {
          setAccount(null);
          setBalance(null);
        }
      };

      const handleChainChanged = () => {
        updateWalletState();
      };

      (window as any).ethereum.on("accountsChanged", handleAccountsChanged);
      (window as any).ethereum.on("chainChanged", handleChainChanged);

      return () => {
        (window as any).ethereum.removeListener("accountsChanged", handleAccountsChanged);
        (window as any).ethereum.removeListener("chainChanged", handleChainChanged);
      };
    }
  }, [updateWalletState]);

  return (
    <WalletContext.Provider
      value={{
        account,
        chainId,
        balance,
        isConnected,
        isCorrectNetwork,
        isConnecting,
        connectWallet,
        switchNetwork,
        requestFaucet,
        refreshBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}
