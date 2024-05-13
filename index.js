//importing inquirer and chalk 
import inquirer from "inquirer";
import chalk from "chalk";
//display a welcome message
console.log(chalk.bold.blueBright("\n \t\tWelcome to code with HOORIYA --- WORDS COUNTER GAME"));
console.log("=".repeat(60));
//asking a question from user to enter a sentence
let userAnswer = await inquirer.prompt({
    "name": "words",
    "type": "input",
    "message": "enter your sentence!!"
});
//dispaly the user's sentence
console.log(chalk.yellowBright.bold `${userAnswer.words}`);
//trimming the sentece and split the words based on "spaces"
let sentence = userAnswer.words.trim().split(" ");
console.log("=".repeat(60));
//analyse the user's sentence
console.log(chalk.bold.bgGray(("sentence words :")));
console.log(sentence);
console.log(chalk.bold.bgMagenta(`\n - Word Count : ${chalk.bgRedBright.bold(sentence.length)}`));
console.log("=".repeat(60));
