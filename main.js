import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

//console.log(chalk.bgGreen.magenta('Hello world'));
//console.log(chalk.bgGreen.magenta.underline('Hello world'));
//console.log(chalk.italic('Hello world'));
//console.log(chalk.strikethrough('Hello world'));
//console.log(chalk.inverse('Hello world')); 
//console.log(boxen(chalk.bgGreen.magenta('Hello world'), {borderStyle:'round'}));

console.log(boxen(chalk.bgGreen.black('Amongus'), {title: 'Sus', borderStyle:'double'}));

console.log(boxen(chalk.bgWhite.green('Hello Imposter'), {padding: 1, margin: 1, borderStyle: 'classic'}));
console.log(boxen(chalk.bgRed.green('We have an imposter among us'), {padding: 1, margin: 4, borderColor: 'magenta', borderStyle: 'arrow'}));

console.log(boxen(chalk.bold.inverse('Lets go golfing'), {padding: 2, margin: 2,  borderStyle: 'double'}));
console.log(boxen(chalk.italic.inverse('Tell them to bring out the whole ocean'), {padding: 2, margin: 5, borderColor: 'magenta', borderStyle: 'none'}));
console.log(boxen(chalk.bgCyan.inverse('A lot of turbulence?'), {padding: 2, margin: 1, borderStyle: 'classic'}));
console.log(boxen(chalk.bgWhite.black('Life is roblox!'), {title: 'Khaled', borderStyle:'double'}));
console.log(boxen('Did you pray today?', {dimBorder: 0.35, width: 25,height:5}));
