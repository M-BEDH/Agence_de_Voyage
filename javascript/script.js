
    // Affiche la pop-up automatiquement après un délais automatique après 2 secondes (2000ms)
window.onload = function() {
  setTimeout(function() {
  document.getElementById('popup').classList.add('active');  
  }, 2000);
};

// Ferme la pop-up au clic sur la croix
document.getElementById('closeBtn').onclick = function() {
  document.getElementById('popup').classList.remove('active');
};
 

  