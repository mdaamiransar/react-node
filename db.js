// const mongoose = require("mongoose");
// const { mongourl } = require('./config/keys');

// const conn = mongoose.connect(mongourl, { useNewUrlParser: true });

// mongoose.connection.on("connected", () => { console.log(" ##### connected ##### ") })

// mongoose.connection.on("error", (err) => { console.log(" ##### error ##### ", err) })

//module.exports = conn;

// Configuring the database
const mongoose = require('mongoose');
const config = require('./config/keys');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

module.exports = config;