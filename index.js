const Server = require('./models/server');
require('dotenv').config(); //environment variables

const server = new Server(); //instance of the server
server.execute();
/*
// Import the express library
const express = require('express');
const app = express();


//server of  sockets



//configure the server to sockets
const io = require('socket.io')(server);

*/


/*
//deploying  rirectory public
app.use(express.static(__dirname + '/public'));
*/



/*
//port of the server
server.listen(8080 , () =>{
    console.log('Server running on port 8080');
});*/