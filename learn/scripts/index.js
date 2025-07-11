// scripts/index.js
async function main () {
  // Our code will go here
//   // Retrieve accounts from the local node
// const accounts = (await ethers.getSigners()).map(signer => signer.address);
// console.log(accounts);

// Set up an ethers contract, representing our deployed Box instance
const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const Box = await ethers.getContractFactory('newBox');
const box = Box.attach(address);

// Call the retrieve() function of the deployed Box contract
const value = await box.retrieve();
console.log('Box value is', value.toString());

// Send a transaction to store() a new value in the Box
await box.store(23);

// Call the retrieve() function of the deployed Box contract
const value1 = await box.retrieve();
console.log('Box value is', value1.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });