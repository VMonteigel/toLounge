console.log('Старт приложения To Longue');

const express = require('express');
const app = express();
const mongoose = require("mongoose");

const { port, db } = require("./configuration");
const { connectDb } = require("./helpers/db");

//типа сервер
const www = "/www/"; // костыль
app.use(express.static(www));
app.get('/', (req, res)=> {
        res.sendFile(__dirname + www + 'index.html');
  });

// запуск приложения
/*
const startServer = () => {
  app.listen(port, () => {
    console.log(`Сервер запущен, порт: http:localhost:${port}`);
    console.log(`Url базы данных: ${db}`);
   
  });
};

// БД
connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
*/

app.listen(port, () => {
  console.log(`Сервер запущен, порт: http:localhost:${port}`);
  console.log(`Url базы данных: ${db}`);
 
});