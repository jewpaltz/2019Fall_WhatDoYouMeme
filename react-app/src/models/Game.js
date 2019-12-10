import { api, User } from "./my-fetch";
//import $router from "../router/index";

export const Game_Server = {
    User,
    Get_Hand(amount = 7){
        return api('hand')
    },
    Flip_Picture(){
        return api('picture/flip')
    },
    Submit_Caption(text){
        return api('captions_in_play', { text  })
    },
    Choose_Caption(id){
        return api('caption_chosen', { id  })
    },
    async Join(name){
        const { player_id } = await api('players', { name });
        User.User_Id = player_id;
        /* Temporarily disabling the programmatic navigation until we can implement it correctly */
        //$router.push( { name: 'game'} );

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