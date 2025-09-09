let ROASTS = [];
let QUOTES = [];

// Ladda in från data.json
async function loadData() {
  try {
    const res = await fetch('/data/data.json');
    if (!res.ok) throw new Error("Kunde inte hämta data.json");
    const data = await res.json();
    ROASTS = data.roasts || [];
    QUOTES = data.quotes || [];
  } catch {
    console.error("Misslyckades med att ladda data.json");
  }
}

function chooseRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showRandomRoast() {
  const roast = chooseRandom(ROASTS);
  document.getElementById("display").textContent = roast || "Inga roasts tillgängliga.";
  document.getElementById("author").textContent = "";
}

function showRandomQuote() {
  const quote = chooseRandom(QUOTES);
  if (quote) {
    document.getElementById("display").textContent = quote.text;
    document.getElementById("author").textContent = `– ${quote.author || "Okänd"}`;
  } else {
    document.getElementById("display").textContent = "Inga citat tillgängliga.";
    document.getElementById("author").textContent = "";
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", async () => {
  await loadData();
  document.getElementById("btnRoast").addEventListener("click", showRandomRoast);
  document.getElementById("btnQuote").addEventListener("click", showRandomQuote);
});