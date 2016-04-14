//output a cow saying a random fortune


function cowSay() {

    var cowMiddleLines = [];
    var cowMiddle = [];
    var cut = [];
    var spaceMissing = 0;
    var padding = "";
    var currentLineLength = 0;
    var maxCharPerLine = 30;

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

    function checkPadding(spaceMissing) {
        if (spaceMissing >= 1) {
            return padding = new Array(spaceMissing + 1).join(' ');
        }
        else {
            return padding = "";
        }
    }

    if (quote.length < maxCharPerLine) {
        spaceMissing = (maxCharPerLine - quote.length);
        padding = new Array(spaceMissing + 1).join(' ');
        cowMiddle = [
            "<" + quote + padding + ">\n"
        ];
    }
    else {
        var i = 0;
        var remainingChar = quote.length;
        var currentLine = "";

        while (remainingChar > 0) {

            if (remainingChar === quote.length) {
                cut[i] = quote.lastIndexOf(" ", (i + 1) * maxCharPerLine);
                currentLine = quote.substring(i * maxCharPerLine, cut[i]);
                currentLineLength = currentLine.length;
                spaceMissing = maxCharPerLine - currentLineLength;
                padding = checkPadding(spaceMissing);
                cowMiddleLines[i] = "/" + currentLine + padding + "\\\n";
                remainingChar -= currentLineLength;
            }
            else if (remainingChar < maxCharPerLine) {
                cut[i] = quote.lastIndexOf(" ", cut[i - 1] + maxCharPerLine);
                currentLine = quote.substring(cut[i - 1], quote.length);
                currentLineLength = currentLine.length;
                spaceMissing = maxCharPerLine - currentLineLength;
                padding = checkPadding(spaceMissing);
                cowMiddleLines[i] = "\\" + currentLine + padding + "/\n";
                remainingChar -= currentLineLength;

            }
            else {
                cut[i] = quote.lastIndexOf(" ", (cut[i - 1] + maxCharPerLine));
                currentLine = quote.substring(cut[i - 1], cut[i]);
                currentLineLength = currentLine.length;
                spaceMissing = maxCharPerLine - currentLineLength;
                padding = checkPadding(spaceMissing);
                cowMiddleLines[i] = "|" + currentLine + padding + "|\n";
                remainingChar -= currentLineLength;

            }

            i++;
        }

        cowMiddle = cowMiddleLines.join("");
    }



    return cowFront + cowMiddle + cowBack;


}

//console.log(cowSay());
