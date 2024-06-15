class Sockets {
constructor(io){
    this.io = io;
    this.sockeEvents();
    

}

sockeEvents(){
    //On conection
     this.io.on('connection', ( socket) => {

        //listen the event
        socket.on('mensaje-to-server', (data) => {
            console.log(data);
          this.io.emit('mensaje-from-server', data); // io  send message to all clients
        });

    });
    
    /*
//socket connection
io.on('connection', ( socket) => {  //socket is the server
    //console.log(socket.id); 
    //this event is triggered when the client sends a message
    socket.emit('message-welcome', {
        msg: 'Welcome to the server ',
        date: new Date()
    }); //send message to the client
    socket.on('mensaje-to-server', (data) => {
        console.log(data);
        io.emit('mensaje-from-server', data); // io  send message to all clients
    });

 
});*/


}

}

module.exports = Sockets;