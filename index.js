#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const stopTime = () => {
    return new Promise((res) => {
        setTimeout(res, 3500);
    });
};
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
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform? \n",
            choices: ["Add", "Substract", "Multiply", "Divide"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2: "
        }
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        //   console.log(answers);
        if (answers.operator == "Add") {
            console.log(answers.operator + " result = " + (answers.num1 + answers.num2));
        }
        else if (answers.operator == "Substract") {
            console.log(answers.operator + " result = " + (answers.num1 - answers.num2));
        }
        else if (answers.operator == "Multiply") {
            console.log(answers.operator + " result = " + (answers.num1 * answers.num2));
        }
        else if (answers.operator == "Divide") {
            console.log(answers.operator + " result = " + (answers.num1 / answers.num2));
        }
    });
}
await welcome();
async function startAgain() {
    do {
        await askQuestions();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you wish to restart calculator? Y/N ?"
            }
        ]);
    } while (again.restart == "Y" || again.restart == "y");
}
;
await startAgain();
