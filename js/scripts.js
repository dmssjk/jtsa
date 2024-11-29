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
    console.warn("Elemento com a classe '.whatsapp-button' não foi encontrado.");
  }
});
