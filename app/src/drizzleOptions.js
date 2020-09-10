import Web3 from "web3";
import SynthFactory from "./contracts/factories/SynthFactory.json";
import Synth from "./contracts/token/Synth.json";
import Shard from "./contracts/token/Shard.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [SynthFactory, Synth, Shard],
  events: {
    SynthFactory: ["StorageSet"],
  },
};

export default options;
