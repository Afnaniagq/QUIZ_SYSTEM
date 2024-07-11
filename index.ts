#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("-".repeat(50)));
console.log(chalk.red ("\t*WELCOME TO QUIZ SYSTEM APPLICATION*"))
console.log(chalk.green("-".repeat(50)));

let score = 0 ;
let question1 = await inquirer.prompt([
    {
      name:"one",
      type:"list",
      message:chalk.yellow("Q1:What is the correct way to check if two  value are not equal in Typescript?"),
      choices:[{value:"a == b" },{value:"a === b"},{value:"a !== b"} ,{value:"a ===! b"}] 
    }
]);

if(question1.one === "a !== b"){
    console.log(chalk.green("1: Your answer is correct"));
    console.log("-".repeat(80))
    ++score
 }
else{
    console.log(chalk.red("1: Incorrect answer"));
    console.log("-".repeat(80))

}
let question2 =await inquirer.prompt([
    {
      name:"Two",
      type:"list",
      message:chalk.yellow("Q2:Which of the following character is commonly allowed in variable name in Typescript?"),
      choices:[{value:"# "},{value:"@" },{value:"$"}, {value:"&"}] 
    }
]);

if(question2.Two === "$"){
  console.log(chalk.green("2: Your answer is correct"));
  console.log("-".repeat(80))
  ++score
}
else{
  console.log(chalk.red("2: Incorrect answer"));
  console.log("-".repeat(80))

}

let question3 = await inquirer.prompt([
    {
      name:"Three",
      type:"list",
      message:chalk.yellow("Q3:Which operator is commonly used for  sring concatination  in Typescript?"),
      choices:[{value:"+" },{value:"-"} ,{value:"++"} ,{value:"**"}] 
    }
]);

if(question3.Three === "+"){
  console.log(chalk.green("3: Your answer is correct"));
  console.log("-".repeat(80))
  ++score
}
else{
  console.log(chalk.red("3: Incorrect answer"));
  console.log("-".repeat(80))

}
let question4 = await inquirer.prompt([
    {
      name:"Four",
      type:"list",
      message:chalk.yellow("Q4:In Typescript , Which symbol is commonly used to terminate a statement?"),
      choices:[{value:"."} ,{value:":"} ,{value:";"} ,{value:"/"}] 
    }
]);

if(question4.Four === ";"){
  console.log(chalk.green("4: Your answer is correct"));
  console.log("-".repeat(80))
  ++score
}
else{
  console.log(chalk.red("4: Incorrect answer"));
  console.log("-".repeat(80))

}
let question5 = await inquirer.prompt([
    {
      name:"Five",
      type:"list",
      message:chalk.yellow("Q5:Which  method of inquirer.js is used to start the prompt interfarance and recive user input ?"),
      choices:[{value:"start()"} ,{value:"prompt()"} ,{value:"init()"} ,{value:"run()"}] 
    }
]);

if(question5.Five === "prompt()"){
  console.log(chalk.green("5: Your answer is correct"));
  console.log("-".repeat(80))
  ++score
}
else{
  console.log(chalk.red("5: Incorrect answer"));
  console.log("-".repeat(80))

}
if( score >= 4){
    console.log(chalk.green("-".repeat(60)));
    console.log(chalk.yellowBright(`\t"Congratulations!"your score is ${score} *You Win*`));
    console.log(chalk.green("-".repeat(60)));
}
else{
  
  console.log(chalk.green("-".repeat(60)));
  console.log(chalk.red(`\t"Sorry" Your score is ${score} You lose!`)); 
  console.log(chalk.green("-".repeat(50)));
}

