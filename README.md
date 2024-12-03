# Multi-Wallet-MM

# Uniswap V2 Trading Bot

## Overview

A trading bot that interacts with Uniswap V2 to perform automated buy, sell, and volume trading based on predefined parameters.

## Features

- **Buy Bot:** Executes buy transactions until the target price is reached.
- **Sell Bot:** Executes sell transactions until the target price is reached.
- **Volume Bot:** Alternates between buying and selling at random intervals.
- **Multiple Wallet Support:** Manage multiple wallets for executing transactions.
- **Configuration via `.env` File:** Securely manage sensitive information and parameters.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) package manager
- Ethereum wallet private keys
- [Infura](https://infura.io/) project ID or another Ethereum node provider

## Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/uniswap-bot.git
    cd uniswap-bot
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory:

    ```env
    INFURA_PROJECT_ID=your_infura_project_id
    NETWORK=mainnet

    WALLETS=private_key1,private_key2

    TARGET_TOKEN_ADDRESS=0xYourTokenContractAddress
    VALUE_TOKEN_ADDRESS=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 # WETH

    MAX_TOKEN_PER_TX=1000
    MAX_ETH_PER_TX=10
    BUY_TARGET_PRICE=0.01
    SELL_TARGET_PRICE=0.02
    DURATION_MIN=1
    DURATION_MAX=600
    ```

    **⚠️ Never share your private keys or commit the `.env` file to version control.**

4. **Download Uniswap ABIs**

    - Download the `UniswapV2Router02.json` and `UniswapV2Pair.json` ABI files and place them in the `src/utils/` directory.

5. **Run the Bot**

    ```bash
    node src/index.js
    ```

## Usage

- **Buy Bot:** Automatically buys the target token when conditions are met.
- **Sell Bot:** Automatically sells the target token when conditions are met.
- **Volume Bot:** Alternates between buying and selling based on random intervals.

Configure which bot to run by modifying the `src/index.js` file.

## Security Considerations

- **Private Keys:** Handle with utmost care. Consider using secure key management solutions.
- **Testing:** Thoroughly test the bot on Ethereum testnets (e.g., Ropsten, Rinkeby) before deploying to mainnet.
- **Error Handling:** Implement robust error handling and logging mechanisms.
- **Gas Management:** Optimize gas usage to prevent failed transactions due to insufficient gas.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or feature requests.

## License

MIT License
