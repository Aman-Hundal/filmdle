const mongoose = require('mongoose');
const Schema = mongoose.Schema; //defines the strucuter of our documents insde of our collections

const userResultSchema = new Schema({ //creates instance of schema object
    user: {
        type: String,
        required: true
    },
    win: {
        type: Boolean,
        required: true
    },
    guesses: {
        type: [String],
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

const UserResult = mongoose.model('UserResult', userResultSchema); //first arg is name of model. KEEP IT SINGULAR, mongoose will pluralize it. The MongoDb collection is plural lower case like a table (called matchs). Second arg is the schema object that we want to base this model on

module.exports = UserResult;