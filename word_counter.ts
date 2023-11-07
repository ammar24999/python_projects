#! /usr/bin/env node

import inquirer from "inquirer";
import chalk, { Options } from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, 2000);
  }); 
};


async function welcome() {
    const rainbowtitle = chalkAnimation.rainbow(
      "---------Lets Start The Program-----------"
    );
    await sleep();
    rainbowtitle.stop();
  }
welcome();


export async function askquestion() {
    let que=await inquirer.prompt([{
        type:"input",
        name:"str" ,
        message: chalk.rgb(187,143,206)
    }])

    const word_arr = que.str.split(" ");
    console.log(word_arr)
    console.log("Total words in paragraph :",word_arr)
    const para_without_Space:string=que.str.replace(/ /g,"")
    console.log("character in paragraph: ",para_without_Space.length);
    console.log(para_without_Space);

    

}
let Playagain; 
async function startagain() {
    do {
        await askquestion();
        Playagain = await inquirer.prompt(
            {
                type: "input",
                name: "restart",
                message: chalk.rgb(187, 143, 206)(`Do you want to restart press Y   or N`),
            },)
    } 
    while (Playagain.restart === "Y" || Playagain.restart === "yes" || Playagain.restart === "y" || Playagain.restart === "Yes");

}
startagain();

