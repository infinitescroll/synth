// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Shard is ERC777, Ownable {
    
    // Add operator support?
    constructor(address owner, uint256 supply, string memory name, string memory symbol) public ERC777(name, symbol, new address[](0)){
        // This is the only way to mint; this is how we regulate total supply
        _mint(msg.sender, supply, new bytes(0x0), new bytes(0x0));
    }
}
