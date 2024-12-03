const { ethers } = require('ethers');
require('dotenv').config();

const wallets = process.env.WALLETS.split(',');

const provider = new ethers.providers.InfuraProvider(process.env.NETWORK, process.env.INFURA_PROJECT_ID);

const walletInstances = wallets.map(pk => new ethers.Wallet(pk.trim(), provider));

module.exports = walletInstances;
