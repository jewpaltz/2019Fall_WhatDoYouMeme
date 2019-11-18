const Caption_Deck = require('./Captions');
const { CustomError } = require('./CustomError');

module.exports.Game = {
    Players: [
        { name: "Moshe", points: 0 },
        { name: "Bernie", points: 0 },
        { name: "Donald", points: 0 },
        { name: "Andrew", points: 0 },
    ],
    Picture_Deck: [
        "http://www.dailyhaha.com/_pics/prepared-to-slice-onions.jpg",
        "http://www.dailyhaha.com/_pics/no-parking-here-guys.jpg",
        "http://www.dailyhaha.com/_pics/best-parking-spot.jpg",
        "http://www.dailyhaha.com/_pics/a-good-selling-point.jpg",
    ],
    Caption_Deck,
    Top_Of_Picture_Deck: 0,
    Top_Of_Caption_Deck: 0,    

    Dealer: 0,
    Captions_In_Play: [], // strings
    Picture_In_Play: "",
    Caption_Chosen: -1,
    Get_Hand(amount = 7){
        this.Top_Of_Caption_Deck += +amount;
        return this.Caption_Deck.slice(this.Top_Of_Caption_Deck - amount, this.Top_Of_Caption_Deck)
    },
    Flip_Picture(){
        this.Picture_In_Play = this.Picture_Deck[this.Top_Of_Picture_Deck++];
        this.Dealer++;
    },
    Join(name){
        if(this.Players.find(x=> x.name == name )){
            throw new CustomError(409, 'Another user is already using that name.');
        }
        this.Players.push({ name, score: 0 });
        return this.Players.length - 1;
    },
    Get_State(){
        return {
            Players: this.Players,
            Dealer: this.Dealer,
            Captions_In_Play: this.Captions_In_Play, 
            Picture_In_Play: this.Picture_In_Play,
            Caption_Chosen: this.Caption_Chosen
        }
    }
}