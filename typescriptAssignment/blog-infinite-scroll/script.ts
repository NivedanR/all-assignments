interface Article {
  title: string;
  content: string;
}

const articles: Article[] = Array.from({ length: 15 }, (_, i) => ({
  title: `Article ${i + 1}`,
  content: `This is the content of blog article number ${i + 1}. It contains insights and tips about TypeScript and web development.`
}));

const container = document.getElementById("articles-container")!;
const loader = document.getElementById("loader")!;

let currentIndex = 0;
const batchSize = 5;
let isLoading = false;

function renderArticles() {
  const nextArticles = articles.slice(currentIndex, currentIndex + batchSize);

  nextArticles.forEach((article) => {
    const div = document.createElement("div");
    div.classList.add("article");
    div.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
    container.appendChild(div);
  });

  currentIndex += batchSize;
  if (currentIndex >= articles.length) {
    window.removeEventListener("scroll", handleScroll);
    loader.style.display = "none";
  }
}

function handleScroll() {
  const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (nearBottom && !isLoading) {
    isLoading = true;
    loader.style.display = "block";

    setTimeout(() => {
      renderArticles();
      loader.style.display = "none";
      isLoading = false;
    }, 1000);
  }
}

window.addEventListener("scroll", handleScroll);

renderArticles();
