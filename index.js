#!/usr/bin/env node

import chalk from 'chalk';

console.log(chalk.bgGreen('hello world'));

let playerName;
//lets a message linger on the console
//we use this because js does not implement a promise based timeout by default
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbbow(
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
}
