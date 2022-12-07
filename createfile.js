var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'The file was successfully created!', function (err) {
  if (err) throw err;
  console.log('File created...');
});