//import { getQuotes } from "generateQuotes.js";
var quotes = [
  `Your time is limited, so don’t waste it living someone else’s life. -Steve Jobs`,
  `Stay hungry. Stay foolish. -Steve Jobs`,
  `The way to get started is to quit talking and begin doing. -Walt Disney`,
  `It is your work in life that is the ultimate seduction. -Pablo Picasso`,
  `Action is the foundational key to all success. -Pablo Picasso`,
  `Everybody has goals, aspirations or whatever, and everybody has been at a point in their life where nobody believed in them. -EMINEM`,
  `I just can’t sit back and wallow, in my own sorrow, but I know one fact: I’ll be one tough act to follow. -EMINEM`,
  `Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. -Thomas Edison`,
  `There is no substitute for hard work. -Thomas Edison`,
  `Opportunity is missed by most people because it is dressed in overalls and looks like work. -Thomas Edison`,
  `The three great essentials to achieve anything worth while are: Hard work, Stick-to-itiveness, and Common sense. -Thomas Edison`,
  `I never did a day's work in my life. It was all fun. -Thomas Edison`,
  `Study without desire spoils the memory, and it retains nothing that it takes in. -Leonardo Da Vinci`,
  `As a well spent day brings happy sleep, so life well used brings happy death. -Leonardo Da Vinci`,
  `One can have no smaller or greater mastery than mastery of oneself. -Leonardo Da Vinci`,
];
/*export*/ function getQuotes() {
  var randomIndex = getIndexOfNewQuote();
  document.querySelector("#quoteDisplay").innerHTML = quotes[randomIndex];
  console.log(quotes[randomIndex]);
}
function getIndexOfNewQuote() {
  return Math.floor(Math.random() * quotes.length);
}
function addNewQuote(newQuote) {
  if (newQuote !== "") {
    return quotes.push(newQuote);
  } else {
    return;
  }
}

getQuotes();
