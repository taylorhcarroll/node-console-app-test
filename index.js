#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation'
import inquirer from 'inquirer'

console.log(chalk.bgGreen('hello world'));

let playerName;
//lets a message linger on the console
//we use this because js does not implement a promise based timeout by default
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Who wants to be a Javascript Millionaire???'
    );
    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
    `);
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });
    playerName = answers.playerName;
    console.log(`Welcome ${answers.player_name}`)
}

// this could also be done using the following:
//https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })

//the above website reccomends you install the inquirer package as a simpler way to collect sample input:
// const inquirer = require('inquirer')

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?"
//   }
// ]

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers['name']}!`)
// })

//nodeJS supports top level await, so you can use the await keyword outside an async function
await welcome()
await askName()