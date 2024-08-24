const quotes = [
  {
    quote: "Life's a voyage that's homeward bound.",
    author: "Herman Melville",
  },
  {
    quote: "The great aim of education is not knowledge but action.",
    author: "Herbert Spencer",
  },
  {
    quote: "To freely bloom - that is my definition of success.",
    author: "Gerry Spence",
  },
  {
    quote: "Employ thy time well, if thou meanest to get leisure.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "It's not that I'm so smart , it's just that I stay with problems longer.",
    author: "Albert Einstein",
  },
  {
    quote: "In the end, everything is a gag.",
    author: "Charlie Chaplin",
  },
  {
    quote: "To want to be what one can be is purpose in life.",
    author: "Cynthia Ozick",
  },
  {
    quote:
      "Only those who will risk going too far can possibly find out how far one can go.",
    author: "T. S. Eliot",
  },
  {
    quote: "Judgement, not passion should prevail.",
    author: "Epicharmus",
  },
  {
    quote: "I'm as proud of what we don't do as I am of what we do.",
    author: "Steve Jobs",
  },
];

//const quote = document.querySelector("#quote span:first-child");
//const author = document.querySelector("#quote span:last-child");
const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = ` - ${todayQuote.author}`;
