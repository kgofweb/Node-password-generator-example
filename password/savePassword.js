const path = require('path');
const fs = require('fs');
const os = require('os');
const chalk = require('chalk');

module.exports = savePassword = (password) => {
  // Save in pass.txt
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green('Password saved to passwords.txt'));
      })
    })
  })
}