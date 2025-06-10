
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
 
    // Affiche le bandeau de cookies automatiquement après un délais automatique après 0 secondes (0ms)
window.onload = function() {
  setTimeout(function() {
  document.getElementById('cookies').classList.add('active');  
  }, 0);
};


// Ferme le bandeau de cookies au clic sur la croix
document.getElementById('close').onclick = function() {
  document.getElementById('cookies').classList.remove('active');
};

// Ferme le bandeau de cookies au clic sur le bouton "Fermer"
document.getElementById('acceptBtn').onclick = function() {
  document.getElementById('cookies').classList.remove('active');
};

// Ferme le bandeau de cookies au clic sur le bouton "Refuser"
document.getElementById('rejectBtn').onclick = function() {
  document.getElementById('cookies').classList.remove('active');
};
  