// 1-connection to the server
// Write a node.JS program that execute a connection to server and return success message like "Success, i'm listening from port: 3000"
var http = require('http')
var server = http.createServer()
var port = 3000
server.on('request', function (req, res) {
  res.end("Succes, i'm listening from port: 3000")
})
server.listen(port)
