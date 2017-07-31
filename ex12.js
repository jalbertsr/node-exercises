// 12. Creating HTML II Write a node.JS program that
// create a HTML file with a JavaScript function inside that say: "Hello!"

var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
  console.log('request was made: ' + req.url)
  res.writeHead(200, {'Content-Type': 'text/html'})
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')
  myReadStream.pipe(res)
}).listen(8080)
