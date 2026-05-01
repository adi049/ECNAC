// ══════════════════════════════════════════════
//  APP.JS — All core application logic
// ══════════════════════════════════════════════

// ─── State ───────────────────────────────────
let isLoggedIn  = false;
let currentUser = {};
let generatedOTP = '';
let otpTimer;
let map, mapInitDone = false;
let pendingAction = '';
let allMandiData  = [];
let isHindi = false;

// ─── Navigation ──────────────────────────────
function show (id) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active-nav'));
  document.getElementById(id).classList.add('active');
  const nav = document.getElementById('nav-' + id);
  if (nav) nav.classList.add('active-nav');
  if (id === 'stores'  && !mapInitDone) setTimeout(initMap, 120);
  if (id === 'mandi')  loadMandi();
  if (id === 'weather') loadWeather();
  if (id === 'news')   loadNews();
  if (id === 'learn')  renderCropGrid('all');   // from crops.js
  return false;
}

// ─── Toast ───────────────────────────────────
function toast (msg, type = 'info') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent  = msg;
  document.getElementById('toastIcon').textContent = icons[type];
  t.className = 'toast ' + type + ' show';
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ─── OTP / Auth ──────────────────────────────
function requireLogin (action) {
  if (isLoggedIn) { handleAction(action); return; }
  pendingAction = action;
  openModal();
}
function openModal  () { document.getElementById('authModal').classList.add('active');    setStep(1); }
function closeModal () { document.getElementById('authModal').classList.remove('active'); clearInterval(otpTimer); }
function setStep (n)  { document.querySelectorAll('.otp-step').forEach(s => s.classList.remove('active')); document.getElementById('step' + n).classList.add('active'); }
function goBackStep1  () { clearInterval(otpTimer); setStep(1); }

