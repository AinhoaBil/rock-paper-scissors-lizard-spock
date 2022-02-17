/**
 * Creating Game rules
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