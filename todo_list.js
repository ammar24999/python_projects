#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
};
async function welcome() {
    const rainbowtitle = chalkAnimation.rainbow("---------Let's Start The Program-----------");
    await sleep();
    rainbowtitle.stop();
}
welcome();
let todolist = [];
async function todo() {
    const questions = [
        {
            name: "options",
            type: "list",
            choices: ["add item", "Display", "Itemremove"],
            message: "what you want to do",
        },
    ];
    let answer = await inquirer.prompt(questions);
    if (answer.options === "add item") {
        const item = await inquirer.prompt([
            {
                name: "newItem",
                type: "input",
                message: "Enter the new item",
            },
        ]);
        todolist.push(item.newItem);
    }
    else if (answer.options === "Display") {
        if (todolist.length < 1) {
            console.log("The todo list is empty. Please add items first.");
        }
        else {
            todolist.forEach((element) => console.log(element));
        }
    }
    else if (answer.options === "Itemremove") {
        const removeItem = await inquirer.prompt([
            {
                name: "remove",
                type: "input",
                message: "Which item you want to remove",
            },
        ]);
        let index = todolist.indexOf(removeItem.remove);
        if (index !== -1) {
            todolist.splice(index, 1);
            console.log("Item removed.");
        }
        else {
            console.log("Item not found in the todo list.");
        }
    }
}
let Playagain;
async function startagain() {
    do {
        await todo();
        Playagain = await inquirer.prompt({
            type: "list",
            name: "restart",
            message: "Do you want to restart? Press Y or N",
        });
    } while (Playagain.restart === "Y" ||
        Playagain.restart === "yes" ||
        Playagain.restart === "y" ||
        Playagain.restart === "Yes");
}
// Call the todo function to start the interaction.
startagain();
