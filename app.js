// get dependencies
const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// parse requests
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express());
app.use(express.json());

//Enable CORS for all HTTP methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Configuring the database
const config = require('./db.js');

require('./routes/product.js')(app);

require('./routes/category.js')(app);

// default route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to ZeptoBook Product app" });
});

// listen on port 3000
app.listen(config.serverport, () => {
    console.log("Server is listening on port 3000");
});