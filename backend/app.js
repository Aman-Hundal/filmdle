require('dotenv').config({ path: "../.env" });
const express = require('express');
const app = express();
const userResults = require('./routes/userResults');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDb = require('./db/dbConfig');
const path = require('path');
const PORT = process.env.PORT || 3001;

//Connect to DB
connectDb();

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routes
app.use('/userresults', userResults);
app.get('/', (req, res) => {
    res.send("Welcome to Filmdle API")
});

//Start up server if DB connected successfully
mongoose.connection.once('open', () => {
    console.log("Connected to DB successfully");
    app.listen(PORT, () => {
        console.log(`Filmdle API server started.`);
    })
})