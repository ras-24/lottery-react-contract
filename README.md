# lottery-react-contract

Lottery React Smart Contract

## Getting Started
This is an example of how you can set up this project locally. To get a local copy up and running, follow these steps.

## Installation
1. Clone the repo
   ```sh
   git clone https://github.com/ras-24/lottery-react-contract.git
   ```
2. Go to lottery react contract directory
   ```sh
   cd lottery-react-contract
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. On src/lottery.js file, please change to your Contract Deployed Address and Contract ABI from [lottery contract backend](https://github.com/ras-24/lottery-contract) deployed code.
   ```sh
   const address = "YOUR_ADDRESS";
   // remember to change this to your Contract Deployed Address!

   const abi = // [YOUR_ABI]
   // remember to change this to your Contract ABI!
   ```
5. Run project
   ```sh
   npm run start
   ```
6. Copy **Contract Deployed Address** and **Contract ABI** to [lottery contract frontend](https://github.com/ras-24/lottery-react-contract/blob/main/src/lottery.js)

## License

Distributed under the MIT License. See `LICENSE` for more information.
