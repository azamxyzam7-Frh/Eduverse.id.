const subjects = [
  {id:"math", code:"MAT-01", name:"Matematika", icon:"∑", desc:"Bilangan, aljabar, geometri, dan logika matematika.", color:"violet",
   lessons:[["Eksponen & Bentuk Akar","Pelajari aturan pangkat, sifat akar, dan cara menyederhanakan bentuk akar.",
     ["Pangkat adalah perkalian berulang. Contoh: a³ = a × a × a.","Aturan penting: aᵐ × aⁿ = aᵐ⁺ⁿ dan aᵐ ÷ aⁿ = aᵐ⁻ⁿ (a ≠ 0).","Untuk akar, √(ab) = √a × √b jika a dan b tidak negatif."]],
    ["Persamaan Linear","Memahami persamaan satu variabel dan penerapannya.",["Tujuan utama adalah membuat variabel berdiri sendiri.","Operasi yang sama harus diterapkan pada kedua ruas."]],
    ["Teorema Pythagoras","Hubungan panjang sisi pada segitiga siku-siku.",["Rumus: a² + b² = c² dengan c sebagai sisi miring."]]]},
  {id:"physics", code:"PHY-01", name:"Fisika", icon:"⚙", desc:"Gerak, gaya, energi, gelombang, dan listrik.", lessons:[
    ["Gerak Lurus","Menganalisis jarak, waktu, dan kecepatan.",["Kecepatan rata-rata = perpindahan ÷ waktu.","Satuan SI kecepatan adalah m/s."]],
    ["Hukum Newton","Memahami hubungan gaya dan gerak benda.",["Hukum II Newton: F = m × a.","Resultan gaya menentukan percepatan."]],
    ["Energi","Mengenal energi kinetik dan potensial.",["Energi kinetik: Ek = ½mv².","Energi potensial gravitasi: Ep = mgh."]]]},
  {id:"biology", code:"BIO-01", name:"Biologi", icon:"◉", desc:"Sel, sistem organ, genetika, dan ekosistem.", lessons:[
    ["Sel & Organel","Mengenal unit dasar kehidupan dan organelnya.",["Membran sel mengatur keluar-masuk zat.","Mitokondria berperan dalam respirasi sel dan menghasilkan ATP."]],
    ["Sistem Organ","Memahami kerja sama organ dalam tubuh.",["Organ bekerja dalam sistem untuk menjalankan fungsi tertentu."]],
    ["Ekosistem","Hubungan makhluk hidup dengan lingkungannya.",["Komponen biotik adalah makhluk hidup, sedangkan abiotik adalah faktor tak hidup."]]]},
  {id:"chem", code:"CHE-01", name:"Kimia", icon:"⚗", desc:"Atom, ikatan, reaksi, larutan, dan materi.", lessons:[
    ["Struktur Atom","Memahami proton, neutron, dan elektron.",["Nomor atom menunjukkan jumlah proton pada atom netral.","Elektron bermuatan negatif, proton positif, neutron netral."]],
    ["Ikatan Kimia","Membedakan ikatan ion dan kovalen.",["Ikatan ion terjadi melalui serah-terima elektron.","Ikatan kovalen terjadi melalui pemakaian bersama elektron."]],
    ["Asam & Basa","Memahami konsep pH secara dasar.",["pH < 7 umumnya asam, pH = 7 netral, pH > 7 basa pada skala air standar."]]]},
  {id:"indo", code:"IND-01", name:"Bahasa Indonesia", icon:"A", desc:"Teks, kalimat efektif, sastra, dan kebahasaan.", lessons:[
    ["Teks Eksplanasi","Menjelaskan proses terjadinya suatu fenomena.",["Struktur umum: pernyataan umum, deretan penjelas, interpretasi (bila digunakan)."]],
    ["Kalimat Efektif","Menyusun kalimat yang jelas dan hemat.",["Kalimat efektif memperhatikan kesepadanan, keparalelan, dan kehematan."]]]},
  {id:"english", code:"ENG-01", name:"Bahasa Inggris", icon:"EN", desc:"Grammar, vocabulary, reading, dan conversation.", lessons:[
    ["Simple Present","Menyatakan kebiasaan dan fakta umum.",["Untuk he/she/it, kata kerja umumnya mendapat akhiran -s/-es.","Contoh: She studies every day."]],
    ["Simple Past","Menceritakan kejadian yang sudah selesai di masa lampau.",["Gunakan bentuk lampau kata kerja untuk kejadian yang selesai."]]]},
  {id:"ips", code:"SOC-01", name:"IPS", icon:"◎", desc:"Geografi, ekonomi, sejarah, dan masyarakat.", lessons:[
    ["Peta & Lokasi","Memahami konsep lokasi dan informasi spasial.",["Legenda menjelaskan simbol-simbol pada peta.","Skala membandingkan jarak pada peta dengan jarak sebenarnya."]],
    ["Aktivitas Ekonomi","Mengenal produksi, distribusi, dan konsumsi.",["Produksi menghasilkan barang/jasa, distribusi menyalurkan, konsumsi menggunakan."]]]},
  {id:"astronomy", code:"AST-01", name:"Astronomi", icon:"✦", desc:"Tata surya, bintang, galaksi, dan alam semesta.", lessons:[
    ["Tata Surya","Mengenal Matahari dan benda-benda yang mengorbitnya.",["Planet mengorbit Matahari karena gravitasi.","Urutan planet dari Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus."]],
    ["Bintang","Memahami dasar pembentukan dan evolusi bintang.",["Bintang memancarkan cahaya sendiri dari proses energi di interiornya."]]]}
];

