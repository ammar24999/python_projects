import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import mainscreen from "./main_screen.js";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let rainbowTitle = chalkAnimation.karaoke("Welcome to our atm");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.green `
       888                 
       888                 
       888                 
8888b. 88888888888b.d88b.  
"88b888   888 "888 "88b 
.d888888888   888  888  888 
888  888Y88b. 888  888  888 
"Y888888 "Y888888  888  888 
    `);
}
await Welcome();
let users = [
    {
        name: "ammar",
        account_number: 1000,
        pin_Code: "1111",
        balance: Math.ceil(Math.random() * 100000 + 1)
    },
    {
        name: "hasan",
        account_number: 1001,
        pin_Code: "1100",
        balance: Math.ceil(Math.random() * 100000 + 1)
    }
];
async function login() {
    const answer = await inquirer.prompt([{
            name: "account_number",
            type: "number",
            message: chalk.blueBright `Enter your account Number`
        }, {
            name: "pin",
            type: "password",
            message: chalk.blueBright `Enter your pin code`
        }
    ]);
    let user = users.find(x => x.account_number == answer.account_number && x.pin_Code == answer.pin);
    if (typeof user !== "undefined") {
        console.log(chalk.blueBright `welcome ${user.name}`);
        mainscreen(user.balance);
    }
    else {
        console.log(chalk.red `you entered invaid credential`);
    }
}
login();
