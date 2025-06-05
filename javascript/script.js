
    // Affiche la pop-up automatiquement au chargement de la page
window.onload = function() {
  document.getElementById('popup').classList.add('active');
};

// Ferme la pop-up au clic sur la croix
document.getElementById('closeBtn').onclick = function() {
  document.getElementById('popup').classList.remove('active');
};
 