/**
 * Creating Game rules convert
 */

 let player_hand_choice = {
    Rock: {
        Rock: "Tie",
        Scissors: "Lose",
        Paper: "Win",
        Lizard: "Lose", 
        Spock: "Win"
    },

    Paper: {
        Rock: "Lose",
        Scissors: "Win",
        Paper: "Tie",
        Lizard: "Win", 
        Spock: "Lose"
    },

    Scissors: {
        Rock: "Win",
        Scissors: "Tie",
        Paper: "Lose",
        Lizard: "Lose", 
        Spock: "Win"
    },

    Lizard: {
        Rock: "Win",
        Scissors: "Win",
        Paper: "Lose",
        Lizard: "Tie", 
        Spock: "Lose"

    },

    Spock: {
        Rock: "Lose",
        Scissors: "Lose",
        Paper: "Win",
        Lizard: "Win", 
        Spock: "Tie"

    }
};


function player(hand){

/* Array wiht weapons */
let weapon =["Rock","Paper", "Scissors", "Lizard", "Spock"]; /* 0 to 4*/


/* Variable to create a random number between 1 and 5 for the bot's selection, only the integer without decimals */
let randNum = Math.trunc(Math.random() * 5); /* Verified on google dev tools it's working using console.log */

/* Variable to create the bot choice converting numbers to weapons from the array above */
let bot_choice = weapon[randNum]; /* Verified on google dev tools it's working using console.log */
console.log(randNum);
console.log(bot_choice);

/* V to see who wins */
let winner = document.getElementById("winner");


/* Variable to count the score */

/* Bot's choice and player's choice */

/*Who wins text */

} 
