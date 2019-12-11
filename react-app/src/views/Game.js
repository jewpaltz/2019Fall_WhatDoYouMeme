import React, { useState, useEffect } from 'react';
import { Game_Server } from "../models/Game";
import toastr from "vanillatoasts/vanillatoasts";


export default ()=> {
    const [game, setGame] = useState({ Players: [], Captions_In_Play: []});
    const [My_Captions, setMy_Captions] = useState([]);
    const me = Game_Server.User;

    useEffect(()=>{
        Game_Server.Get_Hand().then(setMy_Captions);
        setInterval( ()=> Game_Server.Get_State().then(setGame) , 2000 );
    }, [])

    const methods = {
        pictureClicked(){
            Game_Server.Flip_Picture().catch(err=> toastr.create({ text: err.message, type: 'error', }) );
        },
        async submitCaption(caption, i){
            try{
                const response = await Game_Server.Submit_Caption(caption);
                setMy_Captions( My_Captions.filter((x,i2)=> i != i2));
            }catch(err){
                toastr.create({ text: err.message, type: 'error', });
            }
        },
        chooseCaption(i){
            Game_Server.Choose_Caption(i).catch(err=> toastr.create({ text: err.message, type: 'error', }) );
        }
    }

    if(me.User_Id === null && Game_Server.$router){
        Game_Server.$router.history.push( '/login' );
    }
    
    
return (
<div>
    <h1 className="is-size-1">
        This is the Game Page
    </h1> 

    <div className="columns">
        <div className="column is-one-quarter">
            
            <ul className="panel">
                <p className="panel-heading">
                    Players
                </p>
                {game.Players.map((p, i)=>
                    <li key={i} 
                        className={`panel-block ${i == game.Dealer ? 'is-active' : ''} ${i == me.User_Id ? 'has-text-primary' : ''}`} >
                        <span className="panel-icon">
                        <i className={`fas ${i == game.Dealer ? 'fa-user-secret' : 'fa-user'}`} aria-hidden="true"></i>
                        </span>
                        {p.name}
                    </li>
                
                )}
            </ul>

            <ul className="panel">
                <p className="panel-heading">
                    My Hand
                </p>
                {My_Captions.map((c, i)=>
                <li key={i} 
                    className="panel-block is-active"
                    onClick={()=> methods.submitCaption(c ,i)}>
                    {c}
                </li>
                )}
            </ul>

        </div>
        <div className="column">
            <div className="box is-clickable" onClick={methods.pictureClicked}>
                {game.Picture_In_Play ?
                    <img    alt="Current Picture in Play" className="image is-fullwidth"
                            src={game.Picture_In_Play} /> :
                    <div className="notification is-primary">
                        Flip First Picture
                    </div>
                }
            </div>

            <ul className="panel">
                <p className="panel-heading">
                    Captions In Play
                </p>
                {game.Captions_In_Play.map((c, i)=>
                    <li key={i} className={`panel-block is-active ${i == game.Caption_Chosen ? 'has-background-warning': ''}`} >
                        <div className="is-expanded">{c.text}</div>
                        <span className={`tag ${game.Caption_Chosen > -1 ? 'is-primary' : 'is-light'}`}>{c.player}</span>
                        {me.User_Id == game.Dealer && game.Caption_Chosen == -1 ?
                            <button className="button is-small is-primary"
                                    onClick={methods.chooseCaption(i)} 
                                    disabled={game.Captions_In_Play.length < game.Players.length - 1}  >
                                    Choose
                            </button> :
                            <></>
                        }
                    </li>
                )}
            </ul>

        </div>
    </div>

</div>
)
}
