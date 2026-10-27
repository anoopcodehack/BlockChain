export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const LOCAL_CHAIN_ID = 31337n;
export const LOCAL_CHAIN_ID_HEX = "0x7a69"; // 31337 in hex
export const LOCAL_RPC_URL = "http://127.0.0.1:8545";
export const CHAIN_NAME = "Hardhat Local";

export const CONTRACT_ABI = [
  {
    inputs: [
      { internalType: "string", name: "studentId", type: "string" },
      { internalType: "string", name: "hash", type: "string" },
    ],
    name: "issueCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "studentId", type: "string" },
      { internalType: "string", name: "hash", type: "string" },
    ],
    name: "verifyCertificate",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "studentId", type: "string" }],
    name: "getCertificate",
    outputs: [
      { internalType: "string", name: "hash", type: "string" },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
      { internalType: "bool", name: "revoked", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "studentId", type: "string" }],
    name: "revokeCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
