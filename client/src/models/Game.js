import { api } from "./my-fetch";

export const Game_Server = {
    Get_Hand(amount = 7){
        return api('hand')
    },
    Flip_Picture(){
        return api('picture/flip')
    },
    Join(name){
        return api('players', { name });
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