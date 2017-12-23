var express = require('express');
var socket = require('socket.io');
//App setup
var app = express();
var server = app.listen(80,function(){
  console.log("Listening to requests on port 4000")
});


var fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// POST http://localhost:8080/api/users
// parameters sent with 

app.post('/', function(req, res) {
	var user_id = req.body;
	console.log(user_id);
});

//Static files
app.use(express.static('public'));
var users = [];
var list = {
    handleName:'',
    id:''
};
var arr =[];
//Socket setup
var io = socket(server);
io.on('connection',function(socket){
    console.log('made socket connection', socket.id);
   
    socket.on('check', function(data){
        io.sockets.emit('check', data);
    });
    
    socket.on('online', function(data){
       if(users.indexOf(data) === -1) {
            users.push(data);
            console.log(data);
        }
        io.sockets.emit('online', users);
    }); 
    
    socket.on('offline', function(data){
        console.log(data + '- disconnect');
        for(var i=0; i < users.length; i++) {
           if(users[i] == data){
              users.splice(i,1);
           }
        }
        console.log(users);
            io.sockets.emit('offline', users);
    }); 
    
    socket.on('chat', function(data){
         var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

        fs.appendFileSync('public/messages.txt', data.handle + ': ' +data.message + ' ('+ time + ')\r\n');
        io.sockets.emit('chat', data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });
    
myDate = new Date(); 

    socket.on('tabs',function(data){
        var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

        fs.appendFileSync('public/links.txt',time +' time of first link shared' + '\r\n \r\n');
        data.forEach((link,i)=>{
            fs.appendFileSync('public/links.txt',i+1 + '- '+ link + '\r\n \r\n');
        });
//        for(var i =0;i<arr.length;i++){
//            if(socket.id === arr[i].id)
//                console.log(arr[i].handleName);
//        }
        io.sockets.emit('print', data);
    });
});

