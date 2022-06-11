const { expect } = require("chai");
const { ethers } = require("hardhat");

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("MusicNFTMarketplace",function() 
{
    let nftMarketplace
    let deployer, artist, user1, user2, users;
    let royaltyFee = toWei(0.01);
    let URI = "https://bafybeiba5rxpgfwt6allj5jvr4m2nopo7tswggqzftruuumc3t7gn5wzi4.ipfs.nftstorage.link/"
    let prices = [toWei(1), toWei(2),toWei(3),toWei(4),toWei(5),toWei(6),toWei(7), toWei(8)]
    let deploymentFees = toWei(prices.length * 0.01)
    beforeEach(async function () 
    {
      // Get the ContractFactory and Signers here.
      const NFTMarketplaceFactory = await ethers.getContractFactory("MusicNFTMarketplace");
      [deployer, artist, user1, user2, ...users] = await ethers.getSigners();
  
      // Deploy music nft marketplace contract 
      nftMarketplace = await NFTMarketplaceFactory.deploy(
        royaltyFee,
        artist.address,
        prices,
        { value: deploymentFees }
      );
  
    });
  
    describe("Deployment", function () 
    {
  
      it("Should track name, symbol, URI, royalty fee and artist", async function () 
      {
        const nftName = "DAppFi"
        const nftSymbol = "DAPP"
        expect(await nftMarketplace.name()).to.equal(nftName);
        expect(await nftMarketplace.symbol()).to.equal(nftSymbol);
        expect(await nftMarketplace.baseURI()).to.equal(URI);
      });
    });
})