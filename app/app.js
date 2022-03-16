"use strict";

const express = require('express');
const app = express();



//라우팅
const home = require("./src/routes/home");

app.set('views', './app/src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use('/', home); //use -> 미들웨어를 등록

module.exports = app;


// const http = require('http');
// const app = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
//     if( req.url === "/"){
//         res.end('여기는 루트입니다.');
//     }else if( req.url ==="/login"){
//         res.end('login ');
//     }
// });

// app.listen(3001, ()=>{
//     console.log("TEST");
// });