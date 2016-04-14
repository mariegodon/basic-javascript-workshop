//output a cow saying a random fortune


function cowSay() {

    var cowMiddleLines = [];
    var cowMiddle = [];
    var cut = [];
    var spaceMissing = 0;
    var padding = "";

    var cowFront = [
        "___________________________ \n"
    ];

    var cowBack = [
        "--------------------------- \n       \\   ^__^           \n        \\  (oo)\\_______   \n           (__)\\       )\\/\\ \n                ||----w |  \n                ||     ||  \n"
    ];


    function fortune() {

        var randomQuote = "";
        var quotes = [
            "The quick brown fox jumps over the lazy dog",
            "The sky is purple",
            "You are the best",
            "Montreal is super awesome",
            "I want a smoothie",
            "My cats are ella and patate",
            "Tonight I might eat sushi",
            "It will snow again before summer",
            "The quick brown fox jumps over the lazy dog and goes on to do whatever it is that foxes do in the real world",
            "Smile",
            "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass."
        ];

        randomQuote = quotes[Math.floor(Math.random() * 11)];
        return randomQuote;

    }

    var quote = fortune();

    if (quote.length < 30) {
        spaceMissing = (32-quote.length);
        padding = new Array(spaceMissing + 1).join(' '); 
        cowMiddle = [
            "<" + quote + padding + ">\n"
        ];
    }
    else {
        var i = 0;
        var numberLines = ((Math.floor((quote.length) / 30)));
        var remainingChar = quote.length;

        //for (var i = 0; i <= numberLines; i++) {
        while (remainingChar > 0) {
        
            if (i === 0) {
                cut[i] = quote.lastIndexOf(" ", (i+1) * 30);
                spaceMissing = 32-(quote.substring(i * 30, cut[i]).length);
                if (spaceMissing >=1) {padding = new Array(spaceMissing + 1).join(' ');} 
                else {padding = ""}
                cowMiddleLines[i] = "/" + quote.substring(i * 30, cut[i]) + padding + "\\\n";
                remainingChar -= (quote.substring(i * 30, cut[i]).length);
            }
            else if (remainingChar<30) {
                cut[i] = quote.lastIndexOf(" ", cut[i-1]+30);
                spaceMissing = 32-(quote.substring(cut[i-1], quote.length).length);
                if (spaceMissing >= 1) {padding = new Array(spaceMissing + 1).join(' ');}
                else {padding = ""}
                cowMiddleLines[i] = "\\" + quote.substring(cut[i - 1], quote.length)+ padding + "/\n";
                remainingChar -= (quote.substring(cut[i-1], quote.length).length);
                
            }
            else {
                cut[i] = quote.lastIndexOf(" ", cut[i-1]+30);
                spaceMissing = 32-(quote.substring(cut[i-1], cut[i]).length);
                if (spaceMissing >= 1) {padding = new Array(spaceMissing + 1).join(' ');} 
                else {padding = ""}
                cowMiddleLines[i] = "|" + quote.substring(cut[i - 1], cut[i]) + padding + "|\n";
                remainingChar -= (quote.substring(cut[i-1], cut[i]).length);
                
            }
        i++;
        }
        cowMiddle = cowMiddleLines.join("");
    }



    console.log(cowFront + cowMiddle + cowBack);
    

}

cowSay(); 
