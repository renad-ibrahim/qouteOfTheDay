var arrQuotes = [ " “Be yourself; everyone else is already taken.”― Oscar Wilde ",
 "“So many books, so little time.”― Frank Zappa",
"“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
"“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard"];

var btn = document.getElementById('btn');

var quotePlace = document.getElementById('quote');

btn.addEventListener('click' , function(){
    var randomquote = arrQuotes[Math.floor(Math.random() * arrQuotes.length)];
    quotePlace.innerHTML = randomquote;
})