require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    }
  }
};
//0xE40982968bcd10eA2656F9e46722E32Fb65501C6
//https://sepolia.etherscan.io/address/0x4a58cc2eea558545ef547273b298b5d8042c9ad5