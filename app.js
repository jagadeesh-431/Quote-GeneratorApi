const button = document.getElementById("button");
const quoteContent = document.getElementById("quoteContent");
const author = document.getElementById("author");

// API URL for random quotes
const apiUrl = "https://dummyjson.com/quotes";

button.onclick = () => {
    axios.get(apiUrl)
    .then(response => {
        const quotes = response.data.quotes;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        // Display the quote and author
        quoteContent.textContent = `"${randomQuote.quote}"`;
        author.textContent = `- ${randomQuote.author}`;
    })
    .catch(error => {
        console.error("Error fetching quote:", error);
        quoteContent.textContent = "Failed to load a quote. Try again!";
        author.textContent = "";
    });
};
