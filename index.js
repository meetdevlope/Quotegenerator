const quoteContainer = document.querySelector(".quote-container");
const quoteHere = document.querySelector("#quoteHere");
const authorHere = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#newquote");

let apiQuotes = [];

function newQuote() {
    quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // if (!quote.author) return;

    quoteHere.textContent = quote.text;
    authorHere.textContent = "- " + quote.author;
}

async function getQuote() {
    let quoteApi = "https://type.fit/api/quotes";
    try {
        const response = await fetch(quoteApi);
        apiQuotes = await response.json();
        newQuote();
        // console.log(apiQuotes[Math.floor(Math.random() * apiQuotes.length)]);
    } catch (error) {}
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
    window.open(twitterUrl, "_blank");
    console.log(twitterUrl);
}

newQuoteBtn.addEventListener("click", newQuote);
newQuoteBtn.addEventListener("click", newColor);
twitterBtn.addEventListener("click", tweetQuote);

let priColor = ["#3c3b3d", "#92AC86", "#363062", "#8E3200", "#383838", "#9DABD0", "#363062", "#FF8BA7", "#7A6174", "#75A9CE"];
let secColor = ["#515052", "#A7D49B", "#4D4C7D", "#A64B2A", "#525252", "#B7C5E8", "#4D4C7D", "#FFB4C6", "#8C7284", "#87BADF"];

function newColor() {

    let random = Math.floor(Math.random() * 10);

    console.log(random);

    document.documentElement.style.setProperty("--pri-col", `${priColor[random]}`);
    document.documentElement.style.setProperty("--sec-col", `${secColor[random]}`);
}

getQuote();