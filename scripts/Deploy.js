import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Token", (m) => {
  const ERC20 = m.contract("Token");
  console.log(ERC20);
  return { ERC20 };
});
