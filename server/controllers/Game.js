const express = require('express');
const { Game } = require("../models/Game");
const { CustomError } = require('../models/CustomError');

const app = express.Router();

app.get('/', (req, res)=>{
    res.send({ ...Game.Get_State(), me: Game.Players[req.user_id] } );
} );
app.get('/hand', (req, res)=>{
    res.send(Game.Get_Hand());
} );
app.get('/picture/flip', (req, res)=>{
    if(req.user_id != Game.Dealer){
        throw new CustomError(403, "Only the dealer can flip the picture")
    }
    Game.Flip_Picture();
    res.send({ success: true, url: Game.Picture_In_Play });
} );
app.post('/players', (req, res)=>{
    const player_id = Game.Join(req.body.name);
    res.send({ success: true, player_id });
} );
app.post('/captions_in_play', (req, res)=>{
    Game.Submit_Caption(req.user_id, req.body.text);
    res.send({ success: true });
} );
app.post('/caption_chosen', (req, res)=>{
    Game.Choose_Caption(req.user_id, req.body.id);
    res.send({ success: true });
} );



module.exports = app;
