const Synth = artifacts.require("Synth");
const SynthFactory = artifacts.require("SynthFactory");
const Shard = artifacts.require("Shard");

require('openzeppelin-test-helpers/configure')({ web3 });
const { singletons } = require('openzeppelin-test-helpers');

module.exports = async function(deployer, network, accounts) {
  console.log("Default account ", accounts[0]);

  if (network === 'develop' || network === 'ganache' )  {
    // In a test environment an ERC777 token requires deploying an ERC1820 registry
    console.log("Deploying ERC1820 Registry");
    await singletons.ERC1820Registry(accounts[0]);
  }
  console.log("Deploying Synth");

  await deployer.deploy(Synth);
  console.log("Synth deployed at:", Synth.address);

  await deployer.deploy(SynthFactory, Synth.address);
  console.log("SynthFactory deployed at:", SynthFactory.address);
  
  await deployer.deploy(Shard, 100000, "Shard", "SRD");
  console.log("Shard deployed at:", Shard.address);

};
