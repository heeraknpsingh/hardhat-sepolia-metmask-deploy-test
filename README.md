# hardhat-sepolia-metmask-deploy-test
This repository is for github actions demo


clone and npm install 
npx hardhattest  
npx hardhat run scripts/deploy.js --network sepolia
cd client
npm install 
npx next dev
npx create-next-app [will ask questions name client, typescript]

.env file should have
ALCHEMY_SEPOLIA_URL=""
WALLET_PRIVATE_KEY=""
WALLET_PUBLIC_KEY=""

client/config.js file should have, value you get after deploying smart contract  
export const LibraryContractAddress=""