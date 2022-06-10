// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MusicNFTMarketplace is ERC721("DAppFi", "DAPP"), Ownable
{
    string public baseURI = "https://bafybeiba5rxpgfwt6allj5jvr4m2nopo7tswggqzftruuumc3t7gn5wzi4.ipfs.nftstorage.link/";
}