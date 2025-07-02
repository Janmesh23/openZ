// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory('newBox');
//   const box = await Box.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3"); // Replace with your deployed contract address
  console.log('Deploying newBox...');
  const box = await Box.deploy();
  await box.waitForDeployment();
  console.log('newBox deployed to:', await box.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });