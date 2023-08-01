const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const awsRouter = require('./routes/awsRouter.ts');
const userRouter = require('./routes/userRouter.ts')
const path = require('path');

// add the beginning of your app entry
// import 'vite/modulepreload-polyfill'

const PORT = 3000;
console.log('In server.ts before mongoDB connection')
mongoose.connect(`${process.env.ACCESS_KEY}`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route handlers go here
app.use('/aws', awsRouter);
app.use('/user', userRouter);

//404 handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

//connect with index.html
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
});

//global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => `listening on port ${PORT}`);

// export const handler = app;
module.exports = app;