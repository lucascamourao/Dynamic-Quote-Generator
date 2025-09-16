import { quotes } from "./quotes.js";

// Envolvemos nosso código em um 'ouvinte' que espera a página carregar completamente
document.addEventListener('DOMContentLoaded', () => {

  // A variável 'gsap' existe globalmente porque o script da CDN foi carregado
  console.log("GSAP is loaded?", gsap); 

  // Usando o método .to() do GSAP para animar o elemento
  gsap.to("#animated-box", {
    x: 400, // Mover 400 pixels para a direita (eixo X)
    rotation: 360, // Girar 360 graus
    duration: 2, // Duração da animação em segundos
    delay: 1 // Esperar 1 segundo antes de começar
  });

});
