#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.neon(
    'Are you a sports nerd , take the quiz to find out? \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.white.bgRed.italic('killed')}
    So get all the questions right...

  `);
}

//this handles the answers to the questions
async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
  
    // code is 1(correct), we want to show a success message 
    if (isCorrect) {
      spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
    } 
    //code is 0(wrong), we want to show a failure message
    else {
      spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}! better luck next time` });
      process.exit(1);
    }
  }
  


//we used inqiurer to ask the user for their name and then we stored it in playerName
async function askName() {
    const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'What is your name?',
      default() {
        return 'Player';
      },
    });
  
    playerName = answers.player_name;
  }

  function winner() {
    console.clear();
    figlet(`Congrats , ${playerName} !\n You are actually a sports nerd mate`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');
  
      console.log(
        chalk.magenta(
          `Programming isn't about what you know; it's about making the command line look cool`
        )
      );
      process.exit(0);
    });
  }

  
  //now we will use inquirer to ask the user multiple questions 
  async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'Which country won the FIFA World Cup in 2018?\n',
      choices: [
        'Brazil',
        'Germany',
        'France',
        'Argentina',
      ],
    });
  
    return handleAnswer(answers.question_1 === 'France');
}

async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'Who is the all-time top scorer in the UEFA Champions League?\n',
      choices: [
        'Lionel Messi',
        'Cristiano Ronaldo',
        'Raul',
        'Robert Lewandowski',
      ],
    });
  
    return handleAnswer(answers.question_2 === 'Cristiano Ronaldo');
}

async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: 'In which year did England win the FIFA World Cup?\n',
      choices: [
        '1962',
        '1966',
        '1970',
        '1982',
      ],
    });
  
    return handleAnswer(answers.question_3 === '1966');
}

async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'Which club has won the most UEFA Champions League titles?\n',
      choices: [
        'Real Madrid',
        'Barcelona',
        'Manchester United',
        'Bayern Munich',
      ],
    });
  
    return handleAnswer(answers.question_4 === 'Real Madrid');
}

async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message: 'Who won the Golden Ball in the 2014 FIFA World Cup?\n',
      choices: [
        'Lionel Messi',
        'Cristiano Ronaldo',
        'James Rodriguez',
        'Thomas Muller',
      ],
    });
  
    return handleAnswer(answers.question_5 === 'James Rodriguez');
}

async function question6() {
    const answers = await inquirer.prompt({
      name: 'question_6',
      type: 'list',
      message: 'Which country won the ICC Cricket World Cup in 2019?\n',
      choices: [
        'India',
        'Australia',
        'England',
        'New Zealand',
      ],
    });
  
    return handleAnswer(answers.question_6 === 'England');
}

async function question7() {
    const answers = await inquirer.prompt({
      name: 'question_7',
      type: 'list',
      message: 'Who holds the record for the most runs in a single Test inning?\n',
      choices: [
        'Sachin Tendulkar',
        'Brian Lara',
        'Virender Sehwag',
        'Don Bradman',
      ],
    });
  
    return handleAnswer(answers.question_7 === 'Brian Lara');
}

async function question8() {
    const answers = await inquirer.prompt({
      name: 'question_8',
      type: 'list',
      message: 'In which year was the first-ever international cricket match played?\n',
      choices: [
        '1864',
        '1872',
        '1889',
        '1900',
      ],
    });
  
    return handleAnswer(answers.question_8 === '1872');
}

async function question9() {
    const answers = await inquirer.prompt({
      name: 'question_9',
      type: 'list',
      message: 'Who is known as the "Sultan of Swing" in cricket?\n',
      choices: [
        'Wasim Akram',
        'Curtly Ambrose',
        'Glenn McGrath',
        'James Anderson',
      ],
    });
  
    return handleAnswer(answers.question_9 === 'Wasim Akram');
}

 async function question10() {
     const answers = await inquirer.prompt({
       name: 'question_10',
       type: 'list',
       message: 'Which country hosted the first-ever Cricket World Cup?\n',
       choices: [
         'England',
         'India',
         'Australia',
         'West Indies',
       ],
     });
   
     return handleAnswer(answers.question_10 === 'England');
 }



    

await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
await winner();
