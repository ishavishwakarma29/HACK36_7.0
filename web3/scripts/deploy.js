
async function main() {
    const contractFactory=await hre.ethers.getContractFactory("SmartContract");
    const contract=await contractFactory.deploy();
    await contract.deployed();
    console.log(contract.address);
}

main().
    then(() => process.exit(0))
    .catch((error)=>{
    console.log(error);
    process.exit(1);
});

