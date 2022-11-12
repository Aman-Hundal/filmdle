require('dotenv').config();
const express = require('express');
const app = express();
const userResults = require('./routes/userResults');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');  // ODM system for MongoDB (creates models for collections and etc)
const port = process.env.PORT || 3001;
// const dbURL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.nilng.mongodb.net/${process.env.MONGODB_HOST}?retryWrites=true&w=majority`;
const cors = require('cors');

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// app.use(express.static(path.join(__dirname, 'frontend', 'build')));

//routes
app.use('/api/userresults', userResults);
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
// })
app.get('/', (req, res) => {
    res.send("index page")
})

//Turn server on using port
app.listen(port, () => {
    console.log(`App listening on ${port}`);
})

// //DB setup
// mongoose.connect(dbURL)
// .then((result) => {
//   app.listen(port, () => {
//     console.log(`DB connected. Server listening on port ${port}.`);
//   })
// })
// .catch((error) => {
//   console.log(error);
// })