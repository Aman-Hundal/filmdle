require('dotenv').config({ path: "../.env" });
const express = require('express');
const app = express();
const userResults = require('./routes/userResults');
const morgan = require('morgan');
const mongoose = require('mongoose');  // ODM system for MongoDB (creates models for collections and etc). mongoose is a async library
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const connectDb = require('./db/dbConfig');
const path = require('path');

//Connect to DB
connectDb();

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//app.use(express.static(path.join(__dirname, 'frontend', 'build')));

//Routes
app.use('/api/userresults', userResults);
app.get('/', (req, res) => {
    res.send("index page");
})
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
// })

//Turn server on if db connected successfully
mongoose.connection.once('open', () => {
    console.log("Connected to DB successfully");
    app.listen(PORT, () => {
        console.log(`App listening on ${PORT}`);
    })
})