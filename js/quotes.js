const quotes = [
    {
        quote: "You never know what life is like, until you have lived it",
        quthor: "Marilyn Monroe",
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        quthor: "Mother Teresa",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        quthor: "Franklin D. Roosevelt",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        quthor: "Margaret Mead",
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        quthor: "Robert Louis Stevenson",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams. ",
        quthor: "Eleanor Roosevelt",
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn. ",
        quthor: "Benjamin Franklin",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light. ",
        quthor: "Aristotle",
    },
    {
        quote: "Whoever is happy will make others happy too.",
        quthor: "Anne Frank",
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        quthor: "Ralph Waldo Emerson",
    },
    {
        quote: "If you think you are late, it is late.",
        quthor: "Myungsu Park",
    },

];

const qLength = quotes.length
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor(Math.random() * qLength);

const todaysQuote = quotes[randomNum];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.quthor;