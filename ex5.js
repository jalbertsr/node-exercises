// 5-Writing on txt
// Write a node.JS program that creates a txt file with the text passed as a parameter

var fs = require('fs')
fs.writeFile(process.argv[2] + '.txt', process.argv[3], function (err) {
  if (err) throw err
})
