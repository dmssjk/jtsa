document.addEventListener("DOMContentLoaded", () => {
  // ========================
  // CAROUSEL AUTOMÁTICO
  // ========================
  const slides = document.querySelectorAll(".unique-carousel-slide");
  let currentIndex = 0;

  const updateSlides = () => {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add("active");
        slide.classList.remove("inactive");
      } else {
        slide.classList.remove("active");
        slide.classList.add("inactive");
      }
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  };

  // Inicializar o carousel
  updateSlides();
  setInterval(nextSlide, 2000); // Troca a cada 2 segundos

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
  // BOTÃO DO WHATSAPP SEM SCROLL
  // ========================
  const whatsappButton = document.querySelector(".whatsapp-button");

  if (!whatsappButton) {
    console.warn(
      "Elemento com a classe '.whatsapp-button' não foi encontrado."
    );
  }
});
// Texto inicial que será rolado
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

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Seleciona os elementos do carousel
const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;
const delay = 3000; // Tempo de cada imagem (3 segundos)

// Função para atualizar as classes de destaque
function updateCarousel() {
  // Remove a classe "active" de todas as imagens
  items.forEach((item, index) => {
    item.classList.remove("active");
    item.style.zIndex = 5; // Define todas as imagens em segundo plano
  });

  // Define a nova imagem principal
  const activeItem = items[currentIndex];
  activeItem.classList.add("active");
  activeItem.style.zIndex = 10;

  // Move a faixa do carousel
  const offset =
    -(activeItem.offsetWidth + 20) * currentIndex +
    (track.offsetWidth / 2 - activeItem.offsetWidth / 2);
  track.style.transform = `translateX(${offset}px)`;

  // Atualiza o índice para a próxima imagem
  currentIndex = (currentIndex + 1) % items.length;
}

// Configura o carousel para alternar automaticamente
setInterval(updateCarousel, delay);

// Atualiza a primeira imagem ao carregar
updateCarousel();
