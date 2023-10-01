console.log('Старт приложения To Longue');

const express = require('express');
const app = express();

//const { connectDb } = require("./helpers/db");
const { port, uri, dbname } = require("./configuration");

//типа сервер
const www = "/www/"; // костыль
app.use(express.static(www));
app.get('/', (req, res)=> {
        res.sendFile(__dirname + www + 'index.html');
  });

  app.get('/about', (req, res)=> {
    res.send('Но Димон - это не nodemon-святая корова');
});

app.get('/test', (req, res)=> {
  res.send('Проверка nodemon');
});

// запуск приложения
//const startServer = () => {
  app.listen(port, () => {
    console.log(`Сервер запущен, порт: http:localhost:${port}`);
    console.log(`Url базы данных: ${uri}`);
   
  });
//};

// БД
/*
connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
*/

const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

async function run() {
  try {
    const connectDb = client.db(dbname);
    if(connectDb) console.log("Подключение к БД выполнено");
    else console.log("БД потерялась");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);