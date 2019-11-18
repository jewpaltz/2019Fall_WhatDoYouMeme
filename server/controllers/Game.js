const express = require('express');
const { Game } = require("../models/Game");
const app = express.Router();

app.get('/', (req, res)=>{
    res.send(Game.Get_State());
} );
app.get('/hand', (req, res)=>{
    res.send(Game.Get_Hand());
} );
app.get('/picture/flip', (req, res)=>{
    Game.Flip_Picture();
    res.send({ success: true, url: Game.Picture_In_Play });
} );
app.post('/players', (req, res)=>{
    const player_id = Game.Join(req.body.name);
    res.send({ success: true, player_id });
} );



module.exports = app;
