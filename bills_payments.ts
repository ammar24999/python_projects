//import chalk from "chalk";

import inquirer from "inquirer";
const SSGC = Math.ceil(Math.random() * 10000 + 1);
const Chalan = Math.ceil(Math.random() * 10000 + 1);
const electricity = Math.ceil(Math.random() * 10000 + 1);
const PTCL = Math.ceil(Math.random() * 10000 + 1);

async function billspayment(balance: number) {
  const answer = await inquirer.prompt([
    {
      name: "billType",
      type: "list",
      choices: ["electric", "SSGC", "PTCL", "Chalan"],
      message:"please select your bill type",
    },
  ]);
  if (answer.billType == "SSGC") {
    console.log(`your bill ammount is ${SSGC}`);
    balance -= SSGC;
  } else if (answer.billType == "PTCL") {
    console.log(`your bill ammount is ${PTCL}`);
    balance -= PTCL;
  }else if (answer.billType == "electric") {
    console.log(`your bill ammount is ${electricity}`);
    balance -= electricity;
  } else if (answer.billType == "Chalan") {
    console.log(`your bill ammount is ${Chalan}`);
    balance -= Chalan;
  } else {
    ("Your balance is insufficient");
  }
  return balance;
}

export default billspayment;
