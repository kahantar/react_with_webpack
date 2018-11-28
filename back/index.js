const express = require('express');
const router = require('./router').router;
const server = express();
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }))

server.use('/api', router);

server.listen(8080, () => {
    console.log("connexion server");
});