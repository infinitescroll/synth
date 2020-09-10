pragma solidity ^0.6.2;

import "../tokens/Synth.sol";
import "../tokens/Shard.sol";
import "@openzeppelin/contracts/utils/EnumerableMap.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SynthFactory is Ownable {
    
    // convert to interface
    Synth public nft;
    using EnumerableMap for EnumerableMap.UintToAddressMap;

    event OperationResult(bool result);
    event ArtworkCreated(address shard, uint256 nft);

    EnumerableMap.UintToAddressMap private _art;

    constructor(address _nft) public {
        nft = Synth(_nft);
    }

    function contains(uint256 key) public view returns (bool) {
        return _art.contains(key);
    }

    function _set(uint256 key, address value) internal virtual {
        bool result = _art.set(key, value);
        emit OperationResult(result);
    }

    function remove(uint256 key) public onlyOwner {
        bool result = _art.remove(key);
        emit OperationResult(result);
    }

    function createArtwork(uint256 supply, string calldata _tokenURI, string calldata name, string calldata symbol) external onlyOwner {
        Shard shard = new Shard(msg.sender, supply, name, symbol);
        nft.mint(msg.sender, _tokenURI, address(shard));
        emit ArtworkCreated(address(shard), nft.totalSupply());
    }

    function length() public view returns (uint256) {
        return _art.length();
    }

    function at(uint256 index) public view returns (uint256 key, address value) {
        return _art.at(index);
    }

    function get(uint256 key) public view returns (address) {
        return _art.get(key);
    }

    function sendShard(uint256 tokenId, address to, uint256 amount) public onlyOwner {
        Shard shard = Shard(nft.getShard(tokenId));
        shard.send(to, amount, new bytes(0x0));
    }

}