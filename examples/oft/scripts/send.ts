// npx hardhat --network avalanche-testnet run scripts/send.ts
// npx hardhat --network sepolia-testnet run scripts/send.ts

import { EndpointId } from "@layerzerolabs/lz-definitions";
import { Options } from "@layerzerolabs/lz-v2-utilities";
import { ethers } from "hardhat";

const TO_ADDR = "0xa9D15c1c8B264c9082483BBf39Dafb2B844CCbA0"

const hre = require("hardhat");

async function main() {
    const config = {
        "sepolia-testnet": '0x9e8B6Ee10853cdEA780Ec0c4fDAA49C52e77b67E',
        "avalanche-testnet": '0x4BF64CFDFdaaf3E0878C9b255DC1b54110A6c0Bd'
    }
    const eid = {
        "sepolia-testnet": EndpointId.AVALANCHE_V2_TESTNET,
        "avalanche-testnet": EndpointId.SEPOLIA_V2_TESTNET
    }[hre.network.name]

    const addr = config[hre.network.name]
    const MyOFT = await ethers.getContractFactory('MyOFT');
    const myOFT = MyOFT.attach(addr);
    const signers = await ethers.getSigners();
    const [ownerA, ownerB, endpointOwner] = signers
    const tokensToSend = ethers.utils.parseEther('1')
    const options = Options.newOptions().addExecutorLzReceiveOption(200000, 0).toHex().toString()
    const sendParam = [
        eid,
        ethers.utils.zeroPad(TO_ADDR, 32),
        tokensToSend,
        tokensToSend,
        options,
        '0x',
        '0x',
    ]
    const [nativeFee] = await myOFT.quoteSend(sendParam, false)
    const tx1 = await myOFT.send(sendParam, [nativeFee, 0], ownerA.address, { value: nativeFee })
    const r = await tx1.wait()
    console.log(r)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});