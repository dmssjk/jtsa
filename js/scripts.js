// ========================
// VALIDATE USER EMAIL
// ========================
// Seleciona o formulário e o local para mensagens
const form = document.getElementById("form");
const msg = document.getElementById("msg");

// Seleciona todos os elementos dentro do main-container
const fadeElements = document.querySelectorAll('.main-container .fade-in');

// Função para verificar se o elemento está na viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Adiciona a classe 'show' com atraso crescente
function fadeInElementsInSequence() {
  let delay = 0; // Inicializa o atraso
  fadeElements.forEach((el) => {
    if (isElementInViewport(el)) {
      setTimeout(() => {
        el.classList.add('show'); // Adiciona a classe com delay
      }, delay);
      delay += 300; // Incrementa o atraso para o próximo item (300ms)
    }
  });
}

// Escuta o evento de scroll
window.addEventListener('scroll', fadeInElementsInSequence);

// Verifica ao carregar a página
fadeInElementsInSequence();


// Adiciona o evento "submit" ao formulário
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
    msg.innerHTML = "Ocorreu um erro. Verifique sua conexão e tente novamente.";
  }
});

// ========================
// SEARCH BAR FUNCTIONALITY
// ========================
const search = document.getElementById("search");
const searchBar = document.getElementById("searchBar");

// Abrir e fechar barra de pesquisa ao clicar no ícone
search.addEventListener("click", () => {
  searchBar.classList.toggle("show");
  searchBar.classList.toggle("hide");
});

// Fechar barra de pesquisa ao pressionar "Escape"
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && searchBar.classList.contains("show")) {
    searchBar.classList.toggle("show");
    searchBar.classList.toggle("hide");
  }
});

// ========================
// WHATSAPP BUTTON
// ========================
window.onscroll = function () {
  const whatsappButton = document.querySelector(".whatsapp-button");
  whatsappButton.style.display = window.scrollY > 100 ? "flex" : "none";
};

// ========================
// MODAL FUNCTIONALITY
// ========================

// Abrir modal sem alterar a posição da página
function openModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  // Define a imagem no modal
  modalImg.src = imageSrc;

  // Exibe o modal
  modal.classList.add("active");

  // Desativa o scroll do corpo, mas mantém a posição atual
  document.body.style.overflow = "hidden";
}

// Fechar modal e restaurar o scroll
function closeModal() {
  const modal = document.getElementById("image-modal");

  // Esconde o modal
  modal.classList.remove("active");

  // Restaura o scroll
  document.body.style.overflow = "auto";
}

// ========================
// DEBUGGING HELPER (Opcional)
// ========================
document.addEventListener("keydown", (event) => {
  console.log(`Tecla pressionada: ${event.key}`);
});
