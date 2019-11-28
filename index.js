const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const model = require('./models');

// ======================
// SERVER SETUP
// ======================
const PORT = process.env.APP_PORT || 5000;

const app = express();
app.set('port', PORT);
app.use(cors());

// ROUTES
app.get('/', (req, res) => res.sendStatus(200));
app.use('/khotmil', require('./routes/khotmil'));

const server = http.createServer(app);

const startServer = () => {
  return server.listen(PORT, () => {
    console.log('Server listen on port ', PORT);
  });
}

// ======================
// DATABASE AUTHENTICATE
// ======================
const db = model.sequelize;

const dbAuthenticate = () => {
  return db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(error => console.log('Error: ', error));
}

// ======================
// START APP
// ======================
const startApp = async() => {
  await dbAuthenticate();
  startServer();
}

startApp();