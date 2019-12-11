<script>
import { Game_Server } from "../models/Game";
import toastr from "vanillatoasts/vanillatoasts";

export default {
    data: ()=> ({
        game: {},
        My_Captions: [],
        me: Game_Server.User
    }),
    async created(){
        this.My_Captions = await Game_Server.Get_Hand();
        setInterval( async ()=> this.game = await Game_Server.Get_State(), 2000 )
        
    },
    methods: {
        pictureClicked(){
            Game_Server.Flip_Picture().catch(err=> toastr.create({ text: err.message, type: 'error', }) );
        },
        async submitCaption(caption, i){
            try{
                const response = await Game_Server.Submit_Caption(caption);
                this.My_Captions.splice(i, 1);
            }catch(err){
                toastr.create({ text: err.message, type: 'error', });
            }
        },
        chooseCaption(i){
            Game_Server.Choose_Caption(i).catch(err=> toastr.create({ text: err.message, type: 'error', }) );
        }
    }
}
</script>
<template>
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
                <li v-for="(p, i) in game.Players " :key="i" 
                    className="panel-block" :className="{ 'is-active': i == game.Dealer, 'has-text-primary': i == me.User_Id }">
                    <span className="panel-icon">
                    <i className="fas" :className=" i == game.Dealer ? 'fa-user-secret' : 'fa-user' " aria-hidden="true"></i>
                    </span>
                    {{p.name}}
                </li>
            </ul>

            <ul className="panel">
                <p className="panel-heading">
                    My Hand
                </p>
                <li v-for="(c, i) in My_Captions " :key="i" 
                    className="panel-block is-active"
                    @click="submitCaption(c ,i)">
                    {{c}}
                </li>
            </ul>

        </div>
        <div className="column">
            <div className="box is-clickable" @click="pictureClicked">
                <img    alt="Current Picture in Play" className="image is-fullwidth"
                        :src="game.Picture_In_Play" v-if="game.Picture_In_Play"  />
                <div className="notification is-primary" v-else>
                    Flip First Picture
                </div>
            </div>

            <ul className="panel">
                <p className="panel-heading">
                    Captions In Play
                </p>
                <li v-for="(c, i) in game.Captions_In_Play " :key="i" className="panel-block is-active" :className="{'has-background-warning': i == game.Caption_Chosen }">
                    <div className="is-expanded">{{c.text}}</div>
                    <span className="tag " :className=" game.Caption_Chosen > -1 ? 'is-primary' : 'is-light'">{{c.player}}</span>
                    <button className="button is-small is-primary"
                            @click.prevent="chooseCaption(i)" 
                            v-show="me.User_Id == game.Dealer && game.Caption_Chosen == -1"
                            :disabled="game.Captions_In_Play.length < game.Players.length - 1"  >
                            Choose
                    </button>
                </li>
            </ul>

        </div>
    </div>

</div>
</template>



<style>
    .is-clickable {
        cursor: pointer;
    }
    .is-expanded {
        flex-grow: 1;
    }
    #vanillatoasts-container{
        z-index: 100;
    }
</style>