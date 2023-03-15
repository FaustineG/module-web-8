const quotesElements = document.getElementById("quotes");

function fetchQuote() {
  fetch("http://localhost:8080/quote")
    .then(function parseResponse(response) {
      return response.json();
    })
    .then(function doSomething(data) {
      const { quote, personnage, saison, episode } = data;
      quotesElements.innerText = quote;
      console.log(data, quote, personnage, saison, episode);
    });
}
