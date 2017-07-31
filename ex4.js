// 4-File list
// Write a node.JS program that list the content of the current directory indicating if is a directory or a file

var fs = require('fs')
var files = fs.readdirSync('./')
for (var i in files) {
  (fs.lstatSync(files[i]).isDirectory()) ? console.log('DIR: ' + files[i]) : console.log('FILE: ' + files[i])
}
