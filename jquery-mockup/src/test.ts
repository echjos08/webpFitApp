import * as $ from 'jquery';

export class Quote {
    text: string
}

export class Player {
    quotes: Quote[] = [];

    drawQuotes(){
        $("#my-quotes").html(
            this.quotes.map(x => `<button type="button" class="list-group-item list-group-item-action">${x.text}</button>`).join("")
        )    
    }
}

export class Room {
    quotes: Quote[] = [];

    drawQuotes(){
        $("#played-quotes").html(
            this.quotes.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        );
    }
}

export class Game {
    quotes: Quote[]=[];

    init(){
        return $.when(
            $.getJSON("/game/quotes").done( data => {
                this.quotes = data;
            })
        );
        
        
    }
    
}

// Controller
const game = new Game();
const room = new Room();
const me = new Player();
const complete  = new Player();

game.init().done(()=>{

    room.drawQuotes();
    
    
    me.quotes = game.quotes;
    me.drawQuotes();
});



me.quotes = game.quotes;
me.drawQuotes();


