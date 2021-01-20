const quote = document.querySelector(".jsQuote");
const quote_text = quote.querySelector("#quote");
const author = quote.querySelector("#author");

const QUOTE_NUM = 1643;

function getQuotes() {
  fetch(`https://quotes.rest/qod?language=en`)
    //https://api.paperquotes.com/apiv1/quotes/?lang=fr
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let qu = data.contents.quotes[0].quote;
      let au = data.contents.quotes[0].author;
      console.log(qu);
      console.log(au);
      quote_text.innerText = `${qu}`;
      author.innerText = `- ${au} -`;
    });
}

function init() {
  getQuotes();
}

init();
