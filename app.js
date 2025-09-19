import { quotes } from "./quotes.js";

document.addEventListener("DOMContentLoaded", () => {
  const quoteButton = document.getElementById("quote-button-id");
  const quoteText = document.getElementById("quote-text");
  const animatedBox = document.getElementById("animated-box");

  if (!quoteButton || !quoteText) {
    console.error("Elemento #quote-button-id ou #quote-text não encontrado.");
    return;
  }

  // Simula fetch assíncrono
  function fetchQuote() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const idx = Math.floor(Math.random() * quotes.length);
        resolve(quotes[idx]);
      }, 1000 + Math.random() * 1000);
    });
  }

  // animação inicial do box (se gsap estiver disponível)
  if (window.gsap) {
    gsap.to("#animated-box", {
      x: 200,
      rotation: 360,
      duration: 2,
      delay: 0.8,
      ease: "power2.out"
    });
  } else {
    console.warn("GSAP não detectado.");
  }

  quoteButton.addEventListener("click", async () => {
    quoteButton.disabled = true;
    // Feedback rápido (se Toastify estiver presente)
    if (window.Toastify) {
      Toastify({
        text: "Fetching new quote...",
        duration: 1400,
        close: true,
        gravity: "top",
        position: "right",
        style: { background: "#333" }
      }).showToast();
    } else {
      console.info("Toastify não detectado — prossigo sem toast.");
    }

    try {
      const newQuote = await fetchQuote();

      // animação: fade out -> troca texto -> fade in
      gsap.to(quoteText, {
        opacity: 0,
        y: -8,
        duration: 0.2,
        onComplete: () => {
          quoteText.textContent = newQuote;

          gsap.fromTo(
            quoteText,
            { opacity: 0, y: 8 },
            {
              opacity: 1,
              y: 0,
              duration: 0.36,
              ease: "power2.out",
              onComplete: () => {
                quoteButton.disabled = false;
              }
            }
          );
        }
      });
    } catch (err) {
      console.error("Erro ao buscar frase:", err);
      if (window.Toastify) {
        Toastify({
          text: "Erro ao buscar quote",
          duration: 3000,
          gravity: "top",
          position: "right",
          style: { background: "linear-gradient(to right,#d9534f, #ff7b7b)" }
        }).showToast();
      }
      quoteButton.disabled = false;
    }
  });
});
