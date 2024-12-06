// // npx hardhat --network avalanche-testnet run scripts/test.ts

// import { EndpointId } from "@layerzerolabs/lz-definitions";
// import { Options } from "@layerzerolabs/lz-v2-utilities";
// import { ethers } from "hardhat";

// const hre = require("hardhat");

// async function main() {
//     const MyOFT = await ethers.getContractFactory('MyOFTMock');
//     const myOFTA = MyOFT.attach('0x4E718647a782b91A974ad5563d9BEB53c38b053b');

//     const signers = await ethers.getSigners();

//     const [ownerA, ownerB, endpointOwner] = signers

//     const initialAmount = ethers.utils.parseEther('100')
//     const tx = await myOFTA.mint(ownerA.address, initialAmount)
//     await tx.wait()

//     const tokensToSend = ethers.utils.parseEther('1')
//     const options = Options.newOptions().addExecutorLzReceiveOption(200000, 0).toHex().toString()
//     const sendParam = [
//         EndpointId.SEPOLIA_V2_TESTNET,
//         ethers.utils.zeroPad(ownerB.address, 32),
//         tokensToSend,
//         tokensToSend,
//         options,
//         '0x',
//         '0x',
//     ]
//     const [nativeFee] = await myOFTA.quoteSend(sendParam, false)
//     const tx1 = await myOFTA.connect(ownerA).send(sendParam, [nativeFee, 0], ownerA.address, { value: nativeFee })
//     await tx1.wait()
// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });