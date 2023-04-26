// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

//import @openzeppelin contract
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    constructor() ERC721("NFT", "ITM") {
        //mint an NFT to yourself
        _mint(msg.sender, 1);
    }
}