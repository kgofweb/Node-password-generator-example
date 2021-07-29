// Init alpha, numb, sym
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

module.exports = createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let characters = alpha;
  hasNumbers ? (characters += numbers) : '';
  hasSymbols ? (characters += symbols) : '';

  return generatePassword(length, characters);
}

const generatePassword = (length, characters) => {
  // Init password to empty
  let password = '';
  for(let i = 0; i < length; i++) {
    // charAt return the first character of a string
    password += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return password;
}