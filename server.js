var express = require('express');
var app = express();
const http = require('http')
const port = process.env.PORT || 3000
const server = http.Server(app)

app.use('/',express.static(__dirname +'/public'))


var socketio = require('socket.io');
var io = socketio(server);

io.on('connection', function (socket){
    console.log('New connection '+socket.id);

    socket.on('mouse',function(data){
        // console.log(data);
        socket.broadcast.emit('mouse',data);
    })
})

server.listen(port,()=>{
    console.log('Server started on '+ port)
})



