const generatePassword = require('generate-password');

function generateAndLogPassword() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true
  });

  console.log(password);
}

generateAndLogPassword();