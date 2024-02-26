import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();
const {ETHERSCAN_KEY,SECRET_KEY,GOERLI_URL} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks:{
    goerli: {
      url:GOERLI_URL,
      accounts: [SECRET_KEY],
    },
  },
  etherscan:{
    apiKey: {
      goerli: ETHERSCAN_KEY,
    }
  }
};

export default config;
