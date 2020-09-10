const SynthFactory = artifacts.require("SynthFactory");

contract("SynthFactory", accounts => {
  it("...should create an aftwork NFT and shards.", async () => {
    const synthFactoryInstance = await SynthFactory.deployed();

    // Create Artwork
    await synthFactoryInstance.createArtwork(1200, "", "test", "test", { from: accounts[0] });

  });
});
