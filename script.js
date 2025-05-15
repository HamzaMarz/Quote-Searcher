const API_URL = 'https://dummyjson.com/quotes';
const filterInput = document.getElementById('filterInput');
const quoteList = document.getElementById('quoteList');

let quotes = [];

function displayQuotes(filteredQuotes) {
    if (filteredQuotes.length === 0) {
        quoteList.innerHTML = '<li>No quotes found.</li>';
    } else {
        quoteList.innerHTML = filteredQuotes.map(quote => `<li>${quote.quote}</li>`).join('');
    }
}

function filterQuotes() {
    const search = filterInput.value.toLowerCase();
    const filtered = quotes.filter(q => q.quote.toLowerCase().includes(search));
    displayQuotes(filtered);
}

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        quotes = data.quotes || [];
        displayQuotes(quotes);
    });

filterInput.addEventListener('input', filterQuotes); 