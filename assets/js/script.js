/* ========= DATA ========= */
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
  "Du är som Windows-update: ingen vill ha dig, men man blir ändå fast med dig."
  "Du har samma karisma som en fuktig disktrasa."
  "Om dumhet var en sport hade du varit OS-maskoten."
  "Du ser ut som en kille som säger 'jag har det på en hårddisk hemma' men egentligen har du bara porrmappen döpt till "skatt.xlsx"."
  "Du har samma energinivå som en urladdad ficklampa."
  "Folk klickar på 'acceptera alla cookies' snabbare än de skulle klicka på din Tinder-profil."
  "Du är beviset på att evolutionen ibland tar kaffe-paus."
  "Du är som en gjutform utan släppmedel – ingen vill röra dig två gånger."
  "Din hjärna har mer lagg än ett gratis-WiFi på en buss."
  "Du är lika användbar som caps lock-knappen i ett lösenord."
  "Din charm funkar ungefär lika bra som en trasig kondom."
  "Du pratar som en manual till en trasig mikrovågsugn."
  "Du ser ut som en kille som blir nekad av ChatGPT på frågan “vill du vara min vän?”."
  "Din personlighet är lika intressant som en taxikvitto."
  "Du är som en 3D-skrivare utan filament – bara tomt surr."
  "Om hjärnceller var pengar hade du inte ens råd med en kanelbulle."
  "Du är som en Netflix-serie som borde lagts ner efter säsong 1."
  "Du har mer bakgrundsbrus än en gammal TV utan antenn."
  "Du är beviset på att inte alla Pokémon utvecklas."
  "Du har samma sex appeal som ett trasigt lysrör på ett dass i skogen"
  "Du har samma sociala kompetens som en brödrost i brand."
  "Du är beviset på att gravitationen inte bara drar ner saker, den drar också ner IQ."
  "Om hjärnan var dynamit hade du inte ens sprängt upp ett näshår."
  "Du är som en gratis app – full av buggar och ingen vill ha premiumversionen."
  "Du ser ut som en människa vars livsmål är att alltid stå i vägen."
  "Du är så ointressant att även din skugga har sagt upp sig."
  "Du är som en 3D-skrivare som bara skriver ut fel – dyr, högljudd och helt värdelös."
  "Att lyssna på dig är som att kolla på färg som torkar, fast färgen har mer djup."
  "Du har lika mycket karisma som en IKEA-manual på serbiska."
  "Du är definitionen av en mänsklig ‘low battery’-ikon."
  "Du har samma charm som lukten i en sopcontainer en varm sommardag."
  "Om dumhet var elektricitet hade du kunnat driva hela Vattenfall själv."
  "Du är som ett felmeddelande – irriterande, värdelös och alltid på fel plats."
  "Det finns dammråttor med mer livsglädje än du."
  "Du är så torr att till och med ökenkaktusar undviker dig."
  "Om intelligens var en valuta skulle du leva i evig inflation."
  "Din existens är som en popup-annons – onödig och alltid störande."
  "Du är den mänskliga motsvarigheten till att snubbla på en sladd och dra ur hela datorn."
  "Folk pratar bakom din rygg för att din personlighet inte är värd ögonkontakt."
  "Du är beviset på att inte alla spermier ska vinna."
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
  "Livet blir enklare när man slutar förklara sig för folk som ändå inte fattar."
  "Det är inte kaffet som håller dig vid liv – det är din rädsla för människor utan kaffe."
  "De flesta har åsikter de aldrig själva hade råd att leva efter."
  "Det är alltid de som gör minst som har mest att säga."
  "Du är inte trött – du är bara konstant omgiven av idioter."
  "Alla vill ha förändring, men ingen vill ändra på sig själv."
  "Dina problem försvinner inte, du blir bara bättre på att ignorera dem."
  "Internet gav alla en röst, och vi inser nu varför vissa borde varit tysta."
  "Stress är bara kroppen som säger: ‘sluta leka vuxen, du suger på det’."
  "Man växer inte upp – man lär sig bara bättre undanflykter."
  "De flesta är inte ens huvudperson i sitt eget liv – de är biroller i nån annans drama."
  "Om du väntar på rätt tidpunkt gör du samma sak nästa år."
  "Ingen minns hur snabbt du svarade på ett mejl, men alla minns när du fuckade upp."
  "Folk vill ha ärlighet tills de faktiskt får den."
  "Du blir aldrig klar – du dör bara mitt i en to-do-lista."
  "Alla säger ‘följ dina drömmar’, men ingen nämner mardrömmarna."
  "Folk slösar mer energi på att se upptagna ut än att faktiskt göra något."
  "De flesta diskussioner är bara folk som tävlar i vem som kan vara mest kränkt."
  "Det är lätt att vara smart i teorin – i praktiken sitter du ändå där och googlar hur man kokar ägg."
  "Tid läker inga sår – den gör dig bara bättre på att fejka att du är okej."
  "Alla säger att tid är pengar, men ändå sitter folk och scrollar TikTok som om de var miljardärer."
  "Du behöver inte en psykolog, du behöver bara sluta umgås med idioter."
  "Livet är bara en lång lista av saker du skjuter upp tills det är för sent."
  "De som snackar mest om lojalitet är oftast de första som sticker."
  "Alla vill ha ärlighet tills du säger sanningen om deras frisyr."
  "Du jobbar inte för att leva, du jobbar för att någon annan ska leva bättre."
  "Det är inte motivation du saknar, det är bara lathet med bättre ursäkter."
  "De som postar mest om lycka på sociala medier är de som gråter i duschen."
  "Det är inte bristen på pengar som stoppar dig, det är din Netflix-historik."
  "När någon säger ‘vi borde ta en fika nån gång’ menar de ‘jag hoppas vi aldrig ses’."
  "Alla hatar drama tills det inte handlar om dem själva."
  "Man vet att man är vuxen när man blir glad över nya soppåsar."
  "Folk säger ‘allt händer av en anledning’ som om deras dåliga val var ödet och inte ren dumhet."
  "Om du väntar på att livet ska bli rättvist, vänta stående – det kommer aldrig."
  "Det är alltid de mest inkompetenta som har powerpoint-presentationer på jobbet."
  "Vänner för livet finns inte – bara folk som inte har blockat dig än."
  "Alla pratar om att ‘finna sig själv’, men ingen hittar ens sina nycklar."
  "Lycka är bara när du för en gångs skull slipper träffa folk."
  "Ju mer någon pratar om sitt öppna sinne, desto smalare är deras hjärna."
  "Alla vill ha balans i livet, men ingen kan ens balansera sin jävla budget."
];

