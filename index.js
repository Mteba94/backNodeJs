const express = require('express');
const apiRouter = require('./server');
const cors = require('cors');
const {errorLogs, errorHandler} = require('./middleware/error.handler');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  //req es request, la peticion
  //res es response, la respuesta
  res.send('Hola mundo!')
})

apiRouter(app);

app.use(errorHandler);
app.use(errorLogs);


app.get('/ayuda', (req, res) => {
  res.status(200).send('hola desde help')

  });


app.listen(port, (req, res) => {
  console.log(`Escuchando en el puerto ${port}`);
})
