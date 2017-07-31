// 8-Time
// Show Hour Write a node.JS program that shows you the local hour of server.
var strftime = require('strftime')
var date = new Date()
console.log(strftime('%Y-%m-%d: %H:%M', date))
