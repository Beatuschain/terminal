/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.9",
};
/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {
         
      },
      rinkeby : {
         url : "https://rinkeby.infura.io/v3/8ba2261b0b484ac6998be9ed9438eade",
         chainId : 4,
         accounts : [`0x${PRIVATE_KEY}`]
      },
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}