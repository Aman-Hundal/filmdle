const mongoose = require('mongoose');

//Function that makes an async call to your DB to connect it to our server
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDb;