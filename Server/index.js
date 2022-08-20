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