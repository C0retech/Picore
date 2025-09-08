let ROASTS = [];
let QUOTES = [];

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

/* ========= Data loader ========= */
async function loadData() {
  try {
    const res = await fetch('./data/data.json');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    ROASTS = data.roasts || [];
    QUOTES = data.quotes || [];

    // Kör en första visning om display finns
    if (mode === 'roast') showRandomRoast();
    else if (mode === 'quote') showRandomQuote();
    else if (mode === 'daily') showDailyRoast();

  } catch (e) {
    console.error('Could not load data.json', e);
    setDisplay('Kunde inte ladda roast/citat 😢', 'quote');
  }
}


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
loadData();
