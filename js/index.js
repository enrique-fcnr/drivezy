document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Para de observar depois que o elemento aparece
        }
      });
    },
    { threshold: 0.2 } // Ajusta a porcentagem visível para acionar (10% visível)
  );

  boxes.forEach((box) => observer.observe(box));
});
