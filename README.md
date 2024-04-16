# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/ERC20.js
```

# TicketApp-Hardhat

# Latest Polygon Amoy commands

### Compile

- first compile contract in contracts directory

```shell
npx hardhat compile
```

- Then deploy:

### Deployment through ignition

- Need to add OKX key for deployment variable if any is required in the hardhat config js file 

### After compilation need to setup variable key for etherscan verification which will okx api key for amoy polygon as only require for verification

```shell
  npx hardhat vars set OKLINK_AMOY_API
```

- Then paste the key in cmd and set it. It will convey configuration variable has been stored.

- After that deploy using the command

```shell
npx hardhat ignition deploy ignition/modules/ERC20.js --network polygonAmoy
```

- It will start the deployment after asking some question just type y.

- After this once deployment is completed it will return the contract address which will not be verified but since the key is setup we can verify OKLINK_AMOY_API is already setup.

### Latest Token Address (Polygon Amoy Testnet):

- Token#Token - 0xCdcFD7820C6295D3E65167EFb47D7B045564d81c

# For Verification

- Use Command for Token contract verification

```shell
npx hardhat verify 0xCdcFD7820C6295D3E65167EFb47D7B045564d81c --network polygonAmoy
```

- It will verify the contract on the Polygon Amoy test network

### URL for Token 
Address URL : https://www.oklink.com/amoy/address/0xCdcFD7820C6295D3E65167EFb47D7B045564d81c/contract