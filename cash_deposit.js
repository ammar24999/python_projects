import inquirer from "inquirer";
import chalk from "chalk";
async function cash_deposit(balance) {
    const cash_depo = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: chalk.blueBright `"how much money you want to deposit"`
        }]);
    balance += cash_depo.amount;
    return balance;
}
export default cash_deposit;
