const buyToken = require('./buyBot');
const sellToken = require('./sellBot');

const volumeBot = async () => {
    // Implement alternating buy and sell based on your logic and parameters
    // For simplicity, we'll alternate every interval
    let isBuy = true;

    setInterval(async () => {
        if (isBuy) {
            await buyToken();
        } else {
            await sellToken();
        }
        isBuy = !isBuy;
    }, getRandomInterval());
};

const getRandomInterval = () => {
    const min = parseInt(process.env.DURATION_MIN) * 1000;
    const max = parseInt(process.env.DURATION_MAX) * 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = volumeBot;
