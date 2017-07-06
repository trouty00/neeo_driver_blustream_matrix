

module.exports.HMXLXXButtonPressed = function HMXLXXButtonPressed(name, deviceid) {
  console.log('[CONTROLLER]', name, 'button was pressed!');
  
/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

var net = require('net');

//update IP address of Blustream HD MATRIX here
var client = new net.Socket();
client.connect(23, '192.168.1.50', function() {
	console.log('Connected');	
	 console.log(name);
	client.write(name);
	//client.write('\n');
	})



client.on('data', function(data) {
	//console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

}