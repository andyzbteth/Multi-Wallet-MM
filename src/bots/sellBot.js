const { getRouter } = require('../utils/uniswapConnector');
const wallets = require('../utils/walletManager');
require('dotenv').config();

const sellToken = async () => {
    const router = getRouter(wallets[0].provider);

    for (const wallet of wallets) {
        try {
            const tokenAmount = ethers.utils.parseUnits(process.env.MAX_TOKEN_PER_TX, 18); // Adjust decimals as needed

            // Approve token spending
            const tokenContract = new ethers.Contract(process.env.TARGET_TOKEN_ADDRESS, [
                'function approve(address spender, uint256 amount) public returns (bool)',
            ], wallet);

            const approveTx = await tokenContract.approve(router.address, tokenAmount);
            await approveTx.wait();

            const tx = await router.swapExactTokensForETH(
                tokenAmount,
                0, // Minimum amount of ETH to receive
                [process.env.TARGET_TOKEN_ADDRESS, process.env.VALUE_TOKEN_ADDRESS],
                wallet.address,
                Math.floor(Date.now() / 1000) + 60 * 20,
                {
                    gasLimit: 200000,
                }
            );
            console.log(`Sell transaction sent: ${tx.hash}`);
            await tx.wait();
            console.log(`Sell transaction confirmed: ${tx.hash}`);
        } catch (error) {
            console.error(`Sell transaction failed for wallet ${wallet.address}:`, error);
        }
    }
};

module.exports = sellToken;