const quizBank = [
  {subject:"Matematika", subjectId:"math", q:"Hasil dari 2³ adalah …", a:["6","8","9","12"], correct:1},
  {subject:"Matematika", subjectId:"math", q:"Pada segitiga siku-siku, sisi terpanjang disebut …", a:["alas","tinggi","sisi miring","diagonal"], correct:2},
  {subject:"Fisika", subjectId:"physics", q:"Satuan SI untuk kecepatan adalah …", a:["N","J","m/s","W"], correct:2},
  {subject:"Fisika", subjectId:"physics", q:"Rumus Hukum II Newton adalah …", a:["F=m/a","F=m×a","F=a/m","F=m+a"], correct:1},
  {subject:"Biologi", subjectId:"biology", q:"Organel yang berkaitan dengan respirasi sel adalah …", a:["ribosom","mitokondria","vakuola","lisosom"], correct:1},
  {subject:"Kimia", subjectId:"chem", q:"Partikel atom yang bermuatan negatif adalah …", a:["proton","neutron","elektron","nukleon"], correct:2},
  {subject:"Bahasa Indonesia", subjectId:"indo", q:"Kalimat efektif sebaiknya …", a:["bertele-tele","tidak jelas","hemat dan jelas","selalu panjang"], correct:2},
  {subject:"Bahasa Inggris", subjectId:"english", q:"Choose the correct sentence: …", a:["She study every day.","She studies every day.","She studying every day.","She study every days."], correct:1},
  {subject:"IPS", subjectId:"ips", q:"Kegiatan menyalurkan barang dari produsen ke konsumen disebut …", a:["produksi","distribusi","konsumsi","investasi"], correct:1},
  {subject:"Astronomi", subjectId:"astronomy", q:"Planet terdekat dengan Matahari adalah …", a:["Venus","Bumi","Mars","Merkurius"], correct:3}
];

const STORAGE_KEY = "eduverse_id_v1";
let state = loadState();
let activeQuiz = null;
let quizIndex = 0;
let quizScore = 0;
let quizSelected = null;
let currentModalLesson = null;

