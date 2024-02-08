//Socket io server

const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
const fs = require('fs');

const app = express();

var sender = "";
var receiver = "";
var PORT = process.env.PORT || 3000;
const server = app.listen(PORT); //tells to host server on localhost:3000


//Playing variables:
app.use(express.static('public')); //show static files in 'public' directory
console.log('Server is running');
const io = socket(server);

//var count = 0;
//var message = "Hello from the Producer"



//Socket.io Connection------------------
io.on('connection', (socket) => {

    console.log("New socket connection: " + socket.id)


    
    socket.on('location_update', function(data,data2,data3)  {
        console.log(data)
        console.log(data2)
        console.log(data3)
        
        // sender = data ;
        // receiver = data + 1;
        // console.log(sender)
        // console.log(receiver)

        io.emit('test', data);
        
    });
    // socket.on(sender, function(data)  {
    //     console.log(data)
        
    //     io.emit(receiver, data);
        
    // });
    // socket.on(receiver, function(data)  {
    //     console.log(data)
        
    //     io.emit(sender, data);
        
    // });
})
