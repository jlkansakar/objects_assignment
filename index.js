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
    for (let i = 0; i < a; i++) {
        let actualRoll = Math.floor(Math.random() * 6) + 1;
        if (actualRoll === 6) {
            return "You just hit a 6!"
        }
        const count = 6;
        if ()
            return "Jackpot!"
    }
};
console.log(diceRoll(6));


// 3- Sentiment analyzer.
/*const getSentimentScore = ["happy", "awesome", "super"] => {
    for
}
const score = 0;
const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/