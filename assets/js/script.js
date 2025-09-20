// Exempel roast & citat
const roasts = [
  "Du har lika mycket karisma som en brödrost.",
  "Din kod är så buggig att den borde få egen naturreservatstatus.",
  "Om lathet var en sport hade du vunnit OS varje år.",
  "Du har samma energinivå som en urladdad powerbank.",
  "Din logik är som Windows Update – aldrig när man behöver den.",
  "Om hjärnceller var WiFi hade du fortfarande körts på 2G.",
  "Du är beviset på att evolutionen ibland tar kaffepaus.",
  "Din humor är så torr att man borde servera den med vatten.",
  "Du ser ut som en beta-version som aldrig fick en uppdatering.",
  "Du är som en CAPTCHA – jobbig och ingen vill hantera dig.",
  "Din närvaro är som AirDrop – ingen har bett om den.",
  "Om dumhet var en valuta skulle du vara miljardär.",
  "Du har lika mycket djup som en TikTok-kommentar.",
  "Du är som en buggrapport – svår att förstå och irriterande för alla.",
"Din IQ har lika bra uppkoppling som en 90-talsmodem.",
"Du har lika mycket edge som en rund sten.",
"Om förvirring var en superkraft skulle du vara Avengers ledare.",
"Din hjärna kör fortfarande Windows 95.",
"Du är som en Netflix-serie ingen vill se klart.",
"Din planering är lika stabil som ett korthus i en storm.",
"Du är som en beta-feature – instabil och onödig.",
"Din närvaro är som spam-mejl – oönskad och för många.",
"Du är som en lampa utan glödlampa – helt meningslös.",
"Din humor är så dålig att till och med pappaskämt blir generade.",
"Du är som en 404-sida: ingen hittar något värde i dig.",
"Om dumhet var en sport skulle du ha OS-guld och världsrekord.",
"Du är som en dålig app – ingen fattar varför du ens finns.",
"Din charm är som Internet Explorer – föråldrad och långsam.",
"Du är som ett batteri på 1% – snart helt slut och värdelös.",
"Du är lika pålitlig som en rullgardin i stormväder.",
"Din närvaro suger mer energi än ett grafikkort på full last.",
"Du är som ett pussel där alla bitar är från fel låda.",
"Du är definitionen av en ‘low effort copy-paste’."
];

const quotes = [
  "“Framtiden tillhör dem som tror på sina drömmar.”",
  "“En dag utan skratt är en dag förlorad.”",
  "“Mod är att börja, även när du inte ser slutet.”",
  "“Livet börjar där komfortzonen slutar.”",
  "“Man missar 100% av chanserna man inte tar.”",
  "“Framgång kommer till den som vågar göra misstag.”",
  "“Det är bättre att vara en optimist som har fel än en pessimist som alltid har rätt.”",
  "“Motgångar är bara förklädda lektioner.”",
  "“Små steg varje dag leder till stora förändringar.”",
  "“Du kan inte styra vinden, men du kan justera seglen.”",
  "“Varje expert har en gång varit nybörjare.”",
  "“Det är aldrig för sent att börja om.”",
  "“Den bästa tiden att plantera ett träd var för 20 år sedan. Den näst bästa är idag.”",
"“Varje dag är en ny chans att förbättra dig själv.”",
"“Att misslyckas är bara ett steg närmare framgång.”",
"“Våga vara dålig i början, det är så man blir bra.”",
"“Små vanor skapar stora resultat.”",
"“Du behöver inte se hela trappan för att ta första steget.”",
"“Drömmar fungerar bara om du gör det.”",
"“Framtiden skapas av det du gör idag, inte imorgon.”",
"“Den som väntar på rätt tidpunkt väntar för evigt.”",
"“Din potential är större än dina ursäkter.”",
"“Varje motgång är ett kvitto på att du försöker.”",
"“Det är aldrig för sent att bli den person du vill vara.”",
"“Disciplin slår motivation varje gång.”",
"“Du kan inte ändra gårdagen, men du kan forma idag.”",
"“Det bästa sättet att förutsäga framtiden är att skapa den.”",
"“Du blir vad du gör upprepade gånger.”",
"“Ett nej är bara en omväg, inte en återvändsgränd.”",
"“Styrka handlar inte om att aldrig falla, utan om att resa sig igen.”",
"“Om det var enkelt hade alla gjort det.”",
"“Tiden du slösar bort får du aldrig tillbaka.”",
"“Var stolt över framstegen, oavsett hur små de är.”"
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
