const port = 3000
const express = require('express')
const routes = require('./routes/routes')
const server = express()
const bodyParser = require('body-parser')



const connMiddleware = require('./middlewares/connMiddeware')
const pool = require('../database/poolFactory')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(connMiddleware(pool))
server.use(routes)



server.listen(port)

