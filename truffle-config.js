const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");
// Replace this with a mnemonic with mainnet
// Don't push though!
const mnemonic = "siren basket inflict lab plunge jewel stay pitch mango faculty burden maple";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
        provider: function() { 
          // Switch this to your own infura endpoint
         return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/9f0528c99cdf431290bfeebc2834b664");
        },
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000,
    },
    mainnet: {
      provider: function() { 
        // Switch this to your own infura endpoint
       return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/9f0528c99cdf431290bfeebc2834b664");
      },
      network_id: 1,
      gas: 12000000,
      gasPrice: 150000000000,
    },
    ropsten: {
      provider: function() { 
        // Switch this to your own infura endpoint
       return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/9f0528c99cdf431290bfeebc2834b664");
      },
      network_id: 3,
      gas: 4500000,
      gasPrice: 10000000000,
  }
  },
  compilers: {
    solc: {
      version: "0.6.2"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  },
};
