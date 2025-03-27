# BabyJubJub Public Key Calculator

A CLI tool that, given a private key, computes the corresponding public key as a point on the BabyJubjub elliptic curve subgroup. This tool is particularly useful for working with private keys extracted from MetaMask.

## Features

- Computes public key points on the BabyJubjub elliptic curve subgroup
- Uses circomlibjs for cryptographic operations
- Supports hex-format private keys (including those from MetaMask)
- TypeScript implementation for type safety

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone git@github.com:pantherfoundation/babyjubjub-pubkey-calculator.git
cd babyjubjub-pubkey-calculator
```

2. Install dependencies:
```bash
npm install
```

## Usage

Run the script with a private key as an argument:

```bash
npm start <privateKey>
```

Example with a MetaMask private key:
```bash
npm start 123...abc
```

Note: When copying a private key from MetaMask, it will be a 64-character hexadecimal string without the "0x" prefix.

The output will be in the format:
```
Public Key:
X: <x-coordinate>
Y: <y-coordinate>
```

## Building

To compile the TypeScript code to JavaScript:

```bash
npm run build
```

The compiled files will be available in the `dist` directory.

## Development

The project uses:
- TypeScript for type safety
- circomlibjs v0.0.8 for cryptographic operations
- ts-node for running TypeScript directly

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.