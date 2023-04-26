const { ethers } = require("hardhat");

async function main(){

  const nftContract  = await ethers.getContractFactory("NFT");

  //deploy
  const deployedNFTContract = await nftContract.deploy();

  // wait for the deployment
  await deployedNFTContract.deployed();

  console.log("NFT Contract Address:", deployedNFTContract.address);
}
//Call the main function
main()

  // .then(() => process.exit(0))
  // .catch((err) => console.log(err), process.exit(1))
