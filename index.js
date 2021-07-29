#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./password/createPassword');
const savePassword = require('./password/savePassword');

const log = console.log;

// Program version
program.version('1.0.0').description('Simple password generator');

program
  // Length of password 
  .option('-l, --length <number>', 'length of password', '8')
  // Save it or not
  .option('-s, --save', 'save password to passwords.txt')
  // No numbers
  .option('-nn, --no-numbers', 'remove numbers')
  // No symbols
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Save to file
if(save) {
  savePassword(generatedPassword);
}

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied to clipboard'));