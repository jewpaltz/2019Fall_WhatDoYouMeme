const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const gameController = require('./controllers/Game');

const app = express();
const port = process.env.PORT ||  3000;

app
    .get('/port', (req, res)=> res.send("Using port: " + port))
    .get('/sql', (req, res)=> res.send(process.env.MYSQLCONNSTR_localdb))
    .use('/', express.static( path.join( __dirname , '../client/dist/' ) ) )
    .use('/users', userController )
    .use('/game', gameController );

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
