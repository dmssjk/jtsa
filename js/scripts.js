=
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const msg = document.getElementById("msg");

  if (form && msg) {
   
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); 

    
      msg.innerHTML = "Enviando sua mensagem...";

 
      const formData = new FormData(form);

      try {
        
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
  }

 

  // ========================
  // SEARCH BAR FUNCTIONALITY
  // ========================
  const search = document.getElementById("search");
  const searchBar = document.getElementById("searchBar");

  if (search && searchBar) {
    search.addEventListener("click", () => {
      searchBar.classList.toggle("show");
      searchBar.classList.toggle("hide");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && searchBar.classList.contains("show")) {
        searchBar.classList.toggle("show");
        searchBar.classList.toggle("hide");
      }
    });
  }

  // ========================
  // WHATSAPP BUTTON
  // ========================
  const whatsappButton = document.querySelector(".whatsapp-button");
  if (whatsappButton) {
    window.addEventListener("scroll", () => {
      whatsappButton.style.display = window.scrollY > 100 ? "flex" : "none";
    });
  }

  // ========================
  // MODAL FUNCTIONALITY
  // ========================
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  if (modal && modalImg) {
    window.openModal = function (imageSrc) {
      modalImg.src = imageSrc;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    window.closeModal = function () {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    };
  }

  // ========================
  // CAROUSEL FUNCTIONALITY
  // ========================
  const slides = document.querySelectorAll(".custom-carousel-slide");
  const indicators = document.querySelectorAll(
    ".custom-carousel-indicators button"
  );

  if (slides.length > 0 && indicators.length > 0) {
    let currentIndex = 0;

    const updateCarousel = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentIndex);
      });
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
    };

    const autoPlay = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    };

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    setInterval(autoPlay, 3000);
  }
});


<script>
    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll('.img1');
        
        // Aguarde um pequeno atraso para garantir que as imagens estejam carregadas
        setTimeout(() => {
            images.forEach(image => {
                image.classList.add('fade-in'); // Adiciona a classe para ativar o fade-in
            });
        }, 100); // 100ms de atraso para evitar problemas com o carregamento inicial
    });
</script>
