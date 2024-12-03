const { ethers } = require('ethers');
const IUniswapV2Router02ABI = require('./UniswapV2Router02.json'); // You need to download the ABI
const IUniswapV2PairABI = require('./UniswapV2Pair.json'); // You need to download the ABI

const routerAddress = '0x7a250d5630B4cF539739df2C5dAcb4c659F2488D'; // Uniswap V2 Router

const getRouter = (provider) => {
    return new ethers.Contract(routerAddress, IUniswapV2Router02ABI, provider);
};

module.exports = { getRouter };
