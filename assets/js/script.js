/* V to see who wins */
let winner = document.getElementById("winner");

/* Variable to count the score */
let bot_hand = 0;
let my_hand = 0;


/**
 * Game rules 
 */

let hand_choice = {
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


function player(hand) {
    /* Array wiht weapons */
    let weapon =["Rock","Paper", "Scissors", "Lizard", "Spock"]; /* 0 to 4*/
    /* Variable to create a random number between 1 and 5 for the bot's selection, only the integer without decimals */
    let randNum = Math.trunc(Math.random() * 5); /* Verified on google dev tools it's working using console.log */
    /* Variable to create the bot choice converting numbers to weapons from the array above */
    let bot_choice = weapon[randNum]; /* Verified on google dev tools it's working using console.log */
    /* Bot's choice and player's choice */
    document.getElementById("user_go").innerHTML =`Bot's choice: <span>${bot_choice.toUpperCase()}</span>`;
    document.getElementById("bot_go").innerHTML = `Your choice: <span>${hand.toUpperCase()}</span>`;

    /*Who wins text */
    switch (hand_choice[bot_choice][hand]) {
        case "Win":
          winner.innerText = `You won`;
          my_hand++;
          break;
        case "Lose":
          winner.innerText = `You lost`;
          bot_hand++;
          break;
        case "Tie":
          winner.innerText = `You draw`;
          break;
    }


    /* Update score */
    document.getElementById("botscore").innerHTML = bot_hand;
    document.getElementById("myscore").innerHTML = my_hand;

}
