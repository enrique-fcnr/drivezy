document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Adiciona o atraso de 1 segundo por elemento
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 500); // Incrementa o atraso em 1 segundo por índice
          observer.unobserve(entry.target); // Para de observar depois que o elemento aparece
        }
      });
    },
    { threshold: 0.2 } // Ajusta a porcentagem visível para acionar (20% visível)
  );

  boxes.forEach((box) => {
    // Inicia com estilos invisíveis
    box.style.opacity = "0";
    box.style.transform = "translateY(20px)";
    observer.observe(box);
  });
});

