// Add entry animation effects
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.style.transform = "scale(0.8)";
    container.style.opacity = "0";
  
    setTimeout(() => {
      container.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
      container.style.transform = "scale(1)";
      container.style.opacity = "1";
    }, 100); // Start the animation slightly delayed for a smooth effect
  });
  