function loadState(){
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      theme: saved.theme || "dark",
      xp: Number(saved.xp || 0),
      attempts: Number(saved.attempts || 0),
      best: Number(saved.best || 0),
      mastery: saved.mastery || {},
      activity: Array.isArray(saved.activity) ? saved.activity : [],
      lastSession: saved.lastSession || ""
    };
  } catch(e) {
    return {theme:"dark",xp:0,attempts:0,best:0,mastery:{},activity:[],lastSession:""};
  }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function $(sel){ return document.querySelector(sel); }
function $$ (sel){ return [...document.querySelectorAll(sel)]; }

function formatTime(ts){
  if(!ts) return "Belum ada aktivitas";
  return new Intl.DateTimeFormat("id-ID",{dateStyle:"medium",timeStyle:"short"}).format(new Date(ts));
}
function navTo(id){
  const target = document.getElementById(id) || document.getElementById("home");
  $$(".page").forEach(p=>p.classList.remove("active"));
  target.classList.add("active");
  $$(".nav a").forEach(a=>a.classList.toggle("active", a.dataset.nav===id));
  history.replaceState(null,"",`#${id}`);
  $("#mainNav").classList.remove("open");
  if(id==="progress") renderProgress();
  if(id==="quiz") renderQuizStart();
  window.scrollTo({top:0,behavior:"smooth"});
}
function applyTheme(){
  document.body.classList.toggle("light", state.theme==="light");
  $("#themeToggle").textContent = state.theme==="light" ? "☾" : "☼";
}
function addActivity(title, detail){
  state.activity.unshift({title,detail,ts:Date.now()});
  state.activity = state.activity.slice(0,8);
  state.lastSession = title;
  saveState();
  $("#lastSession").textContent = title;
}

function subjectById(id){ return subjects.find(s=>s.id===id); }
function renderQuick(){
  $("#quickGrid").innerHTML = subjects.slice(0,4).map(s=>`
    <article class="quick-card" data-subject="${s.id}">
      <div class="quick-icon">${s.icon}</div>
      <strong>${s.name}</strong>
      <p>${s.desc}</p>
    </article>`).join("");
}
function renderSubjects(filter=""){
  const q = filter.toLowerCase().trim();
  const list = subjects.filter(s => `${s.name} ${s.desc} ${s.code}`.toLowerCase().includes(q));
  $("#subjectGrid").innerHTML = list.length ? list.map(s=>`
    <article class="subject-card" data-subject="${s.id}">
      <div class="subject-top"><div class="subject-icon">${s.icon}</div><span class="subject-code">${s.code}</span></div>
      <h3>${s.name}</h3><p>${s.desc}</p>
      <div class="subject-bottom"><span>${s.lessons.length} materi</span><span>Buka →</span></div>
    </article>`).join("") :
    `<div class="panel" style="grid-column:1/-1;text-align:center;color:var(--muted)">Tidak ada pelajaran yang cocok dengan pencarian.</div>`;
  $("#subjectCount").textContent = subjects.length;
  $("#subjectCountHero").textContent = `${subjects.length}+`;
}
function openSubject(id){
  const s=subjectById(id); if(!s) return;
  const lesson = s.lessons[0];
  openLesson(s, lesson);
}
function openLesson(s, lesson){
  currentModalLesson = {subjectId:s.id, lesson};
  $("#modalSubject").textContent = `${s.code} • ${s.name}`;
  $("#modalTitle").textContent = lesson[0];
  $("#modalContent").innerHTML = `<p>${lesson[1]}</p>${lesson[2].map((x,i)=>`<h4>${i+1}. ${x.split(":")[0]}</h4>${x.includes(":")?`<p>${x}</p>`:""}`).join("")}`;
  // Simpler body: render all lesson points as readable paragraphs
  $("#modalContent").innerHTML = `<p>${lesson[1]}</p><h4>Ringkasan materi</h4>${lesson[2].map(x=>`<p>• ${x}</p>`).join("")}`;
  $("#materialModal").classList.remove("hidden");
  document.body.style.overflow="hidden";
}
function closeModal(){ $("#materialModal").classList.add("hidden"); document.body.style.overflow=""; }

