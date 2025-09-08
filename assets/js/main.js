const display = document.getElementById('display');
const author = document.getElementById('author');
const randomBtn = document.getElementById('randomBtn');
const randomQuoteBtn = document.getElementById('randomQuoteBtn');
const surpriseBtn = document.getElementById('surpriseBtn');

let ROASTS = [], QUOTES = [];

async function loadData() {
  try {
    const res = await fetch('/data/data.json');
    const data = await res.json();
    ROASTS = data.ROASTS;
    QUOTES = data.QUOTES;
    showRandomRoast();
  } catch(e) {
    display.textContent = "Kunde inte ladda roasts.";
    author.textContent = "";
    console.error(e);
  }
}

function chooseRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function setDisplay(text, type){
  display.textContent = text;
  author.textContent = (type==='quote') ? '— Visdom' : '';
}

function showRandomRoast(){
  if(!ROASTS.length) return;
  const r = chooseRandom(ROASTS);
  setDisplay(r,'roast');
}

function showRandomQuote(){
  if(!QUOTES.length) return;
  const q = chooseRandom(QUOTES);
  setDisplay(q,'quote');
}

randomBtn.addEventListener('click', showRandomRoast);
randomQuoteBtn.addEventListener('click', showRandomQuote);
surpriseBtn.addEventListener('click', ()=>{
  const p = Math.random();
  if(p<0.5) showRandomRoast();
  else showRandomQuote();
});

window.addEventListener('load', loadData);
