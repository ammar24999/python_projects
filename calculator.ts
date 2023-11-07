#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';



const sleep = () => {
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}
async function Welcome (){
    let rainbowTitle=chalkAnimation.karaoke("Lets start the calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.yellow`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `)

}
 
await Welcome();

async function user(){
    
    const answer =await inquirer.prompt([
    {
    type:"list",
    name:"operator",
    message:"which operation ypu want to perform ?/n",
    choices:["+","-","*","/"] ,
        
    },
    {
    type:"number",
    name:"num1", 
    message:"Enter your num1",
    },
    {   
    type:"number",
    name:"num2", 
    message:"Enter your num2"}])
    if (answer.operator ==="+"){
        console.log(`${answer.num1} added by  ${answer.num2} =`,chalk.red(answer.num1 + answer.num2))}
    else if (answer.operator ==="-"){
        console.log(`${answer.num1} subtract by ${answer.num2} =`,chalk.red(answer.num1 - answer.num2))}
    else if (answer.operator ==="/"){
        if (answer.num2==0){
            console.log("Division by zero is not allowed")
        }else{
            console.log (`${answer.num1} Divide by ${answer.num2} =`,chalk.red(answer.num1/answer.num2))}}
    else if (answer.operator ==="*"){
        console.log(`${answer.num1} multiplied by ${answer.num2} =`,chalk.red(answer.num1 * answer.num2))}
    else {
        console.log("plz trake right answer")
    }
        }
        
        
console.log(user())


async function startagain() {
    do{
        await user();
        var again = await inquirer
        .prompt({
            type : "input",
            name:"restart",
            message:"Do you want to continue ? Press y or n : "

        })
    }while(again.restart === "y" || again.restart === "Y" || again.restart==="Yes" || again.restart==="YES" || again.restart==="yes")
    
}
startagain();
