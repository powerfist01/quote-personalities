// index.js
const { getRandomQuote } = require('./quotes');

function generateRandomQuote() {
  const quote = getRandomQuote();
  return `${quote.quote} - ${quote.author}`;
}

module.exports = {
    generateRandomQuote
}