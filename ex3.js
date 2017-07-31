// 3-HTML Code
// Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file link.txt

var fs = require('fs')
var request = require('request')
fs.readFile('link.txt', 'utf-8', function (err, data) {
  if (err) throw err
  request(data, function (error, response, body) {
    console.log('error:', error) // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
    console.log('body:', body) // Print the HTML for the string on link.txt
  })
})
