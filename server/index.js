require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(process.env.PORT || 8008, () => {
  console.log(`Server Started at ${8008}`)
})