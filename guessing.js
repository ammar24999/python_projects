#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let score = 0;
let play = true;
async function guessingNumber() {
    while (play) {
        let random_num = Math.ceil(Math.random() * 3);
        let answer = await inquirer.prompt([{
                name: "usernumber",
                type: "number",
                message: "Enter any number from 1 to 3"
            }]);
        if (answer.usernumber === random_num) {
            console.log(chalk.green("Guess is rigth"));
            score += 10;
            console.log(chalk.blue("Your score is ", score));
        }
        else {
            console.log(chalk.red("better luck next time"));
            console.log(chalk.yellow("Your score is ", score));
            break;
        }
        console.log(random_num);
    }
}
guessingNumber();
//1 to 5
