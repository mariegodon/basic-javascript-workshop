//output a random quote (out of 10 quotes total)

function fortune() {

    var randomQuote = "";
    var quotes = [
        "It will be sunny tomorrow",
        "The sky is purple",
        "You are the best",
        "Montreal is super awesome",
        "I want a smoothie",
        "My cats are ella and patate",
        "Tonight I might eat sushi",
        "It will snow again before summer",
        "Jordan Speith lost the Masters",
        "Smile"
    ];

    randomQuote = quotes[Math.floor(Math.random() * 10)];
    return randomQuote;

}

console.log(fortune());