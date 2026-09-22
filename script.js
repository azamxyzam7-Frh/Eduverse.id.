/* =========================================================
   EDUVERSE-ID - JAVASCRIPT
   ========================================================= */

let selectedCategory = "Semua";

let quizState = {
  list: [],
  index: 0,
  score: 0,
  answered: false
};

/* ---------- HELPER ---------- */

const $ = (id) => document.getElementById(id);

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

/* ---------- LOCAL STORAGE ---------- */

function getLearned() {
  try {
    return JSON.parse(
      localStorage.getItem("eduverseLearned") || "[]"
    );
  } catch {
    return [];
  }
}

function saveLearned(id) {
  const learned = getLearned();

  if (!learned.includes(id)) {
    learned.push(id);
  }

  localStorage.setItem(
    "eduverseLearned",
    JSON.stringify(learned)
  );

  updateStats();
}

function getQuizCount() {
  return Number(
    localStorage.getItem("eduverseQuizCount") || "0"
  );
}

function saveQuizCount() {
  const count = getQuizCount() + 1;

  localStorage.setItem(
    "eduverseQuizCount",
    count
  );

  updateStats();
}

/* ---------- STATISTIK ---------- */

function updateStats() {
  if ($("materialCount")) {
    $("materialCount").textContent = materials.length;
  }

  if ($("quizCount")) {
    $("quizCount").textContent = getQuizCount();
  }

  if ($("learnedCount")) {
    $("learnedCount").textContent = getLearned().length;
  }

  updateProgress();
}

function updateProgress() {
  const total = materials.length;
  const learned = getLearned().length;

  const percent =
    total > 0
      ? Math.round((learned / total) * 100)
      : 0;

  if ($("progressPercent")) {
    $("progressPercent").textContent =
      `${percent}%`;
  }

  if ($("progressBar")) {
    $("progressBar").style.width =
      `${percent}%`;
  }

  if ($("learningProgress")) {
    $("learningProgress").textContent =
      `${learned} / ${total}`;
  }
}

/* ---------- FILTER MATERI ---------- */

function getSubjects() {
  return [
    "Semua",
    ...new Set(
      materials.map((material) => material.subject)
    )
  ];
}

function renderFilters() {
  const container = $("categoryFilters");

  if (!container) return;

  container.innerHTML = getSubjects()
    .map((subject) => `
      <button
        class="filter ${
          subject === selectedCategory
            ? "active"
            : ""
        }"
        data-category="${subject}">
        ${subject}
      </button>
    `)
    .join("");

  container
    .querySelectorAll("[data-category]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        selectedCategory =
          button.dataset.category;

        renderFilters();
        renderMaterials();
      });
    });
}

/* ---------- MATERI ---------- */

function renderMaterials() {
  const grid = $("materialGrid");

  if (!grid) return;

  const search =
    $("searchInput")?.value
      ?.trim()
      .toLowerCase() || "";

  const learned = getLearned();

  const filtered = materials.filter((material) => {

    const categoryMatch =
      selectedCategory === "Semua" ||
      material.subject === selectedCategory;

    const searchableText = `
      ${material.title}
      ${material.subject}
      ${material.summary}
      ${material.sections
        .map((section) => section.join(" "))
        .join(" ")}
    `.toLowerCase();

    return (
      categoryMatch &&
      searchableText.includes(search)
    );
  });

  grid.innerHTML = filtered
    .map((material) => `
      <article class="material-card">

        <div class="card-icon tone-${material.tone}">
          ${material.icon}
        </div>

        <span class="eyebrow">
          ${material.subject}
        </span>

        <h3>
          ${material.title}
        </h3>

        <p>
          ${material.summary}
        </p>

        <div class="card-bottom">

          <button
            type="button"
            class="learn-button"
            data-material="${material.id}">
            Pelajari →
          </button>

          ${
            learned.includes(material.id)
              ? `<span class="learned">
                   ✓ selesai
                 </span>`
              : ""
          }

        </div>

      </article>
    `)
    .join("");

  if ($("emptyState")) {
    $("emptyState").classList.toggle(
      "hidden",
      filtered.length !== 0
    );
  }

  grid
    .querySelectorAll("[data-material]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        openMaterial(
          button.dataset.material
        );
      });
    });
}