async function loadData() {
  try {
    const res = await fetch('/data/data.json');
    const data = await res.json();
    ROASTS = data.roasts;
    QUOTES = data.quotes;
  } catch(e){
    console.error('Could not load data.json', e);
  }
}

// Kör direkt vid start
loadData();


/* ========= Utils ========= */
function chooseRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function hashStr(s){
  let h=2166136261;
  for(let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h += (h<<1)+(h<<4)+(h<<7)+(h<<8)+(h<<24); }
  return Math.abs(h);
}

/* ========= DOM refs ========= */
const display = document.getElementById('display');
const author = document.getElementById('author');
const randomBtn = document.getElementById('randomBtn');
const randomQuoteBtn = document.getElementById('randomQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const saveFavBtn = document.getElementById('saveFavBtn');
const surpriseBtn = document.getElementById('surpriseBtn');

const modeRoastBtn = document.getElementById('modeRoast');
const modeQuoteBtn = document.getElementById('modeQuote');
const modeDailyBtn = document.getElementById('modeDaily');
const modeBadge = document.getElementById('modeBadge');

const favoritesEl = document.getElementById('favorites');

const quickText = document.getElementById('quickText');
const quickType = document.getElementById('quickType');
const quickAddBtn = document.getElementById('quickAddBtn');

let mode = 'roast';
let current = { text:'', author:'' };

/* ========= Favorites (localStorage) ========= */
function loadFavs(){ try{ return JSON.parse(localStorage.getItem('fav_roasts')) || []; }catch(e){ return []; } }
function saveFavs(arr){ localStorage.setItem('fav_roasts', JSON.stringify(arr)); }
function renderFavs(){
  const favs = loadFavs();
  favoritesEl.innerHTML = '';
  if(!favs.length){
    favoritesEl.innerHTML = '<div class="hint">Inga favoriter än — spara en roast eller citat!</div>';
    return;
  }
  favs.forEach((f, idx) => {
    const div = document.createElement('div'); div.className='fav-item';
    const left = document.createElement('div');
    left.innerHTML = `<div style="font-size:14px">${f.text}</div><small>${f.type.toUpperCase()} • ${new Date(f.date).toLocaleDateString()}</small>`;
    const right = document.createElement('div');
    const copy = document.createElement('button'); copy.textContent='Kopiera'; copy.className='btn ghost'; copy.style.marginRight='8px';
    copy.onclick = ()=>{ navigator.clipboard.writeText(f.text); flash(copy); };
    const remove = document.createElement('button'); remove.textContent='Ta bort'; remove.className='btn'; remove.onclick = ()=>{
      const arr = loadFavs(); arr.splice(idx,1); saveFavs(arr); renderFavs();
    };
    right.appendChild(copy); right.appendChild(remove);
    div.appendChild(left); div.appendChild(right);
    favoritesEl.appendChild(div);
  });
}

/* ========= Display helpers ========= */
function setDisplay(text, kind='roast'){
  display.classList.remove('pop','shake');
  void display.offsetWidth;
  display.classList.add('pop');
  display.textContent = text;
  author.textContent = (kind === 'quote') ? '— Visdom' : (mode === 'daily' ? '— Dagens roast' : '');
  current = { text, author: author.textContent };
}
function flash(el){
  el.classList.add('shake');
  setTimeout(()=>el.classList.remove('shake'),900);
}

/* ========= Core actions ========= */
function showRandomRoast(){
  mode='roast'; updateModeUI();
  const r = chooseRandom(ROASTS); setDisplay(r,'roast');
}
function showRandomQuote(){
  mode='quote'; updateModeUI();
  const q = chooseRandom(QUOTES); setDisplay(q,'quote');
}
function showDailyRoast(){
  mode='daily'; updateModeUI();
  const today = new Date().toISOString().slice(0,10);
  const idx = hashStr(today) % ROASTS.length;
  setDisplay(ROASTS[idx],'roast');
}

/* ========= Bind buttons ========= */
randomBtn.addEventListener('click', showRandomRoast);
randomQuoteBtn.addEventListener('click', showRandomQuote);
surpriseBtn.addEventListener('click', ()=>{
  const p=Math.random();
  if(p<0.5) showRandomRoast();
  else if(p<0.85) showRandomQuote();
  else showDailyRoast();
});

copyBtn.addEventListener('click', ()=>{
  if(!current.text) return flash(copyBtn);
  navigator.clipboard.writeText(current.text).then(()=>{
    const prev = copyBtn.textContent;
    copyBtn.textContent='Kopierat!';
    setTimeout(()=>copyBtn.textContent=prev,1000);
  }).catch(()=>flash(copyBtn));
});

saveFavBtn.addEventListener('click', ()=>{
  if(!current.text) return flash(saveFavBtn);
  const arr = loadFavs();
  arr.unshift({ text: current.text, type: mode==='quote'?'quote':'roast', date: new Date().toISOString() });
  saveFavs(arr.slice(0,100));
  renderFavs();
  const prev = saveFavBtn.textContent;
  saveFavBtn.textContent='Sparad!';
  setTimeout(()=>saveFavBtn.textContent=prev,900);
});

/* quick add */
quickAddBtn.addEventListener('click', async ()=>{
  const t = quickText.value.trim();
  const typ = quickType.value;
  if(!t){ flash(quickAddBtn); return; }

  try{
    const res = await fetch('/api/add', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ text: t, type: typ })
    });
    const data = await res.json();
    if(data.success){
      flash(quickAddBtn);
      window[typ==='roast'?'ROASTS':'QUOTES'].unshift(t);
      renderFavs();
      quickText.value='';
    } else {
      console.error(data.error);
      quickAddBtn.textContent='Fel, försök igen';
      setTimeout(()=>quickAddBtn.textContent='Lägg till (lokalt)',1000);
    }
  }catch(e){
    console.error(e);
    quickAddBtn.textContent='Fel, försök igen';
    setTimeout(()=>quickAddBtn.textContent='Lägg till (lokalt)',1000);
  }
});



/* mode controls */
modeRoastBtn.addEventListener('click', ()=>{ mode='roast'; updateModeUI(); showRandomRoast(); });
modeQuoteBtn.addEventListener('click', ()=>{ mode='quote'; updateModeUI(); showRandomQuote(); });
modeDailyBtn.addEventListener('click', ()=>{ mode='daily'; updateModeUI(); showDailyRoast(); });

function updateModeUI(){
  modeRoastBtn.classList.toggle('active', mode==='roast');
  modeQuoteBtn.classList.toggle('active', mode==='quote');
  modeDailyBtn.classList.toggle('active', mode==='daily');
  modeBadge.textContent = 'Mode: ' + (mode==='roast'?'Roast' : (mode==='quote'?'Citat' : 'Dagens Roast'));
}

/* keyboard shortcuts */
document.addEventListener('keydown', (e)=>{
  if(e.code === 'Space'){ e.preventDefault(); surpriseBtn.click(); }
  if(e.key === 'r') randomBtn.click();
  if(e.key === 'q') randomQuoteBtn.click();
});

/* init */
renderFavs();
updateModeUI();
setTimeout(()=>{ setDisplay("Tryck 'Ge mig smisk' eller tryck 'Space' för överraskning.", 'quote'); }, 400);
