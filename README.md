# 🔗 BlockCert
### Blockchain-Based Academic Credential Verification System

> A decentralized application (DApp) that eliminates certificate fraud using
> cryptographic hashing and immutable smart contracts on Ethereum.

---

## 🧩 The Problem

Academic credential fraud is rising globally. Traditional verification methods:

- 🐢 Take **days or weeks** to process
- 🏛️ Rely on **centralized databases** prone to tampering
- 👀 Require **manual human checks**
- 🔓 Are **vulnerable to forgery**

---

## ✅ The Solution

BlockCert stores **cryptographic proofs** of certificates on-chain —
not the files themselves — making forgery mathematically impossible.
Institution uploads certificate
↓
SHA-256 hash generated (frontend)
↓
Hash stored via smart contract
↓
Immutable record on Ethereum

Anyone can verify a certificate by re-hashing the file and matching it
against the on-chain record — instantly, trustlessly, globally.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------------|-------------------------------|
| Smart Contract | Solidity v0.8.21 |
| Dev Environment | Hardhat |
| Blockchain Interaction | Ethers.js |
| Wallet | MetaMask |
| Frontend | Next.js |
| Hashing | CryptoJS (SHA-256) |

---

## 📜 Smart Contract

Written in **Solidity v0.8.21**. Deployed on a local Hardhat network.

### Core Functions

```solidity
issueCertificate(studentId, hash)   // Institution issues a certificate
verifyCertificate(studentId, hash)  // Anyone verifies authenticity
revokeCertificate(studentId)        // Institution revokes a certificate
getCertificate(studentId)           // Fetch certificate record
```

### Certificate Record Structure

| Field | Description |
|------------|-------------------------------|
| `hash` | SHA-256 hash of the certificate file |
| `timestamp` | Time of issuance |
| `isRevoked` | Revocation status |

---

## ⚙️ How It Works

### 🎓 Issuance
1. Institution uploads a certificate file
2. Frontend generates a **SHA-256 hash** of the file
3. Hash is submitted to the smart contract
4. Transaction is recorded permanently on the Ethereum network

### 🔍 Verification
1. Verifier uploads the certificate file
2. File is hashed again using SHA-256
3. Hash is compared against the on-chain record
4. Returns ✅ **Authentic** or ❌ **Invalid / Revoked**

---

## 🖥️ Screenshots

<!-- Add screenshots below -->
| Issuance Flow | Verification Flow |
|---|---|
| ![Issue](screenshots/issue.png) | ![Verify](screenshots/verify.png) |

---

## 🚀 Setup & Run Locally

### Prerequisites
- Node.js installed
- MetaMask browser extension
- MetaMask connected to **Hardhat Local** (Chain ID: `31337`)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start Hardhat local node
npx hardhat node

# 3. Deploy the smart contract
npx hardhat run scripts/deploy.js --network localhost

# 4. Update contract address in the frontend config

# 5. Start the frontend
npm run dev
```

> 🌐 App runs at `http://localhost:3000`

---

## 🔐 Security Design

| Measure | Purpose |
|---------|---------|
| SHA-256 Hashing | Ensures certificate integrity |
| Immutable Smart Contract | Prevents unauthorized tampering |
| Revocation Mechanism | Invalidates compromised certificates |
| No file stored on-chain | Protects sensitive data |

---

## 🔮 Future Improvements

- [ ] Role-based access control (institutions only for issuance)
- [ ] Deployment to **Sepolia testnet**
- [ ] **QR code** based instant verification
- [ ] Institutional login & authentication
- [ ] **IPFS integration** for decentralized file storage

---

## 💡 Why Blockchain?

| Property | Benefit |
|---|---|
| **Immutability** | Records cannot be altered once stored |
| **Transparency** | Anyone can audit the chain |
| **Cryptographic Trust** | Math, not middlemen |
| **Decentralization** | No single point of failure or authority |

> BlockCert removes the need for centralized verification authorities entirely.