function sendOTP () {
  const phone   = document.getElementById('aPhone').value.trim();
  const aadhaar = document.getElementById('aAadhaar').value.trim();
  const name    = document.getElementById('aName').value.trim();
  if (!name)              { toast('Naam enter karein', 'error'); return; }
  if (phone.length !== 10){ toast('10-digit phone number enter karein', 'error'); return; }
  if (aadhaar.length !== 12){ toast('12-digit Aadhaar enter karein', 'error'); return; }
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  document.getElementById('maskedPhone').textContent = '+91 XXXXXX' + phone.slice(-4);
  document.getElementById('demoOTP').textContent = generatedOTP;
  setStep(2);
  startTimer();
  ['o1','o2','o3','o4','o5','o6'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('o1').focus();
  toast('OTP sent to ' + phone + ' (Demo)', 'info');
}

function startTimer () {
  let t = 30;
  document.getElementById('timerDisplay').textContent = t;
  clearInterval(otpTimer);
  otpTimer = setInterval(() => {
    t--;
    document.getElementById('timerDisplay').textContent = t;
    if (t <= 0) { clearInterval(otpTimer); document.getElementById('timerDisplay').textContent = 'Resend'; }
  }, 1000);
}

function otpMove (el, nextId) { if (el.value.length === 1 && nextId) document.getElementById(nextId).focus(); }
function otpBack (e, prevId, el) { if (e.key === 'Backspace' && el.value === '' && prevId) document.getElementById(prevId).focus(); }

function verifyOTP () {
  const entered = ['o1','o2','o3','o4','o5','o6'].map(id => document.getElementById(id).value).join('');
  if (entered.length < 6) { toast('6 digits enter karein', 'error'); return; }
  if (entered === generatedOTP) {
    const name  = document.getElementById('aName').value.trim();
    const phone = document.getElementById('aPhone').value.trim();
    isLoggedIn = true;
    currentUser = { name, phone };
    document.getElementById('pName').value  = name;
    document.getElementById('pPhone').value = phone;
    document.getElementById('successMsg').textContent = 'Welcome, ' + name + '! Account verified.';
    clearInterval(otpTimer);
    setStep(3);
    toast('Login successful! Welcome ' + name, 'success');
    setTimeout(() => { closeModal(); if (pendingAction) handleAction(pendingAction); }, 1800);
  } else {
    toast('Invalid OTP. Try again.', 'error');
    ['o1','o2','o3','o4','o5','o6'].forEach(id => {
      document.getElementById(id).value = '';
      document.getElementById(id).style.borderColor = 'var(--red)';
    });
    setTimeout(() => ['o1','o2','o3','o4','o5','o6'].forEach(id => document.getElementById(id).style.borderColor = ''), 1500);
    document.getElementById('o1').focus();
  }
}

function handleAction (action) {
  if (action === 'loan')   show('loan');
  if (action === 'status') show('status');
}

// ─── Profile ─────────────────────────────────
function toggleProfile () { document.getElementById('profilePanel').classList.toggle('open'); }
function saveProfile () {
  const name = document.getElementById('pName').value;
  if (!name) { toast('Naam enter karein', 'error'); return; }
  toast('Profile saved!', 'success');
  document.getElementById('profilePanel').classList.remove('open');
}
function logout () {
  isLoggedIn = false; currentUser = {};
  toast('Logged out', 'info');
  document.getElementById('profilePanel').classList.remove('open');
}
function previewPhoto (input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = document.getElementById('photoPreview');
    img.src = e.target.result;
    img.style.display = 'block';
    document.getElementById('photoIcon').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

// ─── Loan ────────────────────────────────────
function applyLoan () {
  const name    = document.getElementById('lName').value;
  const phone   = document.getElementById('lPhone').value;
  const aadhaar = document.getElementById('lAadhaar').value;
  if (!name || !phone || !aadhaar) { toast('Saare fields bharen', 'error'); return; }
  if (!isLoggedIn) { requireLogin('loan'); return; }
  const refId = 'KS' + Math.floor(100000 + Math.random() * 900000);
  toast('Application submit! Ref: ' + refId, 'success');
  setTimeout(() => { show('status'); document.getElementById('refNum').value = refId; }, 1500);
}

// ─── Loan Status ─────────────────────────────
function checkStatus () {
  const ref   = document.getElementById('refNum').value.trim();
  const phone = document.getElementById('stPhone').value.trim();
  if (!ref && !phone) { toast('Reference number ya phone enter karein', 'error'); return; }
  if (!isLoggedIn) { requireLogin('status'); return; }
  const stages   = ['Submitted', 'In Verification', 'Under Review', 'Approved'];
  const stageIdx = Math.floor(Math.random() * 4);
  ['s1','s2','s3','s4'].forEach((d, i) => {
    const el = document.getElementById(d);
    el.className = 'step-dot';
    if (i < stageIdx) el.classList.add('done');
    else if (i === stageIdx) el.classList.add('active');
  });
  const badge = document.getElementById('statusBadge');
  badge.textContent = stages[stageIdx];
  badge.className = 'status-badge ' + (stageIdx === 3 ? 'approved' : 'pending');
  document.getElementById('statusMsg').textContent = stageIdx === 3
    ? 'Congratulations! Loan approved. Bank 2 working days mein contact karega.'
    : 'Application process ho rahi hai. Expected: 5-7 working days.';
  document.getElementById('statusResult').style.display = 'block';
}

// ─── Mandi Rates ─────────────────────────────
function loadMandi () {
  allMandiData = [
    {crop:'Wheat',      mandi:'Hapur',         state:'UP',          min:2200, max:2320, modal:2275, type:'wheat',  chg:+1.2},
    {crop:'Rice Basmati',mandi:'Karnal',        state:'Haryana',     min:3800, max:4200, modal:4050, type:'rice',   chg:-0.5},
    {crop:'Maize',      mandi:'Davangere',      state:'Karnataka',   min:1950, max:2100, modal:2020, type:'maize',  chg:+2.1},
    {crop:'Cotton',     mandi:'Rajkot',         state:'Gujarat',     min:6200, max:6800, modal:6550, type:'cotton', chg:-1.3},
    {crop:'Soybean',    mandi:'Indore',         state:'MP',          min:4200, max:4650, modal:4400, type:'other',  chg:+0.8},
    {crop:'Mustard',    mandi:'Alwar',          state:'Rajasthan',   min:5000, max:5400, modal:5220, type:'other',  chg:+1.5},
    {crop:'Sugarcane',  mandi:'Muzaffarnagar',  state:'UP',          min:310,  max:340,  modal:325,  type:'other',  chg:0  },
    {crop:'Onion',      mandi:'Lasalgaon',      state:'Maharashtra', min:1200, max:1800, modal:1520, type:'other',  chg:-3.2},
    {crop:'Potato',     mandi:'Agra',           state:'UP',          min:800,  max:1100, modal:950,  type:'other',  chg:+0.4},
    {crop:'Tomato',     mandi:'Kolar',          state:'Karnataka',   min:600,  max:1400, modal:1050, type:'other',  chg:+5.8},
    {crop:'Chana',      mandi:'Indore',         state:'MP',          min:5100, max:5500, modal:5350, type:'other',  chg:+0.3},
    {crop:'Moongfali',  mandi:'Rajkot',         state:'Gujarat',     min:6400, max:7000, modal:6750, type:'other',  chg:+1.1},
  ];
  renderMandi(allMandiData);
}
function renderMandi (data) {
  document.getElementById('mandiBody').innerHTML = data.map(r => `
    <tr>
      <td><strong>${r.crop}</strong></td>
      <td>${r.mandi}</td><td>${r.state}</td>
      <td>₹${r.min}</td><td>₹${r.max}</td>
      <td><strong>₹${r.modal}</strong></td>
      <td class="${r.chg >= 0 ? 'price-up' : 'price-dn'}">${r.chg >= 0 ? '▲' : '▼'} ${Math.abs(r.chg)}%</td>
    </tr>`).join('');
}

// ─── Weather ─────────────────────────────────
function loadWeather () {
  const days   = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const icons  = ['☀️','🌤️','⛅','🌧️','⛈️','🌤️','☀️'];
  const temps  = [38, 35, 32, 28, 27, 30, 36];
  const labels = ['Clear','Partly Cloudy','Cloudy','Rain','Thunderstorm','Partly Cloudy','Clear'];
  document.getElementById('weatherCards').innerHTML = days.map((d, i) => `
    <div class="w-card">
      <div class="wi">${icons[i]}</div>
      <div style="font-weight:700">${d}</div>
      <div class="wt">${temps[i]}°C</div>
      <div class="wd">${labels[i]}</div>
    </div>`).join('');
  document.getElementById('farmingTips').innerHTML = [
    '🌱 Mon-Tue dry weather — dry crops ki buwaai ke liye sahi.',
    '💧 Wednesday se pehle sinchai dein — Thursday rain expected.',
    '⚠️ Rainy days (Thu-Fri) par pesticide spray nahi karein.',
    '🌡️ Extreme heat Mon-Tue — naye paudhon ko shade dein.',
    '✅ Harvesting window: Sat-Sun best hai.',
  ].map(t => `<li style="display:flex;align-items:flex-start;gap:.6rem;font-size:.88rem;color:var(--text-dim)">${t}</li>`).join('');
  document.getElementById('headerWeather').innerHTML = '<i class="fa-solid fa-sun"></i><span>38°C · Deoli</span>';
}

// ─── News ─────────────────────────────────────
function loadNews () {
  const news = [
    {title:'MSP Hike for Wheat',      body:'Wheat MSP ₹2,275/qtl — Rabi 2025-26 ke liye 6 crore farmers ko fayda.',   tag:'Policy',     date:'1 May 2026'},
    {title:'Free Drone Training',     body:'15,000 farmers ko free drone training — Digital Agriculture Mission.',      tag:'Technology', date:'30 Apr 2026'},
    {title:'PM Kisan 18th Kist',      body:'₹2000 ki installment 9.3 crore farmer families ko directly DBT.',           tag:'Scheme',     date:'29 Apr 2026'},
    {title:'Basmati Export Record',   body:"India's basmati rice exports ₹4.7 billion — all-time high.",               tag:'Export',     date:'28 Apr 2026'},
    {title:'Natural Farming',         body:'Zero budget natural farming 8 naye states mein — ₹2,481 crore allocation.', tag:'Policy',     date:'27 Apr 2026'},
    {title:'Pink Bollworm Alert',     body:'Gujarat aur Maharashtra cotton farmers ke liye advisory jaari.',             tag:'Warning',    date:'26 Apr 2026'},
  ];
  document.getElementById('newsCards').innerHTML = news.map(n => `
    <div class="scheme-card">
      <div class="scheme-tag">${n.tag}</div>
      <div class="scheme-name">${n.title}</div>
      <div class="scheme-desc">${n.body}</div>
      <div style="margin-top:.6rem;font-size:.75rem;color:var(--text-muted)">${n.date}</div>
    </div>`).join('');
}

// ─── Map ─────────────────────────────────────
let mapMarkers = [];
function initMap () {
  map = L.map('map').setView([28.4089, 77.4679], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);
  const stores = [
    {name:'Green Seeds Store',  lat:28.4089, lng:77.4679, type:'seeds',      icon:'🌱'},
    {name:'Fertilizer World',   lat:28.4150, lng:77.4730, type:'fertilizer', icon:'🧪'},
    {name:'Tractor Emporium',   lat:28.4020, lng:77.4600, type:'equipment',  icon:'🚜'},
    {name:'Pesticide Zone',     lat:28.4200, lng:77.4550, type:'pesticide',  icon:'🛡️'},
    {name:'Agri Inputs Plus',   lat:28.4060, lng:77.4800, type:'seeds',      icon:'🌱'},
    {name:'Kisaan Bhandaar',    lat:28.4130, lng:77.4650, type:'fertilizer', icon:'🧪'},
  ];
  stores.forEach(s => {
    const m = L.marker([s.lat, s.lng]).addTo(map)
      .bindPopup(`<b>${s.icon} ${s.name}</b><br><small>Type: ${s.type}</small>`);
    m._storeType = s.type;
    mapMarkers.push(m);
  });
  mapInitDone = true;
}
function filterMap (type) {
  mapMarkers.forEach(m => { if (type === 'all' || m._storeType === type) m.addTo(map); else map.removeLayer(m); });
}

// ─── AI Chat ─────────────────────────────────
const botReplies = {
  'wheat':    'Gehun ki buwaai Oct-Nov mein karein. HD-3226 ya PBW-343 use karein. 100-125 kg beej/hectare. 🌾',
  'blast':    'Rice blast ke liye Tricyclazole 75WP 0.6g/L spray karein. 2-3 spray 10 din ke antar par. 💊',
  'pm kisan': 'PM Kisan ke liye: pmkisan.gov.in par register karein. ₹6000 saalaana 3 kist mein. ✅',
  'sugarcane':'Ganna ke liye DAP 250 kg/acre + Potash 80 kg ropai par. Urea 3 kist mein dein. 🌱',
  'kharif':   'Kharif crops (June-Oct): Dhan, Makai, Cotton, Soybean, Moongfali, Ganna. 🌧️',
  'bima':     'PMFBY ke liye pmfby.gov.in par jaayein. Kharif mein sirf 2% premium. 🛡️',
  'default':  'Yeh demo AI advisor hai. Real advice ke liye KVK helpline: 1800-180-1551 📞'
};
function sendChat () {
  const inp = document.getElementById('chatInput');
  const q   = inp.value.trim();
  if (!q) return;
  addMsg(q, 'user');
  inp.value = '';
  setTimeout(() => {
    const key = Object.keys(botReplies).find(k => q.toLowerCase().includes(k)) || 'default';
    addMsg(botReplies[key], 'bot');
  }, 700);
}
function addMsg (text, role) {
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  const body = document.getElementById('chatBody');
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}
function askQuick (q) { document.getElementById('chatInput').value = q; sendChat(); }

// ─── Init ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  show('home');
  loadWeather();
  document.addEventListener('click', e => {
    const panel = document.getElementById('profilePanel');
    if (!panel.contains(e.target) && !e.target.closest('.profile-btn')) panel.classList.remove('open');
  });
});