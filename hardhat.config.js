require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv/config");
const { vars } = require("hardhat/config");

const ETHERSCAN_API_KEY = vars.get("OKLINK_AMOY_API");
const config = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
  networks: {
    polygonAmoy: {
      url: process.env.POLYGON_AMOY_RPC ,
      accounts: [process.env.PRIVATE_KEY ],
      gasPrice: "auto",
    },
  },

  etherscan: {
    apiKey: {
      polygonAmoy: ETHERSCAN_API_KEY ,
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL:
            "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/polygonAmoy",
        },
      },
    ],
  },
};
module.exports = config;