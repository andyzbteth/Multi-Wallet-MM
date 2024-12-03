const { getRouter } = require('../utils/uniswapConnector');
const wallets = require('../utils/walletManager');
require('dotenv').config();

const buyToken = async () => {
    const router = getRouter(wallets[0].provider); // Using the first wallet for router

    for (const wallet of wallets) {
        try {
            const tx = await router.swapExactETHForTokens(
                0, // Minimum amount of tokens to receive
                [process.env.VALUE_TOKEN_ADDRESS, process.env.TARGET_TOKEN_ADDRESS],
                wallet.address,
                Math.floor(Date.now() / 1000) + 60 * 20, // Deadline
                {
                    value: ethers.utils.parseEther(process.env.MAX_ETH_PER_TX),
                    gasLimit: 200000,
                }
            );
            console.log(`Buy transaction sent: ${tx.hash}`);
            await tx.wait();
            console.log(`Buy transaction confirmed: ${tx.hash}`);
        } catch (error) {
            console.error(`Buy transaction failed for wallet ${wallet.address}:`, error);
        }
    }
};

module.exports = buyToken;
