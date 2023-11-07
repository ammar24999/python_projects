import inquirer from "inquirer";
import chalk from "chalk";
async function other_amt(balance) {
    const other_amount = await inquirer.prompt([
        {
            name: "other_ammount",
            type: "number",
            message: "please Enter your amount",
        },
    ]);
    if (balance > other_amount.other_ammount) {
        balance -= other_amount.other_ammount;
    }
    else {
        console.log(chalk.red `You have insuffiecient balance`);
        other_amount(balance);
    }
    return balance;
}
async function cashwithdraw(balance) {
    const answer1 = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            choices: ["500", "1000", "5000", "10000", "other_ammount"],
        },
    ]);
    if (answer1.amount < balance) {
        switch (answer1.amount) {
            case "500":
                balance -= 500;
                console.log(chalk.blueBright `your new balance is ${balance}`);
                break;
            case "1000":
                balance -= 1000;
                console.log(chalk.blueBright `your new balance is ${balance}`);
                break;
            case "5000":
                balance -= 5000;
                console.log(chalk.blueBright `your new balance is ${balance}`);
                break;
            case "10000":
                balance -= 10000;
                console.log(chalk.blueBright `your new balance is ${balance}`);
                break;
            case "other_ammount":
                balance = await other_amt(balance);
                console.log(chalk.blueBright `your new balance is ${balance}`);
                break;
        }
    }
    else {
        console.log(chalk.red `Your balance is insufficient`);
    }
}
export default cashwithdraw;
