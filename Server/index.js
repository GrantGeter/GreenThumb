const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());


//Dev only
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(moragn('dev'));

require('dotenv').config();
const client = require('./db/client');

const apiRouter = require('./routes/api')
server.use('/api', apiRouter);

const { PORT = 3030 } = process.env;

server.listen(PORT, () => {
    console.log("Server up on ", PORT);
    client.connect();
})