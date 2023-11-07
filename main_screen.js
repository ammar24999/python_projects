import inquirer from "inquirer";
import cashwithdraw from "./cash_withdraw.js";
import cash_deposit from "./cash_deposit.js";
import fundstransfer from "./fund_transfer.js";
import billspayment from "./bills_payments.js";
import chalk from "chalk";
async function another_transaction() {
    const anther = await inquirer.prompt([
        {
            name: "anter_trans",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want another Transaction",
        },
    ]);
    return anther.anter_trans;
}
async function mainscreen(balance) {
    do {
        const options = await inquirer.prompt([
            {
                type: "list",
                name: "Menu",
                message: 'please select your one field ?/n',
                choices: [
                    `cash withdrawl`,
                    `Balance check`,
                    `Cash deposit`,
                    `Funds Transfer`,
                    `Utility bills`,
                    `Exit`,
                ],
            },
        ]);
        switch (options.Menu) {
            case "cash withdrawl":
                await cashwithdraw(balance);
                break;
            case "Balance check":
                console.log(chalk.blueBright `your balance is ${balance}`);
                break;
            case "Cash deposit":
                balance = await cash_deposit(balance);
                console.log(chalk.blueBright `Your Transaction is succesfull new balance is ${balance}`);
                break;
            case "Funds Transfer":
                balance = await fundstransfer(balance);
                console.log(chalk.blueBright `your new balance is  ${balance}`);
                break;
            case "Utility bills":
                balance = await billspayment(balance);
                console.log(chalk.blueBright `your new balance is  ${balance}`);
                break;
            case "Exit":
                another_trans = "No";
                break;
        }
        if (options.Menu !== "Exit") {
            var another_trans = await another_transaction();
        }
        if (another_trans == "No") {
            console.log("Thank you for using our services");
        }
    } while (another_trans != "No");
}
export default mainscreen;
