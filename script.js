const themeButton = document.getElementById("themeButton");
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".knowledge-card");
const noResult = document.getElementById("noResult");

document.getElementById("year").textContent = new Date().getFullYear();

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeButton.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("eduverse-theme", isDark ? "dark" : "light");
});

if (localStorage.getItem("eduverse-theme") === "dark") {
  document.body.classList.add("dark");
  themeButton.textContent = "☀";
}

let selectedCategory = "all";

function updateCards() {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCards = 0;

  cards.forEach((card) => {
    const category = card.dataset.category;
    const keywords = card.dataset.keywords.toLowerCase();
    const title = card.querySelector("h3").textContent.toLowerCase();

    const categoryMatch =
      selectedCategory === "all" || category === selectedCategory;

    const searchMatch =
      query === "" ||
      keywords.includes(query) ||
      title.includes(query);

    const visible = categoryMatch && searchMatch;

    card.classList.toggle("hidden", !visible);

    if (visible) {
      visibleCards++;
    }
  });

  noResult.classList.toggle("hidden", visibleCards !== 0);
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    selectedCategory = filter.dataset.filter;
    updateCards();
  });
});

searchInput.addEventListener("input", updateCards);

const modal = document.getElementById("contentModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

document.querySelectorAll(".learn-button").forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.title;
    modalContent.textContent = button.dataset.content;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalDone").addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
