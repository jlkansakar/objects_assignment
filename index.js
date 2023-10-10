// 1- What to wear.
const clothesToWear =(temperature) => {
    if (temperature < 0)
        return "Remember a thick jacket and gloves."
    else if (temperature >= 0 && temperature < 10)
        return "Remember a jacket."
    else if (temperature >= 10 && temperature < 15)
        return "Wear a sweater and potentially a jacket."
    else if (temperature >= 15 && temperature < 20)
        return "Wear a sweater, and nothing more."
    else if (temperature >= 20 && temperature < 25)
        return "Wear only a t-shirt, and think about sunscreen and other shading items."
    else
        return "Consider moving to colder country - You will melt."
};
console.log(clothesToWear(23));


// 2- Dice game.

const diceRoll = a => {
    let count = 0;

    for (let i = 0; i < a; i++) {
        let actualRoll = Math.floor(Math.random() * 6) + 1;


        if (actualRoll === 6) {
            count++
            console.log("you just hit a 6!")
        }
        if (count === 2) {
            console.log("Jackpot!")
        }
    }

}
diceRoll(2);


// 3- Sentiment analyzer.
/*
let text = "";
function getSentimentScore(text) {
    const positiveWords = ["happy", "awesome", "super"];
    const negativeWords = ["sad", "depressed", "angry"];

    const splitSentence = text.split(/\s+/);
    let positiveCount = 0;
    let negativeCount = 0;

    splitSentence.forEach((word) => {
        if (positiveWords.includes(word.toLowerCase())) {
            positiveCount++;
        }
        if (negativeWords.includes(word.toLowerCase())) {
            negativeCount++;
        }

    })

}
const sentiment = getSentimentScore("I am super mega happy")
console.log(sentiment);


const stringer = "hejsa jeg hedder kaj";
const splitString = stringer.split(" ");
console.log(splitString); */

function simpleSentimentAnalyzer(text) {
    const positiveWords = ["good", "happy", "joy", "love", "excellent"];
    const negativeWords = ["bad", "sad", "hate", "disappoint", "terrible"];

    const words = text.toLowerCase().split(' ');

    const positiveWordsUsed = [];
    const negativeWordsUsed = [];

    words.forEach(word => {

        if (positiveWords.includes(word)) {
            positiveWordsUsed.push(word);
        } else if (negativeWords.includes(word)) {
            negativeWordsUsed.push(word);
        }
    });

    const score = positiveWordsUsed.length - negativeWordsUsed.length;

    return {
        score,
        positiveWords: positiveWordsUsed,
        negativeWords: negativeWordsUsed
    };
}

const text = "I have had a good weekend and an excellent morning but a bad hair day";
const analysis = simpleSentimentAnalyzer(text);
console.log(analysis);
