const button = document.getElementById("btn");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

async function getQuote() {
  try {
    const response = await fetch("http://127.0.0.1:3000/");
    const data = await response.text();

    const [quote, author] = data.split(" -");

    quoteText.textContent = quote.replaceAll('"', "").trim();
    authorText.textContent = author ? `— ${author.trim()}` : "";
  } catch (error) {
    quoteText.textContent = "Unable to load quote right now.";
    authorText.textContent = "Please make sure the backend server is running.";
  }
}

button.addEventListener("click", getQuote);
getQuote();