pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


/**
* Basic NFT contract leveraging the OpenZeppelin NFT implementation.
* Adhears to the https://eips.ethereum.org/EIPS/eip-721 standard, and implements enumerability,
* and Metadata. Shards are also attached to each NFT to represent fractional ownership or 'stake' in
* the respective artworks represented by each NFT.
* NFTs are also each linked to fractional representations in the form of ERC20s.
*/
contract Synth is ERC721, Ownable{
    // Mapping for fractional tokens
    mapping (uint256 => address) private _synthShards;

    // TODO: Add params
    constructor() public ERC721("SynthNFT", "SyNFT"){
    }

    /**
     * @dev Safely mints `tokenId` and transfers it to `to` while attaching a URI for artwork.
     *
     * Requirements:
     d*
     * - `tokenId` must not exist.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function mint(address to, string calldata _tokenURI, address shard) external onlyOwner {
        uint256 tokenId = totalSupply() + 1;
        _safeMint(to, tokenId, "");
        _setTokenURI(tokenId, _tokenURI);
        _setShard(tokenId, shard);
    }

    /**
     * @dev Sets `shard` as the synthShard of `tokenId`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function _setShard(uint256 tokenId, address shard) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: Shard set of nonexistent token");
        _synthShards[tokenId] = shard;
    }

    /**
     * @dev Sets `shard` as the synthShard of `tokenId`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `msg.sender` must be `owner`.
     */
    function setShard(uint256 tokenId, address shard) external onlyOwner {
        _setShard(tokenId, shard);
    }

    function getShard(uint256 tokenId) public view returns(address){
        return _synthShards[tokenId];
    }

    /**
     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `msg.sender` must be `owner`.
     */
    function setTokenURI(uint256 tokenId, string calldata _tokenURI) external onlyOwner {
        _setTokenURI(tokenId, _tokenURI);        
    }

}
