
// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
var fs = require('fs');
var token = {};
// Use fs.readFile() method to read the file
fs.readFile('./jwt.txt', 'utf8', function(err, data){
token = data;
	// Display the file content
	console.log("Read data "+data);
module.exports = token;
});

console.log('readFile called');


