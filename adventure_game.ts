#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

class Player {
    name: string;
    health: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    decreaseHealth() {
        this.health -= 25;
    }

    increaseHealth() {
        this.health += 25;
    }
}

class Opponent {
    name: string;
    health: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    decreaseHealth() {
        this.health -= 25;
    }
}

const player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please enter your name",
    },
]);

const opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Please choose your opponent",
        choices: ["Skeleton", "Assassin", "Zombie"],
    },
]);

const p1 = new Player(player.name);
const o1 = new Opponent(opponent.select);

function displayHealth() {
    console.log(`${chalk.bold.green(p1.name)} health: ${p1.health}`);
    console.log(`${chalk.bold.red(o1.name)} health: ${o1.health}`);
}

console.log(`${chalk.bold.green(player.name)} vs ${chalk.bold.red(opponent.select)}`);

(async function playGame() {
    while (p1.health > 0 && o1.health > 0) {
        const answer = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Select your action",
                choices: ["Attack", "Increase health", "Run for your life!"],
            },
        ]);

        switch (answer.select) {
            case "Attack":
                const num = Math.floor(Math.random() * 2);
                if (num === 0) {
                    o1.decreaseHealth();
                } else {
                    p1.decreaseHealth();
                }
                displayHealth();
                break;
            case "Increase health":
                p1.increaseHealth();
                displayHealth();
                break;
            case "Run for your life!":
                console.log(chalk.bold.bgYellow(`${p1.name} ran away! You lose the game.`));
                process.exit();
                break;
        }
    }

    if (p1.health <= 0) {
        console.log(chalk.bold.bgBlueBright(`${p1.name} you lose the game!`));
    } else if (o1.health <= 0) {
        console.log(chalk.bold.yellow(`${o1.name} you lose the game! ${p1.name} wins!`));
    }
})();
