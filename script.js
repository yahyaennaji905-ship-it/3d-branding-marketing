document.addEventListener("DOMContentLoaded", () => {
  const heroVisual = document.querySelector(".hero-visual");

  if (heroVisual) {
    heroVisual.addEventListener("mousemove", (event) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const cube = heroVisual.querySelector(".cube-card");
      if (cube) {
        cube.style.transform = `rotate(${(x - 0.5) * 18 - 12}deg) translateY(${(y - 0.5) * 12 + 10}px)`;
      }
    });

    heroVisual.addEventListener("mouseleave", () => {
      const cube = heroVisual.querySelector(".cube-card");
      if (cube) {
        cube.style.transform = "rotate(-12deg) translateY(10px)";
      }
    });
  }
});
