import chalk from 'chalk';
import boxen from 'boxen';
import readline from 'readline';

function write(text) {
    process.stdout.write(text);
}


inquirer
  .prompt([
    {type:'input', name:'name', message: 'What is your name?'},
    {type:'list', name:'gender', message: 'What is your gender?', choices: ['male', 'female', 'bigender', 'apache helicopetr', 'other']},
    {type:'number', name:'number', message: 'What is your number?'},
    {type:'confirm', name:'Prayed', message: 'Did you pray today?'},
    {type:'rawlist', name:'sus', message: 'How sus are you?', choices: ['very','impostor type','a lil','not sus']},
    {type:'password', name:'Password', message: 'Type your password'},
    {type:'checkbox', name:'prayed', message: 'Did you pray?', choices: ['Yes, i did','No, I didnt','fuck you']},
    {type:'editor', name:'editor', message: 'Editor'},
    {type:'expand', name:'expand', message: 'Conflict on file amongus', choices: ['fuck it','delete it','ignore']},
])
  .then((answers) => {
    console.log(answers)
    {checked: true}
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });