
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
 
    // Affiche la pop-up automatiquement après un délais automatique après 2 secondes (2000ms)
window.onload = function() {
  setTimeout(function() {
  document.getElementById('cookies').classList.add('active');  
  }, 0);
};

// Ferme la pop-up au clic sur la croix
document.getElementById('closeBtn').onclick = function() {
  document.getElementById('cookies').classList.remove('active');
};

// Ferme la pop-up au clic sur le bouton "Accepter"
document.getElementById('acceptBtn').onclick = function() {
  document.getElementById('cookies').classList.remove('active');
};

// Ferme la pop-up au clic sur le bouton "Refuser"
document.getElementById('rejectBtn').onclick = function() {
  document.getElementById('cookies').classList.remove('active');
};
  