function getQuizQuestions(mode="mixed", subjectId=null){
  let pool = subjectId ? quizBank.filter(q=>q.subjectId===subjectId) : [...quizBank];
  if(!pool.length) pool = [...quizBank];
  pool.sort(()=>Math.random()-0.5);
  return pool.slice(0, Math.min(5,pool.length));
}
function renderQuizStart(){
  $("#quizBest").textContent = `${state.best}%`;
  $("#quizStartView").innerHTML = `
    <div class="quiz-choice" data-quiz-mode="mixed">
      <h3>⚡ Kuis Campuran</h3><p>Soal dari berbagai pelajaran. Cocok untuk menguji pengetahuan umum di Eduverse.</p>
      <div class="start-meta"><span>5 soal</span><span>Pilihan ganda</span><span>XP aktif</span></div>
    </div>
    ${subjects.map(s=>`<div class="quiz-choice" data-quiz-subject="${s.id}">
      <h3>${s.icon} ${s.name}</h3><p>Kuis khusus berdasarkan materi ${s.name}.</p>
      <div class="start-meta"><span>${quizBank.filter(q=>q.subjectId===s.id).length} soal bank</span><span>Auto-score</span></div>
    </div>`).slice(0,8).join("")}`;
  $("#quizPlayView").classList.add("hidden"); $("#quizResultView").classList.add("hidden"); $("#quizStartView").classList.remove("hidden");
}
function startQuiz(mode, subjectId=null){
  activeQuiz = getQuizQuestions(mode,subjectId);
  quizIndex=0;quizScore=0;quizSelected=null;
  $("#quizStartView").classList.add("hidden");$("#quizResultView").classList.add("hidden");$("#quizPlayView").classList.remove("hidden");
  renderQuizQuestion();
}
function renderQuizQuestion(){
  const q=activeQuiz[quizIndex];
  $("#quizPlayView").innerHTML = `
    <div class="quiz-head"><div><span class="eyebrow">${q.subject.toUpperCase()}</span><div style="margin-top:4px;font-weight:700">Soal ${quizIndex+1} / ${activeQuiz.length}</div></div><span style="color:var(--muted);font-size:11px">${quizScore} benar</span></div>
    <div class="quiz-progress"><span style="width:${(quizIndex/activeQuiz.length)*100}%"></span></div>
    <div class="quiz-question" style="margin-top:14px">
      <h3>${q.q}</h3>
      <div class="option-grid">${q.a.map((a,i)=>`<label class="option"><input type="radio" name="answer" value="${i}"><span>${a}</span></label>`).join("")}</div>
      <div class="quiz-actions"><button class="btn btn-ghost" id="quitQuiz">Keluar</button><button class="btn btn-primary" id="nextQuiz">Berikutnya →</button></div>
    </div>`;
  $$("#quizPlayView input[name=answer]").forEach(r=>r.addEventListener("change",()=>quizSelected=Number(r.value)));
  $("#nextQuiz").addEventListener("click", nextQuizQuestion);
  $("#quitQuiz").addEventListener("click", renderQuizStart);
}
function nextQuizQuestion(){
  if(quizSelected===null){ alert("Pilih salah satu jawaban terlebih dahulu."); return; }
  if(quizSelected===activeQuiz[quizIndex].correct) quizScore++;
  quizIndex++;quizSelected=null;
  if(quizIndex<activeQuiz.length) renderQuizQuestion(); else finishQuiz();
}
function finishQuiz(){
  const percent = Math.round((quizScore/activeQuiz.length)*100);
  state.attempts++; state.best=Math.max(state.best,percent);
  const earned = quizScore*20 + (percent===100?25:0);
  state.xp += earned;
  const subjectIds=[...new Set(activeQuiz.map(q=>q.subjectId))];
  subjectIds.forEach(id=>{
    const prev=Number(state.mastery[id]||0);
    state.mastery[id]=Math.max(prev,percent);
  });
  addActivity(`Kuis selesai: ${percent}%`,`+${earned} XP • ${quizScore}/${activeQuiz.length} benar`);
  saveState();
  $("#quizPlayView").classList.add("hidden");$("#quizResultView").classList.remove("hidden");
  $("#quizResultView").innerHTML = `
    <span class="eyebrow">ASSESSMENT COMPLETE</span>
    <div class="result-score">${percent}%</div>
    <h3>${quizScore} dari ${activeQuiz.length} jawaban benar</h3>
    <p class="result-note">Kamu mendapatkan <strong>${earned} XP</strong>. Hasil kuis tersimpan otomatis di progress Eduverse.id.</p>
    <div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary" id="retryQuiz">Ulangi kuis</button>
      <button class="btn btn-ghost" id="seeProgress">Lihat progress</button>
    </div>`;
  $("#retryQuiz").addEventListener("click",()=>startQuiz("mixed"));
  $("#seeProgress").addEventListener("click",()=>navTo("progress"));
  $("#quizBest").textContent = `${state.best}%`;
}
function renderProgress(){
  $("#totalXp").textContent=state.xp;
  $("#quizAttempts").textContent=state.attempts;
  $("#bestScore").textContent=`${state.best}%`;
  const list = [...subjects].sort((a,b)=>Number(state.mastery[b.id]||0)-Number(state.mastery[a.id]||0));
  $("#masteryList").innerHTML=list.map(s=>{
    const v=Number(state.mastery[s.id]||0);
    return `<div class="mastery-row"><div class="mastery-head"><span>${s.icon} ${s.name}</span><small>${v}%</small></div><div class="mastery-bar"><span style="width:${v}%"></span></div></div>`
  }).join("");
  $("#activityList").innerHTML=state.activity.length ? state.activity.map(a=>`<div class="activity-item"><span class="activity-dot"></span><div><strong>${a.title}</strong><small>${a.detail} • ${formatTime(a.ts)}</small></div></div>`).join("") :
  `<div style="padding:22px 0;color:var(--muted);font-size:12px">Belum ada aktivitas. Mulai dari materi atau kuis.</div>`;
}

