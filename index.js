#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your message to count",
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
