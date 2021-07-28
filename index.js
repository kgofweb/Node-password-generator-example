const program = require('commander');

// Program version
program.version('1.0.0').description('Simple password generator')

program
  //Length of password 
  .option('-l, --length <number>', 'length of password', '8')
  // Save it or not
  .option('-s, --save', 'save password to passwords.txt')
  // No numbers
  .option('-nn, --no-numbers', 'remove numbers')
  // No symbols
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

const { length, save, numbers, symbols } = program.opts();

// function
