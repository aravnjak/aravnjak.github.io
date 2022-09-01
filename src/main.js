const toggleLight = () => {
  const lightBulb = document.getElementById('light-bulb')
  lightBulb.classList.toggle("active");

  const main = document.getElementById('main')
  main.classList.toggle("active");

}

const quotes  = [{
  title: "If you can't explain it to a six year old, you don't understand it yourself.",
  autor: "Albert Einstein"
}, {
  title: "One day I will find the right words, and they will be simple.",
  autor: "Jack Kerouac, The Dharma Bums"
}, {
  title: "Like all magnificent things, it's very simple.",
  autor: "Natalie Babbitt, Tuck Everlasting"
}, {
  title: "Life is really simple, but we insist on making it complicated.",
  autor: "Confucius"
}, {
  title: "Simplicity is the ultimate sophistication.",
  autor: "Clare Boothe Luce"
}, {
  title: "Our life is frittered away by detail. Simplify, simplify.",
  autor: "Henry David Thoreau, Walden and Other Writings"
}, {
  title: "Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius — and a lot of courage to move in the opposite direction.",
  autor: "E.F. Schumacher"
}, {
  title: "Living simply makes loving simple.",
  autor: "bell hooks"
}, {
  title: "The greatest ideas are the simplest.",
  autor: "William Golding, Lord of the Flies"
}, {
  title: "Nature is pleased with simplicity. And nature is no dummy",
  autor: "Isaac Newton"
}]

document.addEventListener('DOMContentLoaded', function(){ 
  addQuote()
}, false);

const addQuote = () => {
  const quote = quotes[Math.floor(Math.random()*quotes.length)];

  waitForElement('#quoteTitle', (elem) => {
    elem.innerHTML = quote.title
  })

  waitForElement('#quoteAutor', (elem) => {
    elem.innerHTML = quote.autor
  })
}