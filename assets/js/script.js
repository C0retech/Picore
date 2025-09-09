/* ========= DOM refs ========= */
const display = document.getElementById('display');
const author = document.getElementById('author');
const resultCard = document.getElementById('resultCard');

const roastBtn = document.getElementById('btnRoast');
const quoteBtn = document.getElementById('btnQuote');

/* ========= Data ========= */
let ROASTS = [];
let QUOTES = [];

/* ========= Helpers ========= */
function chooseRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setDisplay(text, kind) {
  display.textContent = text;
  author.textContent = kind === "roast" ? "— Roastmaster" : "— Visdom";

  // gör kortet synligt och trigga animation
  resultCard.classList.remove("show");
  void resultCard.offsetWidth; // trick för att reseta animation
  resultCard.classList.add("show");
}

/* ========= Actions ========= */
function showRandomRoast() {
  if (!ROASTS.length) return;
  const text = chooseRandom(ROASTS);
  setDisplay(text, "roast");
}

function showRandomQuote() {
  if (!QUOTES.length) return;
  const text = chooseRandom(QUOTES);
  setDisplay(text, "quote");
}

/* ========= Data loader ========= */
async function loadData() {
  try {
    const res = await fetch("/data/data.json");
    if (!res.ok) throw new Error("Kunde inte hämta data.json");
    const data = await res.json();
    ROASTS = data.roasts || [];
    QUOTES = data.quotes || [];
    console.log("✅ Data laddad:", ROASTS.length, "roasts &", QUOTES.length, "citat");
  } catch (err) {
    console.error("Fel vid laddning:", err);
    setDisplay("Kunde inte ladda roast/citat 😢", "quote");
  }
}

/* ========= Init ========= */
roastBtn.addEventListener("click", showRandomRoast);
quoteBtn.addEventListener("click", showRandomQuote);

function hashStr(str){
  let hash = 0;
  for(let i=0;i<str.length;i++){
    hash = ((hash<<5)-hash)+str.charCodeAt(i);
    hash |=0;
  }
  return Math.abs(hash);
}

function showDailyRoast(){
  const today = new Date().toISOString().slice(0,10);
  const idx = hashStr(today) % ROASTS.length;
  const dailyText = ROASTS[idx];
  const dailyDisplay = document.getElementById('dailyDisplay');
  dailyDisplay.textContent = dailyText;
}

// Kör efter att data har laddats
loadData().then(showDailyRoast);