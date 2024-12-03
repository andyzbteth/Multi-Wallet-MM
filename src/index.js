const buyToken = require('./bots/buyBot');
const sellToken = require('./bots/sellBot');
const volumeBot = require('./bots/volumeBot');

const main = () => {
    // Example: Start Volume Bot
    volumeBot();

    // Alternatively, you can set up command-line arguments or configuration to choose which bot to run
};

main();
