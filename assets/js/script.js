// Exempel roast & citat
const roasts = [
  "Du har lika mycket karisma som en brödrost.",
  "Din kod är så buggig att den borde få egen naturreservatstatus.",
  "Om lathet var en sport hade du vunnit OS varje år."
];

const quotes = [
  "“Framtiden tillhör dem som tror på sina drömmar.”",
  "“En dag utan skratt är en dag förlorad.”",
  "“Mod är att börja, även när du inte ser slutet.”"
];

// Generera slumpade
document.getElementById("roastBtn").addEventListener("click", () => {
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  document.getElementById("output").textContent = randomRoast;
});

document.getElementById("quoteBtn").addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("output").textContent = randomQuote;
});

// Dagens roast & citat (ändras baserat på datum)
function getDailyItem(arr) {
  const day = new Date().getDate();
  return arr[day % arr.length];
}

document.getElementById("dailyRoast").textContent = getDailyItem(roasts);
document.getElementById("dailyQuote").textContent = getDailyItem(quotes);
