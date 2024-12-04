// Configuração de imagens do carousel
const images = [
  "./Images/10.jpg",
  "./Images/11.jpg",
  "./Images/12.jpg",
  "./Images/13.jpg",
  "./Images/14.jpg",
  "./Images/15.jpg",
  "./Images/16.jpg",
  "./Images/17.jpg",
  "./Images/18.jpg",
  "./Images/19.jpg",
  "./Images/20.jpg",
  "./Images/21.jpg",
  "./Images/22.jpg"
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

// ========================
// FORMULÁRIO (FORMSPREE)
// ========================
const form = document.getElementById("form");
const msg = document.getElementById("msg");

if (form && msg) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Exibe mensagem de status enquanto envia
    msg.innerHTML = "Enviando sua mensagem...";

    // Captura os dados do formulário
    const formData = new FormData(form);

    try {
      // Envia os dados para o Formspree
      const response = await fetch("https://formspree.io/f/xqaklopa", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      // Verifica o status da resposta
      if (response.ok) {
        msg.innerHTML = "Mensagem enviada com sucesso! Obrigado.";
        form.reset(); // Limpa o formulário após o envio
      } else {
        msg.innerHTML =
          "Ocorreu um erro ao enviar sua mensagem. Tente novamente.";
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      msg.innerHTML =
        "Ocorreu um erro. Verifique sua conexão e tente novamente.";
    }
  });
} else {
  console.warn(
    "Formulário ou elemento de mensagem não encontrado no DOM. Verifique os IDs 'form' e 'msg'."
  );
}

// ========================
// BOTÃO DO WHATSAPP
// ========================
const whatsappButton = document.querySelector(".whatsapp-button");

if (!whatsappButton) {
  console.warn("Elemento com a classe '.whatsapp-button' não foi encontrado.");
}

// ========================
// TÍTULO ANIMADO
// ========================
let titleText = " JTSA Construtora | BREVE LANÇAMENTO - ISABEL | ";

// Função para animar o título
function scrollTitle() {
  // Move o primeiro caractere para o final do texto
  titleText = titleText.substring(1) + titleText.charAt(0);
  // Atualiza o título da aba
  document.title = titleText;
}

// Configura um intervalo para a rolagem (velocidade de 200ms)
setInterval(scrollTitle, 200);