/* ---------- DETAIL MATERI ---------- */

function openMaterial(id) {
  const material =
    materials.find(
      (item) => item.id === id
    );

  if (!material) return;

  const modalContent =
    $("modalContent");

  if (!modalContent) return;

  const learned =
    getLearned().includes(id);

  modalContent.innerHTML = `
    <span class="eyebrow">
      ${material.icon}
      ${material.subject}
    </span>

    <h2>
      ${material.title}
    </h2>

    <p>
      ${material.summary}
    </p>

    <div class="material-detail">

      ${material.sections
        .map(
          (section) => `
            <section>
              <h4>${section[0]}</h4>
              <p>${section[1]}</p>
            </section>
          `
        )
        .join("")}

    </div>

    <button
      type="button"
      class="btn primary"
      id="markLearned">

      ${
        learned
          ? "Sudah dipelajari ✓"
          : "Tandai sudah dipelajari ✓"
      }

    </button>
  `;

  $("materialModal")?.classList.remove(
    "hidden"
  );

  $("markLearned")?.addEventListener(
    "click",
    () => {
      saveLearned(id);

      renderMaterials();

      $("markLearned").textContent =
        "Sudah dipelajari ✓";
    }
  );
}

function closeModal() {
  $("materialModal")?.classList.add(
    "hidden"
  );
}

/* ---------- FAKTA ---------- */

function renderFacts() {
  const container = $("factGrid");

  if (!container) return;

  container.innerHTML = facts
    .map(
      (fact) => `
        <article class="fact-card">

          <span class="fact-number">
            ${fact[0]} · ${fact[1]}
          </span>

          <h3>
            ${fact[2]}
          </h3>

          <p>
            Pengetahuan singkat
            untuk menambah wawasanmu.
          </p>

        </article>
      `
    )
    .join("");
}

/* ---------- QUIZ ---------- */

function setupQuizSubjects() {
  const select = $("quizSubject");

  if (!select) return;

  select.innerHTML = `
    <option value="all">
      Semua pelajaran
    </option>
  `;

  const subjectList = [
    ...new Set(
      questions.map(
        (question) => question[0]
      )
    )
  ];

  subjectList.forEach((subject) => {
    const option =
      document.createElement("option");

    option.value = subject;
    option.textContent = subject;

    select.appendChild(option);
  });
}

/* ---------- MULAI QUIZ ---------- */

function startQuiz() {
  const subject =
    $("quizSubject")?.value || "all";

  const length =
    Number(
      $("quizLength")?.value || 10
    );

  let pool =
    subject === "all"
      ? questions
      : questions.filter(
          (question) =>
            question[0] === subject
        );

  if (!pool.length) {
    alert(
      "Belum ada soal untuk pelajaran ini."
    );
    return;
  }

  const selectedQuestions =
    shuffle(pool).slice(
      0,
      Math.min(length, pool.length)
    );

  quizState = {
    list: selectedQuestions,
    index: 0,
    score: 0,
    answered: false
  };

  $("quizSetup")?.classList.add(
    "hidden"
  );

  $("quizResult")?.classList.add(
    "hidden"
  );

  $("quizPlay")?.classList.remove(
    "hidden"
  );

  showQuestion();
}

/* ---------- TAMPILKAN SOAL ---------- */

