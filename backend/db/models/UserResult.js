const mongoose = require('mongoose');
const Schema = mongoose.Schema; //defines the strucuter of our documents insde of our collections

//creates instance of schema object
const userResultSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    win: {
        type: Boolean,
        required: true
    },
    guesses: {
        type: [[String]],
        required: true
    },
    guessCount: {
        type: Number,
        required: true
    },
    movieID: {
        type: String,
        required: true
    },
    movieName: {
        type: String,
        required: true
    },
    gameEndDate: {
        type: Date,
        required: true
    },
}, { timestamps: true });

//First arg is name of model. KEEP IT SINGULAR, mongoose will pluralize it AND lower case it. The MongoDb collection will have to be plural lower case like a table (called userresults). Second arg is the schema object that we want to base this model on
const UserResult = mongoose.model('UserResult', userResultSchema);

module.exports = UserResult;