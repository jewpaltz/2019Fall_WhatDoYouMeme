import { api, User } from "./my-fetch";
import $router from "../router/index";

export const Game_Server = {
    Get_Hand(amount = 7){
        return api('hand')
    },
    Flip_Picture(){
        return api('picture/flip')
    },
    async Join(name){
        const { player_id } = await api('players', { name });
        User.User_Id = player_id;
        $router.push( { name: 'game'} );

    },
    Get_State(){
        return api('')
    }
}

//  Just to remind us the shape of a player
export class Player {
    name;
    points;
    captions;
}