function showQuestion() {
  const question =
    quizState.list[
      quizState.index
    ];

  if (!question) return;

  quizState.answered = false;

  if ($("quizProgress")) {
    $("quizProgress").textContent =
      `Soal ${quizState.index + 1} dari ${quizState.list.length}`;
  }

  if ($("quizScore")) {
    $("quizScore").textContent =
      `Skor: ${quizState.score}`;
  }

  if ($("questionSubject")) {
    $("questionSubject").textContent =
      question[0];
  }

  if ($("questionText")) {
    $("questionText").textContent =
      question[1];
  }

  if ($("quizProgressBar")) {
    const progress =
      (quizState.index /
        quizState.list.length) *
      100;

    $("quizProgressBar").style.width =
      `${progress}%`;
  }

  const answerList =
    $("answerList");

  if (!answerList) return;

  const answers = shuffle(
    question[2].map(
      (text, originalIndex) => ({
        text,
        originalIndex
      })
    )
  );

  answerList.innerHTML =
    answers
      .map(
        (answer) => `
          <button
            type="button"
            class="answer"
            data-answer="${answer.originalIndex}">
            ${answer.text}
          </button>
        `
      )
      .join("");

  answerList
    .querySelectorAll(".answer")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => answerQuestion(button)
      );
    });

  $("nextQuestion")?.classList.add(
    "hidden"
  );
}

/* ---------- JAWAB SOAL ---------- */

function answerQuestion(button) {
  if (quizState.answered) return;

  quizState.answered = true;

  const question =
    quizState.list[
      quizState.index
    ];

  const chosen =
    Number(button.dataset.answer);

  const correctAnswer =
    question[4];

  document
    .querySelectorAll(".answer")
    .forEach((answerButton) => {

      answerButton.disabled = true;

      const answerIndex =
        Number(
          answerButton.dataset.answer
        );

      if (
        answerIndex ===
        correctAnswer
      ) {
        answerButton.classList.add(
          "correct"
        );
      }
    });

  if (chosen === correctAnswer) {
    quizState.score++;

    button.classList.add(
      "correct"
    );
  } else {
    button.classList.add(
      "wrong"
    );
  }

  if ($("quizScore")) {
    $("quizScore").textContent =
      `Skor: ${quizState.score}`;
  }

  if ($("quizProgressBar")) {
    const progress =
      ((quizState.index + 1) /
        quizState.list.length) *
      100;

    $("quizProgressBar").style.width =
      `${progress}%`;
  }

  const nextButton =
    $("nextQuestion");

  if (!nextButton) return;

  nextButton.textContent =
    quizState.index ===
    quizState.list.length - 1
      ? "Lihat hasil →"
      : "Soal berikutnya →";

  nextButton.classList.remove(
    "hidden"
  );
}

/* ---------- SOAL BERIKUTNYA ---------- */

function nextQuestion() {
  if (!quizState.answered) return;

  const lastQuestion =
    quizState.index >=
    quizState.list.length - 1;

  if (lastQuestion) {
    showQuizResult();
    return;
  }

  quizState.index++;

  showQuestion();
}

/* ---------- HASIL QUIZ ---------- */

function showQuizResult() {
  saveQuizCount();

  $("quizPlay")?.classList.add(
    "hidden"
  );

  $("quizResult")?.classList.remove(
    "hidden"
  );

  const total =
    quizState.list.length;

  const score =
    quizState.score;

  const percentage =
    total > 0
      ? Math.round(
          (score / total) * 100
        )
      : 0;

  if ($("resultTitle")) {
    $("resultTitle").textContent =
      "Quiz selesai!";
  }

  if ($("resultScore")) {
    $("resultScore").textContent =
      `${score} / ${total}`;
  }

  if ($("resultMessage")) {
    $("resultMessage").textContent =
      `Nilai kamu ${percentage}%.`;
  }
}

/* ---------- ULANG QUIZ ---------- */

function restartQuiz() {
  $("quizResult")?.classList.add(
    "hidden"
  );

  $("quizPlay")?.classList.add(
    "hidden"
  );

  $("quizSetup")?.classList.remove(
    "hidden"
  );
}

/* ---------- DARK MODE ---------- */

function setupTheme() {
  const savedTheme =
    localStorage.getItem(
      "eduverseTheme"
    );

  if (
    savedTheme === "dark"
  ) {
    document.body.classList.add(
      "dark"
    );
  }

  updateThemeIcon();
}

