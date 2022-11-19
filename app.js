const express = require('express');
const app = express();
const userResults = require('./routes/userResults');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDb = require('./db/dbConfig');
const path = require('path');
if (process.env.ENVIRONMENT !== "prod") {
    require('dotenv').config({ path: "./.env" });
}
const PORT = process.env.PORT || 3001;

//Connect to DB
connectDb();

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//Serves index.html react app file
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

//Routes
app.use('/api/userresults', userResults);
//Serves index.html react app file for all other routes
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
})

//Turn server on if db connected successfully
mongoose.connection.once('open', () => {
    console.log("Connected to DB successfully");
    app.listen(PORT, () => {
        console.log(`App listening on ${PORT}`);
    })
})