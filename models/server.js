// Import the express library
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');


class Server {
    constructor (){
        this.app = express();
        this.port = process.env.PORT;

        //http server
        this.server = http.createServer(this.app);

        //configuraion of sockets
        this.io = socketio(this.server ,{/*Configurations */});

    }
    middlewares(){
        //deploying  rirectory public
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }
    
    configurationSockets(){
        new Sockets(this.io);//instance of the Sockets classs
    }

    execute(){
        //Initialize middlewares
        this.middlewares();

        this.configurationSockets();

        //initialize sockets
        this.server.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}
module.exports = Server;