// Configuração de imagens do carousel
const images = [
  "./Images/IMG-20241122-WA0001.jpg",
  "./Images/IMG-20241122-WA0002.jpg",
];

// Variáveis globais
let currentIndex = 0;

// Seleciona o container principal do carousel
const carousel = document.getElementById("carousel");

// Função para criar os slides dinamicamente
function createSlides() {
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    if (index === 0) slide.classList.add("active"); // Ativa o primeiro slide
    slide.style.backgroundImage = `url(${image})`;
    carousel.appendChild(slide);
  });
}

// Função para criar os indicadores (bolinhas) dinamicamente
function createIndicators() {
  const indicatorsContainer = document.createElement("div");
  indicatorsContainer.classList.add("carousel-indicators");
  images.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("carousel-indicator");
    if (index === 0) indicator.classList.add("active");
    indicator.dataset.index = index; // Armazena o índice no atributo data
    indicator.addEventListener("click", () => goToSlide(index)); // Adiciona evento de clique
    indicatorsContainer.appendChild(indicator);
  });
  carousel.appendChild(indicatorsContainer);
}

// Função para trocar o slide ativo
function changeSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".carousel-indicator");

  // Remove a classe "active" do slide e do indicador atual
  slides[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");

  // Incrementa o índice (volta ao início se for o último slide)
  currentIndex = (currentIndex + 1) % slides.length;

  // Adiciona a classe "active" ao próximo slide e indicador
  slides[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active");
}

// Função para ir diretamente a um slide específico
function goToSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".carousel-indicator");

  // Remove a classe "active" do slide e do indicador atual
  slides[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");

  // Define o índice como o slide clicado
  currentIndex = index;

  // Adiciona a classe "active" ao slide e indicador escolhidos
  slides[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active");
}

// Função para inicializar o carousel
function initCarousel() {
  createSlides();
  createIndicators();
  setInterval(changeSlide, 2000); // Troca de slide a cada 2 segundos
}

// Inicializa o carousel
initCarousel();
