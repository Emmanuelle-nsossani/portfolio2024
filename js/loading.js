document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const percentage = document.getElementById("percentage");
    const mainContent = document.getElementById("main-content");
  
    let progress = 0;
  
    const loadingInterval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(loadingInterval);
        loadingScreen.style.transform = "translateY(-100%)"; // Fait glisser la page vers le haut
        setTimeout(() => {
          loadingScreen.style.display = "none"; // Masque l'écran de chargement
          mainContent.style.display = "block"; // Affiche le contenu principal
        }, 1000); // Attends que l'animation soit terminée
      } else {
        progress++;
        percentage.textContent = `${progress}%`;
      }
    }, 30); // Vitesse de progression (ajuste si nécessaire)
  });
  