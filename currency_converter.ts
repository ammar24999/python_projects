#! /usr/bin/env node

import inquirer from "inquirer";
let repeat=true

const USDtoPKR=284.50
const USDtoEU=0.93 
const EUtoUSD=1.07
const EUtoPKR=305.45
const PKRtoUSD=0.0035
const PKRtoEU=0.0033
async function converter() {

    do{
    let answer :{CurrencyFrom:string,
      
        currencyTo:string,Amount:number}= await inquirer.prompt([
        {
            name:"CurrencyFrom",
            type:"list",
            choices:["USD","PKR","EU"],
            message:"Selection the currency"

        },
        {
            name:"currencyTo",
            type:"list",
            choices:["USD","PKR","EU"],
            message:"Selection which currency you want convert"
        },
        {
            name:"Amount",
            type:"number",
            message:"Enter the ammount you want to convert"
        },
       
    ]);
    switch(answer.CurrencyFrom){
        case "USD":
        if (answer.currencyTo==="PKR"){
            let ammount=USDtoPKR*answer.Amount;
            console.log(ammount)    
            break;
        }
        else if (answer.currencyTo==="EU"){
            let ammount=USDtoEU*answer.Amount;
            console.log(ammount)
            break;
        }
        else{
            console.log(answer.Amount)
            break;}
        case "EU":
        if (answer.currencyTo==="PKR"){
            let ammount=EUtoPKR*answer.Amount;
            console.log(ammount)    
            break;
        }
        else if (answer.currencyTo==="USD"){
            let ammount=EUtoUSD*answer.Amount;
            console.log(ammount)
            break;
        }
        else{
            console.log(answer.Amount);
            break;
        }
        case "PKR":
        if (answer.currencyTo==="USD"){
            let ammount=PKRtoUSD*answer.Amount;
            console.log(ammount)    
            break;
        }
        else if (answer.currencyTo==="EU"){
            let ammount=PKRtoEU*answer.Amount;
            console.log(ammount)
            break;
        }
        else{
            console.log(answer.Amount);
            break;
        }

    }
    repeat= await Repeat_again();
}    while (repeat == true);
}
async function Repeat_again() {
    const answer = await inquirer.prompt({
        name:"repeat",
        type:"list",
        choices:["Yes","No"],
        message:"Do you want to restart the program"
    });
    
    return answer.repeat==='Yes'?true :false
    
}

converter();