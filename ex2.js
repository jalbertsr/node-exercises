// 2-show content
// Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.

var fs = require('fs')
fs.readFile(process.argv[2], 'utf-8', function read (err, data) {
  if (err) throw err
  console.log(data)
})
