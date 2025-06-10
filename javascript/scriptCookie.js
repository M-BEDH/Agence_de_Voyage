   // Affichele bandeau cookie automatiquement après un délais automatique après 2 secondes (2000ms)
window.onload = function() {
  setTimeout(function() {
  document.getElementById('cookies').classList.add('active');  
  }, 0);
};

// Fermele bandeau cookie au clic sur la croixAdd commentMore actions
document.getElementById('closeBtn').onclick = function() {
  document.getElementById('cookies').classList.remove('active');
};

// Fermele bandeau cookie au clic sur le bouton "Accepter"
document.getElementById('acceptBtn').onclick = function() {
  document.getElementById('cookies').classList.remove('active');
};

// Fermele bandeau cookie au clic sur le bouton "Refuser"
document.getElementById('rejectBtn').onclick = function() {
  document.getElementById('cookies').classList.remove('active');
};