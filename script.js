const materials = [
  {
    id: "fisika-gerak", subject: "Fisika", icon: "⚙️", tone: "blue",
    title: "Gerak dan Kecepatan",
    summary: "Memahami jarak, waktu, kecepatan, dan cara benda bergerak.",
    sections: [
      ["Pengertian", "Gerak adalah perubahan posisi suatu benda terhadap titik acuan dalam selang waktu tertentu. Karena bergantung pada titik acuan, benda yang diam bagi satu pengamat dapat dianggap bergerak oleh pengamat lain."],
      ["Kecepatan", "Kecepatan rata-rata dapat dihitung dengan rumus v = s/t, yaitu jarak dibagi waktu. Dalam SI, satuan kecepatan adalah meter per sekon (m/s)."],
      ["Percepatan", "Percepatan menunjukkan perubahan kecepatan setiap satuan waktu. Jika kecepatan bertambah, benda mengalami percepatan; jika berkurang, benda mengalami perlambatan."],
      ["Contoh", "Mobil yang menempuh 100 meter dalam 5 sekon memiliki kelajuan rata-rata 20 m/s."]
    ]
  },
  {
    id: "fisika-energi", subject: "Fisika", icon: "⚡", tone: "yellow",
    title: "Energi dan Perubahannya",
    summary: "Mengenal energi kinetik, potensial, kalor, dan perubahan bentuk energi.",
    sections: [
      ["Pengertian", "Energi adalah kemampuan untuk melakukan usaha atau menyebabkan perubahan. Energi tidak hilang begitu saja, tetapi dapat berpindah atau berubah bentuk."],
      ["Energi kinetik", "Energi kinetik adalah energi yang dimiliki benda karena bergerak. Besarnya dipengaruhi massa dan kuadrat kecepatan."],
      ["Energi potensial", "Energi potensial gravitasi berkaitan dengan posisi benda terhadap permukaan acuan. Semakin tinggi posisi benda, semakin besar energi potensialnya."],
      ["Contoh perubahan", "Pada lampu, energi listrik berubah terutama menjadi energi cahaya dan panas."]
    ]
  },
  {
    id: "biologi-sel", subject: "Biologi", icon: "🧬", tone: "green",
    title: "Sel dan Organel",
    summary: "Memahami sel sebagai unit dasar kehidupan dan fungsi organelnya.",
    sections: [
      ["Pengertian", "Sel merupakan unit struktural dan fungsional dasar makhluk hidup. Ada organisme bersel satu dan organisme yang tersusun atas banyak sel."],
      ["Nukleus", "Nukleus atau inti sel menyimpan sebagian besar materi genetik dan mengatur berbagai aktivitas sel."],
      ["Mitokondria", "Mitokondria menghasilkan sebagian besar ATP melalui respirasi seluler sehingga sering disebut sebagai salah satu pusat penyedia energi sel."],
      ["Khusus tumbuhan", "Sel tumbuhan memiliki dinding sel, vakuola besar, dan kloroplas. Kloroplas menjadi tempat utama fotosintesis."]
    ]
  },
  {
    id: "biologi-fotosintesis", subject: "Biologi", icon: "🌿", tone: "green",
    title: "Fotosintesis",
    summary: "Bagaimana tumbuhan menggunakan cahaya untuk menghasilkan bahan makanan.",
    sections: [
      ["Pengertian", "Fotosintesis adalah proses ketika tumbuhan hijau menggunakan energi cahaya untuk membentuk glukosa dari karbon dioksida dan air, dengan menghasilkan oksigen sebagai salah satu produknya."],
      ["Tempat berlangsung", "Reaksi fotosintesis berkaitan erat dengan kloroplas dan pigmen klorofil yang menangkap energi cahaya."],
      ["Bahan yang dibutuhkan", "Tumbuhan memerlukan air, karbon dioksida, cahaya, dan pigmen fotosintetik. Intensitas cahaya, suhu, dan ketersediaan karbon dioksida dapat memengaruhi laju fotosintesis."],
      ["Peran", "Fotosintesis menjadi dasar penting bagi banyak rantai makanan dan membantu memasukkan energi cahaya ke dalam ekosistem."]
    ]
  },
  {
    id: "matematika-pangkat", subject: "Matematika", icon: "∑", tone: "blue",
    title: "Bilangan Berpangkat",
    summary: "Memahami pangkat, sifat operasi, dan contoh penerapannya.",
    sections: [
      ["Pengertian", "Pangkat menyatakan perkalian berulang. Contohnya 3² berarti 3 × 3 = 9."],
      ["Sifat dasar", "Untuk basis yang sama, aᵐ × aⁿ = aᵐ⁺ⁿ. Pembagian basis yang sama mengikuti aᵐ ÷ aⁿ = aᵐ⁻ⁿ selama a tidak sama dengan nol."],
      ["Pangkat nol", "Untuk a ≠ 0, a⁰ = 1. Aturan ini membantu menyederhanakan banyak bentuk aljabar."],
      ["Pangkat negatif", "Untuk a ≠ 0, a⁻ⁿ = 1/aⁿ."]
    ]
  },
  {
    id: "matematika-pythagoras", subject: "Matematika", icon: "△", tone: "yellow",
    title: "Teorema Pythagoras",
    summary: "Menentukan panjang sisi segitiga siku-siku.",
    sections: [
      ["Konsep", "Pada segitiga siku-siku, kuadrat sisi miring sama dengan jumlah kuadrat kedua sisi lainnya."],
      ["Rumus", "Jika c adalah sisi miring, maka a² + b² = c²."],
      ["Contoh", "Segitiga dengan sisi tegak 3 dan 4 memiliki sisi miring 5 karena 3² + 4² = 25."],
      ["Penerapan", "Konsep ini dapat digunakan untuk menghitung jarak diagonal, panjang tangga, dan berbagai masalah geometri."]
    ]
  },
  {
    id: "sejarah-proklamasi", subject: "Sejarah", icon: "📜", tone: "yellow",
    title: "Proklamasi Indonesia",
    summary: "Latar belakang dan makna Proklamasi Kemerdekaan Indonesia.",
    sections: [
      ["Latar belakang", "Menjelang Agustus 1945, situasi Perang Dunia II berubah drastis setelah Jepang menyerah kepada Sekutu. Di Indonesia muncul perbedaan pandangan mengenai waktu dan cara memproklamasikan kemerdekaan."],
      ["Peristiwa", "Proklamasi Kemerdekaan Indonesia dibacakan pada 17 Agustus 1945 di Jakarta atas nama bangsa Indonesia."],
      ["Makna", "Proklamasi menjadi pernyataan bahwa bangsa Indonesia menyatakan kemerdekaannya dan menjadi tonggak penting dalam pembentukan negara Indonesia."],
      ["Sesudahnya", "Berbagai langkah politik dan ketatanegaraan dilakukan untuk membentuk pemerintahan dan mempertahankan kemerdekaan."]
    ]
  },
  {
    id: "sejarah-revolusi", subject: "Sejarah", icon: "🏛️", tone: "yellow",
    title: "Revolusi Industri",
    summary: "Perubahan besar dalam produksi, teknologi, dan kehidupan masyarakat.",
    sections: [
      ["Pengertian", "Revolusi Industri adalah rangkaian perubahan teknologi dan ekonomi yang mengubah cara barang diproduksi serta kehidupan masyarakat."],
      ["Tahap awal", "Revolusi Industri pertama berkembang di Inggris pada abad ke-18 dan berkaitan dengan mekanisasi, mesin uap, serta perkembangan industri tekstil."],
      ["Dampak", "Produksi meningkat, kota berkembang, pola pekerjaan berubah, dan muncul berbagai persoalan sosial baru."],
      ["Perkembangan", "Tahap berikutnya ditandai oleh listrik, produksi massal, kemudian komputer dan teknologi digital pada era yang lebih modern."]
    ]
  },
  {
    id: "geografi-bumi", subject: "Geografi", icon: "🌍", tone: "blue",
    title: "Lapisan Bumi",
    summary: "Mengenal kerak, mantel, inti luar, dan inti dalam.",
    sections: [
      ["Kerak", "Kerak adalah lapisan terluar Bumi yang relatif tipis dibandingkan lapisan di bawahnya."],
      ["Mantel", "Mantel berada di bawah kerak dan tersusun atas material batuan panas. Pergerakan material di mantel berperan dalam dinamika lempeng tektonik."],
      ["Inti luar", "Inti luar didominasi material logam dalam keadaan cair. Gerakannya berkaitan dengan pembentukan medan magnet Bumi."],
      ["Inti dalam", "Inti dalam berada di pusat Bumi dan berada dalam keadaan padat karena tekanan yang sangat tinggi."]
    ]
  },
  {
    id: "geografi-cuaca", subject: "Geografi", icon: "☁️", tone: "blue",
    title: "Cuaca dan Iklim",
    summary: "Membedakan kondisi atmosfer sehari-hari dan pola jangka panjang.",
    sections: [
      ["Cuaca", "Cuaca adalah kondisi atmosfer pada tempat dan waktu tertentu, misalnya hujan, suhu, angin, dan kelembapan hari ini."],
      ["Iklim", "Iklim menggambarkan pola kondisi atmosfer dalam jangka waktu panjang pada wilayah tertentu."],
      ["Faktor", "Lintang, ketinggian, jarak dari laut, arus laut, dan kondisi permukaan dapat memengaruhi pola iklim."],
      ["Mengapa penting?", "Informasi cuaca dan iklim berguna untuk pertanian, transportasi, pengelolaan bencana, dan berbagai kegiatan manusia."]
    ]
  },
  {
    id: "teknologi-internet", subject: "Teknologi", icon: "🌐", tone: "blue",
    title: "Cara Kerja Internet",
    summary: "Memahami paket data, alamat IP, DNS, dan server secara sederhana.",
    sections: [
      ["Gambaran umum", "Internet adalah jaringan besar yang menghubungkan banyak perangkat dan jaringan komputer di seluruh dunia."],
      ["Paket data", "Data yang dikirim melalui internet biasanya dipecah menjadi bagian-bagian kecil yang disebut paket, lalu diteruskan melalui jaringan."],
      ["DNS", "DNS membantu menerjemahkan nama domain yang mudah dibaca manusia menjadi alamat IP yang digunakan perangkat untuk menemukan tujuan."],
      ["Server", "Server adalah komputer atau sistem yang menyediakan layanan atau data bagi perangkat lain, misalnya halaman web."]
    ]
  },
  {
    id: "teknologi-ai", subject: "Teknologi", icon: "🤖", tone: "green",
    title: "Kecerdasan Buatan",
    summary: "Mengenal AI, machine learning, data, dan contoh penggunaannya.",
    sections: [
      ["Pengertian", "Kecerdasan buatan adalah bidang komputasi yang membuat sistem mampu melakukan tugas yang biasanya membutuhkan kemampuan kognitif manusia."],
      ["Machine learning", "Machine learning merupakan pendekatan yang membuat model menemukan pola dari data untuk melakukan prediksi atau klasifikasi."],
      ["Contoh", "AI dapat digunakan untuk rekomendasi konten, pengenalan gambar, penerjemahan, bantuan pemrograman, dan berbagai bidang lainnya."],
      ["Catatan", "Sistem AI dapat menghasilkan kesalahan. Hasil penting sebaiknya diperiksa dengan sumber yang dapat dipercaya."]
    ]
  },
  {
    id: "astronomi-tata-surya", subject: "Astronomi", icon: "🪐", tone: "blue",
    title: "Tata Surya",
    summary: "Mengenal Matahari, planet, dan benda langit di lingkungan kita.",
    sections: [
      ["Matahari", "Matahari adalah bintang yang menjadi pusat Tata Surya dan merupakan sumber energi utama bagi kehidupan di Bumi."],
      ["Planet", "Tata Surya memiliki delapan planet yang mengorbit Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus."],
      ["Benda lain", "Selain planet terdapat planet katai, asteroid, komet, meteoroid, dan berbagai objek kecil lainnya."],
      ["Orbit", "Planet bergerak mengelilingi Matahari karena interaksi gravitasi. Orbit planet tidak berbentuk lingkaran sempurna."]
    ]
  },
  {
    id: "astronomi-bintang", subject: "Astronomi", icon: "✨", tone: "yellow",
    title: "Bintang dan Galaksi",
    summary: "Bagaimana bintang terbentuk dan tempatnya dalam galaksi.",
    sections: [
      ["Bintang", "Bintang adalah objek langit yang menghasilkan energi sendiri melalui proses fusi nuklir di bagian dalamnya."],
      ["Siklus hidup", "Bintang lahir dari awan gas dan debu. Perjalanan hidupnya dipengaruhi terutama oleh massa awalnya."],
      ["Galaksi", "Galaksi adalah kumpulan besar bintang, gas, debu, dan materi lain yang terikat oleh gravitasi."],
      ["Bima Sakti", "Tata Surya berada di Galaksi Bima Sakti, sebuah galaksi spiral."]
    ]
  }
];

const questions = [
  ["Fisika","Rumus kecepatan rata-rata yang benar adalah ...",["v = s/t","v = s×t","v = t/s","v = s+t"],0],
  ["Fisika","Satuan SI untuk kecepatan adalah ...",["kilogram","meter per sekon","newton","joule"],1],
  ["Fisika","Energi yang dimiliki benda karena bergerak disebut ...",["energi potensial","energi kimia","energi kinetik","energi nuklir"],2],
  ["Fisika","Energi potensial gravitasi berkaitan dengan ...",["warna benda","posisi benda","rasa benda","suara benda"],1],
  ["Biologi","Organel yang menyimpan sebagian besar materi genetik sel adalah ...",["ribosom","nukleus","vakuola","dinding sel"],1],
  ["Biologi","Tempat utama fotosintesis pada sel tumbuhan adalah ...",["kloroplas","ribosom","lisosom","sentriol"],0],
  ["Biologi","Pigmen yang menangkap energi cahaya dalam fotosintesis adalah ...",["hemoglobin","melanin","klorofil","keratin"],2],
  ["Biologi","Salah satu produk fotosintesis adalah ...",["oksigen","nitrogen","garam","besi"],0],
  ["Matematika","Nilai 3² adalah ...",["6","9","12","27"],1],
  ["Matematika","Untuk a ≠ 0, nilai a⁰ adalah ...",["0","a","1","-1"],2],
  ["Matematika","Bentuk aᵐ × aⁿ adalah ...",["aᵐ⁻ⁿ","aᵐ⁺ⁿ","aᵐⁿ","aᵐ/ⁿ"],1],
  ["Matematika","Sisi miring segitiga siku-siku dengan sisi 3 dan 4 adalah ...",["5","6","7","8"],0],
  ["Sejarah","Proklamasi Kemerdekaan Indonesia dibacakan pada ...",["17 Agustus 1945","1 Juni 1945","20 Mei 1908","28 Oktober 1928"],0],
  ["Sejarah","Revolusi Industri pertama berkembang kuat di ...",["Jepang","Inggris","Brasil","Mesir"],1],
  ["Sejarah","Mesin uap menjadi salah satu teknologi penting dalam ...",["Revolusi Industri pertama","Era digital","Zaman prasejarah","Reformasi Indonesia"],0],
  ["Geografi","Lapisan terluar Bumi disebut ...",["mantel","inti luar","kerak","inti dalam"],2],
  ["Geografi","Cuaca menggambarkan kondisi atmosfer ...",["dalam jangka panjang saja","pada waktu dan tempat tertentu","hanya di lautan","hanya di pegunungan"],1],
  ["Geografi","Inti luar Bumi didominasi material logam dalam keadaan ...",["padat","cair","gas","plasma"],1],
  ["Teknologi","DNS membantu menerjemahkan ...",["nama domain menjadi alamat IP","warna menjadi gambar","video menjadi audio","RAM menjadi ROM"],0],
  ["Teknologi","Data internet biasanya dikirim dalam bentuk ...",["paket data","batu data","lembar kertas","gelombang suara saja"],0],
  ["Teknologi","Machine learning memanfaatkan ...",["data dan pola","hanya kabel","hanya baterai","hanya kamera"],0],
  ["Astronomi","Pusat Tata Surya adalah ...",["Bumi","Bulan","Matahari","Jupiter"],2],
  ["Astronomi","Jumlah planet di Tata Surya adalah ...",["7","8","9","10"],1],
  ["Astronomi","Tata Surya berada di Galaksi ...",["Andromeda","Bima Sakti","Triangulum","Sombrero"],1],
  ["Astronomi","Bintang menghasilkan energi melalui proses ...",["fusi nuklir","fotosintesis","evaporasi","erosi"],0]
];

const facts = [
  ["01","Astronomi","Cahaya Matahari membutuhkan sekitar 8 menit 20 detik untuk mencapai Bumi."],
  ["02","Biologi","Tubuh manusia tersusun dari triliunan sel yang bekerja sama membentuk jaringan dan organ."],
  ["03","Teknologi","Internet tidak sama dengan web. Web adalah salah satu layanan yang berjalan di atas internet."],
  ["04","Geografi","Benua dan lempeng tektonik terus bergerak, meskipun pergerakannya sangat lambat."],
  ["05","Matematika","Angka 0 punya peran penting dalam sistem nilai tempat dan perkembangan matematika."],
  ["06","Fisika","Bunyi memerlukan medium untuk merambat, sehingga tidak merambat seperti suara biasa di ruang hampa."]
];

const subjects = ["Fisika","Biologi","Matematika","Sejarah","Geografi","Teknologi","Astronomi"];
let selectedCategory = "Semua";
let quizState = { list: [], index: 0, score: 0, answered: false };

const $ = id => document.getElementById(id);
const uniqueSubjects = [...new Set(materials.map(m => m.subject))];

function saveLearned() {
  return JSON.parse(localStorage.getItem("eduverseLearned") || "[]");
}
function setLearned(id) {
  const list = saveLearned();
  if (!list.includes(id)) list.push(id);
  localStorage.setItem("eduverseLearned", JSON.stringify(list));
  updateStats();
}
function updateStats() {
  $("materialCount").textContent = materials.length;
  $("quizCount").textContent = questions.length;
  $("learnedCount").textContent = saveLearned().length;
}

