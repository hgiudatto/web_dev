
/* ########################################################################### */
/* ######################### # Node JS - API # ############################### */
/* ########################################################################### */

/* https://nodejs.org/dist/latest-v16.x/docs/api/ */

/* ########################################################################### */
/* OS */
/* ########################################################################### */

/* const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', bytesToSize(os.freemem()));
console.log('total mem: ', bytesToSize(os.totalmem()));

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
 */

/* ########################################################################### */
/* File system */
/* ########################################################################### */

/* const fs = require('fs'); */ 

/* fs.writeFile('./text.txt', 'line one', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('File created successfully');
}); */

/* fs.readFile('./text.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
}) */

/* ########################################################################### */
/* HTTP */
/* ########################################################################### */

/* const http = require('http');

const colors = require('colors');

const handlerServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hello World!!</h1>');
    res.end();
}

const server =  http.createServer(handlerServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.yellow);
}); */

/* ########################################################################### */
/* Express */
/* ########################################################################### */

const express = require('express');
const colors = require('colors');
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hello World from Express and Node JS!</h1>')
});

server.listen(3000, () => {
   console.log('Server on port 3000'.orange); 
});