function toggleTheme() {
  document.body.classList.toggle(
    "dark"
  );

  const isDark =
    document.body.classList.contains(
      "dark"
    );

  localStorage.setItem(
    "eduverseTheme",
    isDark ? "dark" : "light"
  );

  updateThemeIcon();
}

function updateThemeIcon() {
  const button =
    $("themeToggle");

  if (!button) return;

  const isDark =
    document.body.classList.contains(
      "dark"
    );

  button.textContent =
    isDark ? "☀️" : "🌙";
}

/* ---------- MENU MOBILE ---------- */

function setupMobileMenu() {
  const menuButton =
    $("menuToggle");

  const menu =
    $("mobileMenu") ||
    $("navMenu");

  if (!menuButton || !menu) return;

  menuButton.addEventListener(
    "click",
    () => {
      menu.classList.toggle(
        "open"
      );

      menuButton.classList.toggle(
        "active"
      );
    }
  );
}

/* ---------- SEARCH ---------- */

function setupSearch() {
  const input =
    $("searchInput");

  if (!input) return;

  input.addEventListener(
    "input",
    renderMaterials
  );
}

/* ---------- MODAL ---------- */

function setupModal() {
  const modal =
    $("materialModal");

  if (!modal) return;

  modal.addEventListener(
    "click",
    (event) => {
      if (
        event.target === modal
      ) {
        closeModal();
      }
    }
  );

  document
    .querySelectorAll(
      "[data-close-modal]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        closeModal
      );
    });
}

/* ---------- NAVIGASI ---------- */

function setupNavigation() {
  document
    .querySelectorAll(
      "[data-scroll]"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const target =
            button.dataset.scroll;

          const element =
            document.getElementById(
              target
            );

          if (element) {
            element.scrollIntoView({
              behavior: "smooth"
            });
          }
        }
      );
    });
}

/* ---------- TOMBOL UMUM ---------- */

function setupButtons() {

  $("startQuiz")?.addEventListener(
    "click",
    startQuiz
  );

  $("startQuizButton")?.addEventListener(
    "click",
    () => {
      $("quizSetup")?.scrollIntoView({
        behavior: "smooth"
      });
    }
  );

  $("nextQuestion")?.addEventListener(
    "click",
    nextQuestion
  );

  $("restartQuiz")?.addEventListener(
    "click",
    restartQuiz
  );

  $("retryQuiz")?.addEventListener(
    "click",
    startQuiz
  );

  $("themeToggle")?.addEventListener(
    "click",
    toggleTheme
  );

  $("closeModal")?.addEventListener(
    "click",
    closeModal
  );

  $("modalClose")?.addEventListener(
    "click",
    closeModal
  );
}

/* ---------- TOMBOL HERO ---------- */

function setupHeroButtons() {

  const learningButtons =
    document.querySelectorAll(
      ".start-learning, [data-start-learning]"
    );

  learningButtons.forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {

          const target =
            $("materials") ||
            $("explore") ||
            $("materialGrid");

          if (target) {
            target.scrollIntoView({
              behavior: "smooth"
            });
          }
        }
      );
    }
  );

  const quizButtons =
    document.querySelectorAll(
      ".start-quiz, [data-start-quiz]"
    );

  quizButtons.forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {

          const target =
            $("quiz") ||
            $("quizSetup");

          if (target) {
            target.scrollIntoView({
              behavior: "smooth"
            });
          }
        }
      );
    }
  );
}

/* ---------- INISIALISASI ---------- */

function initEduverse() {

  renderFilters();
  renderMaterials();
  renderFacts();

  setupQuizSubjects();

  setupTheme();
  setupMobileMenu();
  setupSearch();
  setupModal();
  setupNavigation();
  setupButtons();
  setupHeroButtons();

  updateStats();
  updateProgress();

  console.log(
    "Eduverse-ID berhasil dimuat."
  );
}

/* ---------- JALANKAN ---------- */

if (
  document.readyState === "loading"
) {
  document.addEventListener(
    "DOMContentLoaded",
    initEduverse
  );
} else {
  initEduverse();
}
