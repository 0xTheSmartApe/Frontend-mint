// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const GAS_LIMIT = 3000000;


async function main() {
   [owner] = await ethers.getSigners();
   console.log(`Owner: ${owner.address}`);
  const contractName = 'NFT';
  await hre.run("compile");
  const smartContract = await hre.ethers.getContractFactory(contractName);
  const contract = await smartContract.deploy('The Smart Ape Collection', 'SAPE', 'ipfs://bafybeiag7bomuqgrkx7pwuqtzdkor5zmsack3wglhclbgqk3gikydxmkja/');
  //await contract.deployed();
  console.log(`${contractName} deployed to: ${contract.address}`); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });