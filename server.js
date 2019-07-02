var express = require('express');
var app = express();

app.use(express.static('./public'))
var server = app.listen(3000);

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', function (socket){
    console.log('New connection '+socket.id);

    socket.on('mouse',function(data){
        // console.log(data);
        socket.broadcast.emit('mouse',data);
    })
})





