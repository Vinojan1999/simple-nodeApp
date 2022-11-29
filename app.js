// function sayHello(name) {
//     console.log("Name: " + name);
// }

// sayHello('Vinojan Abhimanyu');

// /////////////////////////////////////////////////////

// var logger = require('./logger');
// console.log(logger);
// Output - { log: [Function: log], endPoint: 'http://mylogger.io/log' }

// logger.log('Vinojan Abhimanyu');
// logger('Vinooo');

// /////////////////////////////////////////////////////

// const path = require('path');
// var pathObj = path.parse(__filename);

// console.log(pathObj);

// /////////////////////////////////////////////////////

// OS Module
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// //////////////////////////////////////////////////////

// File Syatem
// const fs = require('fs');
// var files = fs.readdirSync('./');
// console.log(files)

// fs.readdir('./', (err, files) => {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// })

// /////////////////////////////////////////////////////

// Event Module 
// const EventEmitter = require('events');     // It's a Class
// const emitter = new EventEmitter();         // It's Object, This object we are going to use in our application
// This emitter has the bunch of methods, All the methods are in NODE DOCUMNTATION

// Resister a Listener
// emitter.on('MessagedLogged', (arg) => {    // e, eventArg
//     // this function will be called "When that event is registered"
//     console.log('Listener called', arg);
// });

// Raise an Event 
// emitter.emit('MessageLogged', { id: 1, url: 'http://localhost' });      //Object as event argument

// ///////////////////////////////////////////////////

// HTTP Module
const http = require('http');

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
// server.on('connection', (Socket) => {
//     console.log('New Connection...');
// });

server.listen(3000);

console.log('Server listening on port 3000');

// ///////////////////////////////////////////////////