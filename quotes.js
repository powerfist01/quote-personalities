// quotes.js
const quotes = [
    {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "meaning": "Believe in yourself and overcome doubts to achieve your goals.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "meaning": "Don't be complacent in success or devastated by failure; keep moving forward.",
        "author": "Winston S. Churchill"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "meaning": "Passion for your work is key to achieving excellence.",
        "author": "Steve Jobs"
    },
    {
        "quote": "In three words I can sum up everything I've learned about life: it goes on.",
        "meaning": "Life keeps moving forward, regardless of challenges or successes.",
        "author": "Robert Frost"
    },
    {
        "quote": "The only thing we have to fear is fear itself.",
        "meaning": "Fear can be a powerful obstacle; confront it to overcome challenges.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "meaning": "Resilience and the ability to bounce back are true measures of success.",
        "author": "Nelson Mandela"
    },
    {
        "quote": "In the middle of difficulty lies opportunity.",
        "meaning": "Challenges present opportunities for growth and success.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Your time is limited, don't waste it living someone else's life.",
        "meaning": "Live authentically and make the most of the time you have.",
        "author": "Steve Jobs"
    },
    {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "meaning": "Believe in your dreams and work towards making them a reality.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "Happiness is not something ready made. It comes from your own actions.",
        "meaning": "You have the power to create your own happiness through your actions.",
        "author": "Dalai Lama"
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

module.exports = { getRandomQuote };