document.addEventListener("click",e=>{
  const navEl=e.target.closest("[data-nav]");
  if(navEl){ navTo(navEl.dataset.nav); return; }
  const card=e.target.closest("[data-subject]");
  if(card){ openSubject(card.dataset.subject); return; }
  const qm=e.target.closest("[data-quiz-mode]");
  if(qm){ startQuiz(qm.dataset.quizMode); return; }
  const qs=e.target.closest("[data-quiz-subject]");
  if(qs){ startQuiz("subject",qs.dataset.quizSubject); return; }
  if(e.target.matches("[data-close-modal]")) closeModal();
});
$("#subjectSearch").addEventListener("input",e=>renderSubjects(e.target.value));
$("#themeToggle").addEventListener("click",()=>{state.theme=state.theme==="light"?"dark":"light";saveState();applyTheme();});
$("#mobileMenu").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
$("#resetProgress").addEventListener("click",()=>{
  if(confirm("Reset semua progress, XP, dan riwayat aktivitas?")){
    state={theme:state.theme,xp:0,attempts:0,best:0,mastery:{},activity:[],lastSession:""};saveState();renderProgress();$("#lastSession").textContent="Belum ada aktivitas";
  }
});
$("#modalQuizBtn").addEventListener("click",()=>{
  const id=currentModalLesson?.subjectId || null; closeModal(); navTo("quiz"); setTimeout(()=>startQuiz("subject",id),80);
});

renderQuick();renderSubjects();renderProgress();applyTheme();
$("#lastSession").textContent=state.lastSession || "Belum ada aktivitas";
const hash=location.hash.replace("#","");
if(hash && document.getElementById(hash)) navTo(hash); else navTo("home");
