const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Connection Successfully Established.");
        })
        .catch((e) => {
            console.error(e);
        })
}

module.exports = dbConnect;