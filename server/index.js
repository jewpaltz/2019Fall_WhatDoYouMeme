const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const gameController = require('./controllers/Game');

const app = express();
const port = process.env.PORT ||  3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app
    .get('/port', (req, res)=> res.send("Using port: " + port))
    .get('/sql', (req, res)=> res.send(process.env.MYSQLCONNSTR_localdb))
    .use('/static', express.static( path.join( __dirname , '../NoFramework' ) ) )
    .use('/users', userController )
    .use('/game', gameController );

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
