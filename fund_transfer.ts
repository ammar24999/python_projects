import inquirer from "inquirer";
import chalk from "chalk";
async function fundstransfer(balance: number) {
  const answer = await inquirer.prompt([
    {
      name: "accountNumber",
      type: "input",
      message: chalk.blueBright`"Enter account number"`,
    },{
        name: "amount",
        type: "number",
        message:chalk.blueBright` Enter the amount`,
      }
  ]);
    if(answer.amount < balance)
    {
        balance -= answer.amount
  }
  else{
    console.log(chalk.red  `Your balance is insufficient`)
  }return balance;

}

export default fundstransfer;
