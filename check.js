// install 
// npm install ethers@^5.0.0

const { ethers } = require("ethers");

const mnemonic =
  "12 MNEMONIC";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/YOURAPIKEY"
);

async function main() {
  try {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    const address = wallet.address;

    console.log(`Address: ${address}`);

    const balance = await provider.getBalance(address);

    const balanceInEther = ethers.utils.formatEther(balance);

    console.log(`Balance: ${balanceInEther} ETH`);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
