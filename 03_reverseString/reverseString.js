const reverseString = function(phrase) {
    let phraseArray = phrase.split("");
    let reversePhrase = "";

    for (let i = phraseArray.length - 1; i >= 0; i--) {
        reversePhrase = reversePhrase + phraseArray[i]
    }
    
    return reversePhrase;
};

// Do not edit below this line
module.exports = reverseString;