function renderFilters() {
  $("categoryFilters").innerHTML = ["Semua", ...uniqueSubjects].map(s =>
    `<button class="filter ${s === selectedCategory ? "active" : ""}" data-category="${s}">${s}</button>`
  ).join("");
  document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.category;
      renderFilters();
      renderMaterials();
    });
  });
}

function renderMaterials() {
  const term = $("searchInput").value.trim().toLowerCase();
  const learned = saveLearned();
  const filtered = materials.filter(m => {
    const categoryMatch = selectedCategory === "Semua" || m.subject === selectedCategory;
    const text = `${m.title} ${m.subject} ${m.summary} ${m.sections.map(x => x.join(" ")).join(" ")}`.toLowerCase();
    return categoryMatch && text.includes(term);
  });
  $("materialGrid").innerHTML = filtered.map(m => `
    <article class="material-card">
      <div class="card-icon tone-${m.tone}">${m.icon}</div>
      <span class="eyebrow">${m.subject}</span>
      <h3>${m.title}</h3>
      <p>${m.summary}</p>
      <div class="card-bottom">
        <button data-material="${m.id}">Pelajari →</button>
        ${learned.includes(m.id) ? '<span class="learned">✓ selesai</span>' : ""}
      </div>
    </article>
  `).join("");
  $("emptyState").classList.toggle("hidden", filtered.length !== 0);
  document.querySelectorAll("[data-material]").forEach(btn => {
    btn.addEventListener("click", () => openMaterial(btn.dataset.material));
  });
}

