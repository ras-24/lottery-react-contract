import web3 from "./web3";

const address = "YOUR_ADDRESS";
// remember to change this to your Contract Deployed Address!

const abi = [YOUR_ABI]
// remember to change this to your Contract ABI!

// eslint-disable-next-line import/no-anonymous-default-export
export default new web3.eth.Contract(abi, address);
