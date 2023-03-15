// Je récpère mon élément racine
const quotesListElement = document.getElementById("quotes-list");

async function fetchQuote() {
  return fetch("http://localhost:8080/quote")
    .then(function parseResponse(response) {
      return response.json();
    })
    .then(function doSomething(data) {
      const { quote, personnage, saison, episode } = data;
      const parentElement = document.createElement("div");

      // Ajout dynamique d'un <p> dans une liste
      // Je crée un p programmatiquement
      const quoteElement = document.createElement("p");
      quoteElement.classList.add('quote')
      quoteElement.innerText = quote;
    //   quoteElement.innerText = `"${quote}"`;
    //   quoteElement.innerText = '"' + quote+'"';

      // Je met mon <p> dans mon element racine
      const infoElement = document.createElement("p");
      infoElement.classList.add('information')
      infoElement.innerText = `Dit par ${personnage} dans l'épisode ${episode}`;

      parentElement.appendChild(quoteElement);
      parentElement.appendChild(infoElement);

      quotesListElement.appendChild(parentElement)

      return data;
    });
}
