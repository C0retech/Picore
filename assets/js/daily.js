const dailyBtn = document.getElementById('dailyBtn');
const dailyRoast = document.getElementById('dailyRoast');
const roastAuthor = document.getElementById('roastAuthor');
const dailyQuote = document.getElementById('dailyQuote');
const quoteAuthor = document.getElementById('quoteAuthor');

const ROASTS = [
  "Du är som en molnserver – dyr, långsam och oftast offline.",
  "Du har så lite edge att till och med Internet Explorer var snabbare än dig.",
  "Din personlighet laddar lika långsamt som ett 90-talsmodem.",
  "Om du var kod hade du varit while(true) {} – meningslös och fast.",
  "Din hjärna är som RAM – allt försvinner när det blir lite varmt.",
  "Du är som en WiFi-signal i källaren: svag, opålitlig och ingen märker när du försvinner.",
  "Du har samma precision som en IKEA-möbel utan manual.",
  "Om dumhet var bandbredd hade du varit 10 Gbit/s.",
  "Du är som ett obevakat kylskåp på jobbet – ingen gillar dig men alla pratar om dig.",
  "Din IQ är som batteriet i en gammal iPhone – dör när det blir jobbigt."
];

const QUOTES = [
  "Kaffe är inte en dryck, det är en livsstil.",
  "Ctrl+S är min religion.",
  "Livet är som en kodbas – fullt av buggar men ändå körbart.",
  "Sarkasm är gratis terapi.",
  "Alla dagar blir bättre med en extra shot espresso.",
  "Kaos är bara ordning som inte kompilerat än.",
  "När livet kraschar – starta om och testa igen.",
  "Skratta åt dina problem, de hatar det.",
  "Kreativitet är intelligens som tar en kafferast.",
  "Rädsla är bara en 404: du hittar snart rätt sida igen."
];

function hashStr(s){
  let h=2166136261;
  for(let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h += (h<<1)+(h<<4)+(h<<7)+(h<<8)+(h<<24); }
  return Math.abs(h);
}

dailyBtn.addEventListener('click', ()=>{
  const today = new Date().toISOString().slice(0,10);
  const roastIdx = hashStr(today + "roast") % ROASTS.length;
  const quoteIdx = hashStr(today + "quote") % QUOTES.length;
  dailyRoast.textContent = ROASTS[roastIdx];
  roastAuthor.textContent = "— Dagens roast";
  dailyQuote.textContent = QUOTES[quoteIdx];
  quoteAuthor.textContent = "— Dagens citat";
});

document.getElementById('copyRoastBtn').addEventListener('click', ()=>{
  navigator.clipboard.writeText(dailyRoast.textContent);
});
document.getElementById('copyQuoteBtn').addEventListener('click', ()=>{
  navigator.clipboard.writeText(dailyQuote.textContent);
});
