#! /usr/bin/env node

console.clear();

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";
import Choices from "inquirer/lib/objects/choices.js";

const stopTime = ()=>{
    return new Promise((res:any)=>{
        setTimeout(res,3500);
    })
}


async function welcome() {
    let rainbowTitle = chalkAnimation.neon("Let's do some calculation!\n\nCoded By Hosein Sirat Mohammad");
    await stopTime();
    rainbowTitle.stop();
}



async function askQuestions() {
   await inquirer
    .prompt([
      /* Pass your questions in here */
        {
            type : "list",
            name : "operator",
            message : "\nWhich operation do you want to perform? \n",
            choices : ["Add","Substract","Multiply","Divide"]
        },
        {
            type : "input",
            name : "num1",
            message : "Enter number 1: ",
            validate(value) {
                const pass = isNaN(value);
                if (pass ) {
                return chalk.bgRed("Please enter a valid number.");
                }
                else
                return true;
            }       
        },
        {
            type : "input",
            name : "num2",
            message : "Enter number 2: ",
            validate(value) {
                const pass = isNaN(value);
                if (pass ) {
                return chalk.bgRed("Please enter a valid number.");
                }
                else
                return true;
            }       
        }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    //   console.log(answers);
        if (answers.operator == "Add")
        {
            console.log ( '\n'+ answers.operator + " result = "+ ( parseInt(answers.num1) + parseInt(answers.num2)))
        }
        else if (answers.operator == "Substract")
        {
            console.log ( '\n'+ answers.operator + " result = "+ (answers.num1 - answers.num2))
        }
        else if (answers.operator == "Multiply")
        {
            console.log ( '\n'+ answers.operator + " result = "+ (answers.num1 * answers.num2))
        }
        else if (answers.operator == "Divide")
        {
            console.log ( '\n'+ answers.operator + " result = "+ (answers.num1 / answers.num2))
        }
    })
    ;    
}

await welcome();
async function startAgain(){
    do{
        await askQuestions();
        var again = await inquirer.prompt([
            {
                type : "confirm",
                name : "restart",
                message : "Do you wish to restart calculator? Y/N ?"
            }
        ])
    }while(again.restart == true);
};
await startAgain();