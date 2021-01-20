const quote = document.querySelector(".jsQuote");
const quote_text = quote.querySelector("#quote");
const author = quote.querySelector("#author");

const QUOTE_NUM = 1643;

function getrandomQutoes(response) {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let num = Math.floor(Math.random() * QUOTE_NUM);
      let qu = data[num].text;
      let au = data[num].author;
      quote_text.innerText = `${qu}`;
      author.innerText = `- ${au} -`;
    });
}

function init() {
  getrandomQutoes();
}

init();
