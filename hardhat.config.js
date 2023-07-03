require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
//require("@nomiclabs/hardhat-etherscan")
//require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      //{ version: "0.8.10" },
      { version: "0.8.9" }
      //{ version: "0.6.6" },
      //{ version: "0.7.0" }
    ]
  },
  networks: {
    arbi: {
      url: process.env.INFURA_ARBITRUM_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};