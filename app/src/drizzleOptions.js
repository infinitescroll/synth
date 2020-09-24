import Web3 from "web3";
import SynthFactory from "./contracts/SynthFactory.json";
import Synth from "./contracts/Synth.json";
import Shard from "./contracts/Shard.json";

var web3 = new Web3("wss://ropsten.infura.io/ws/v3/9f0528c99cdf431290bfeebc2834b664")

const optionsLocal = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [SynthFactory, Synth, Shard],
  events: {
    SynthFactory: ["OperationResult", "ArtworkCreated"],
  },
};

const optionsRopsten = {
  web3: {
    block: false,
    customProvider: web3
  },
  contracts: [{
    contractName: Synth.contractName,
    // Hardcoded from deploys
    web3Contract: new web3.eth.Contract(Synth.abi, "0x8a70785c69f9EA17a67ECCaF4F0C195eef46F95a")
  },
  {
    contractName: Shard.contractName,
    // Hardcoded from deploys
    web3Contract: new web3.eth.Contract(Shard.abi, "0xE358Dd12249d1bE3bd5469Db565e1f90C2f5b0a4")
  },
  {
    contractName: SynthFactory.contractName,
    // Hardcoded from deploys
    web3Contract: new web3.eth.Contract(SynthFactory.abi, "0xaD52fdD362e165c189017fd39102a7E47A9718AA")
  }],
  events: {
    SynthFactory: ["OperationResult", "ArtworkCreated"],
  },
};


export { optionsLocal, optionsRopsten};