const Synth = artifacts.require("Synth");
const SynthFactory = artifacts.require("SynthFactory");
const Shard = artifacts.require("Shard");

module.exports = function(deployer) {
  deployer.deploy(Synth).then(() =>{
    deployer.deploy(SynthFactory, Synth.address);
  });
  deployer.deploy(Shard);
};
