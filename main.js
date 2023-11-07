import inquirer from "inquirer";
let user = await inquirer.prompt({
    type: "input",
    name: "username",
    message: "what is your name"
});
console.log(user);
