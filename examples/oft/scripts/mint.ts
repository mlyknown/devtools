// npx hardhat --network avalanche-testnet run scripts/mint.ts
// npx hardhat --network sepolia-testnet run scripts/mint.ts

import { EndpointId } from "@layerzerolabs/lz-definitions";
import { Options } from "@layerzerolabs/lz-v2-utilities";
import { ethers } from "hardhat";

const hre = require("hardhat");

async function main() {
    const config = {
        "sepolia-testnet": '0x9e8B6Ee10853cdEA780Ec0c4fDAA49C52e77b67E',
        "avalanche-testnet": '0x4BF64CFDFdaaf3E0878C9b255DC1b54110A6c0Bd'
    }
    const addr = config[hre.network.name]
    const MyOFT = await ethers.getContractFactory('MyOFT');
    const myOFT = MyOFT.attach(addr);

    const signers = await ethers.getSigners();

    const [ownerA, ownerB, endpointOwner] = signers

    const initialAmount = ethers.utils.parseEther('100')
    const tx = await myOFT.mint(ownerA.address, initialAmount)
    const r = await tx.wait()
    console.log(r)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});