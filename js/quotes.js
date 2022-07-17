const quotes = [
    {
        quote: "가",
        quthor: "가",
    },
    {
        quote: "나",
        quthor: "나",
    },
    {
        quote: "다",
        quthor: "디",
    },
    {
        quote: "라",
        quthor: "라",
    },
    {
        quote: "마",
        quthor: "마",
    },
    {
        quote: "바",
        quthor: "바",
    },
    {
        quote: "나사",
        quthor: "나사",
    },
    {
        quote: "나1",
        quthor: "나2",
    },
    {
        quote: "나3",
        quthor: "나4",
    },
    {
        quote: "나5",
        quthor: "나6",
    },
    {
        quote: "나7",
        quthor: "나8",
    },

];

const qLength = quotes.length
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor(Math.random() * qLength);

const todaysQuote = quotes[randomNum];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.quthor;