function openMaterial(id) {
  const m = materials.find(x => x.id === id);
  if (!m) return;
  $("modalContent").innerHTML = `
    <span class="eyebrow">${m.icon} ${m.subject}</span>
    <h2>${m.title}</h2>
    <p>${m.summary}</p>
    ${m.sections.map(s => `<h4>${s[0]}</h4><p>${s[1]}</p>`).join("")}
    <button class="btn primary" id="markLearned">Tandai sudah dipelajari ✓</button>
  `;
  $("materialModal").classList.remove("hidden");
  $("markLearned").addEventListener("click", () => {
    setLearned(id);
    renderMaterials();
    $("markLearned").textContent = "Sudah dipelajari ✓";
  });
}
function closeModal() { $("materialModal").classList.add("hidden"); }

function renderFacts() {
  $("factGrid").innerHTML = facts.map(f => `
    <article class="fact-card">
      <span class="fact-number">${f[0]} · ${f[1]}</span>
      <h3>${f[2]}</h3>
      <p>Pengetahuan singkat untuk menambah wawasanmu.</p>
    </article>
  `).join("");
}

function setupQuizSubjects() {
  $("quizSubject").innerHTML = `<option value="all">Semua pelajaran</option>` +
    subjects.map(s => `<option value="${s}">${s}</option>`).join("");
}
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - .5);
}
function startQuiz() {
  const subject = $("quizSubject").value;
  const length = Number($("quizLength").value);
  let pool = subject === "all" ? questions : questions.filter(q => q[0] === subject);
  if (!pool.length) return;
  quizState = { list: shuffle(pool).slice(0, Math.min(length, pool.length)), index: 0, score: 0, answered: false };
  $("quizSetup").classList.add("hidden");
  $("quizResult").classList.add("hidden");
  $("quizPlay").classList.remove("hidden");
  showQuestion();
}
function showQuestion() {
  const q = quizState.list[quizState.index];
  quizState.answered = false;
  $("quizProgress").textContent = `Soal ${quizState.index + 1} dari ${quizState.list.length}`;
  $("quizScore").textContent = `Skor: ${quizState.score}`;
  $("quizProgressBar").style.width = `${(quizState.index / quizState.list.length) * 100}%`;
  $("questionSubject").textContent = q[0];
  $("questionText").textContent = q[1];
  $("answerList").innerHTML = shuffle(q[2].map((text, originalIndex) => ({ text, originalIndex }))).map(a =>
    `<button class="answer" data-answer="${a.originalIndex}">${a.text}</button>`
  ).join("");
  $("nextQuestion").classList.add("hidden");
  document.querySelectorAll(".answer").forEach(btn => btn.addEventListener("click", () => answerQuestion(btn)));
}
function answerQuestion(btn) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.list[quizState.index];
  const chosen = Number(btn.dataset.answer);
  document.querySelectorAll(".answer").forEach(b => {
    b.disabled = true;
    if (Number(b.dataset.answer) === q[4]) b.classList.add("correct");
  });
  if (chosen === q[4]) quizState.score++;
  else btn.classList.add("wrong");
  $("quizScore").textContent = `Skor: ${quizState.score}`;
  $("quizProgressBar").style.width = `${((quizState.index + 1) / quizState.list.length) * 100}%`;
  $("nextQuestion").textContent = quizState.index === quizState.list.length - 1 ? "Lihat hasil →" : "Soal berikutnya →";
  $("nextQuestion").classList.remove(
