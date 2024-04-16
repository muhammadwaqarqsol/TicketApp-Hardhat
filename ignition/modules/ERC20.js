const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports= buildModule("Token", (m) => {
  const ERC20 = m.contract("Token");
  console.log(ERC20);
  return { ERC20 };
});
