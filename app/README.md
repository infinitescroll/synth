### Running Instructions

Project should conform to drizzle docs for compilation, migration, and app start.

https://www.trufflesuite.com/boxes/drizzle

Current React app is very basic and intended only for testing and basic contract interactions.

Most development interactions should be handled using truffle-cli, in order to test on testnets
or mainnet just deploy the contracts using ``npm run deploy:rinkeby`` or the appropriate network and then
run ``npm run start``. In order for this to work the appropriate option must be added to ``drizzleOptions.js``
and consumed in ``app/src/App.js``.

In order to get the contract addresses take the supplied contract addresses logged to the console during the deploy process.
e.g.
``Shard deployed at: 0xE358Dd12249d1bE3bd5469Db565e1f90C2f5b0a4``

These are added to the options objects in ``drizzleOptions``
```
contracts: [{
    contractName: Synth.contractName,
    // Hardcoded from deploys
    web3Contract: new web3.eth.Contract(Synth.abi, "0x8a70785c69f9EA17a67ECCaF4F0C195eef46F95a")
  } ...
```

In order to deploy to mainnet:
1. Switch the mnemonic in ``truffle-config.js`` to a mnemonic with mainnet ETH in ``address[0]``.
2. run ``npm run deploy:mainnet``

### URI standard

As long as the URIs supplied to the NFTs conform to these standards the NFT will be interoperable with opensea.
https://docs.opensea.io/docs/metadata-standards
https://opensea.io/blog/guides/non-fungible-tokens/