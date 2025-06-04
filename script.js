  const correctPassword = "G6D9";

  function checkPassword(event) {
    event.preventDefault();
    document.getElementById("passwordModal").style.display = "block";
    document.getElementById("passwordInput").value = "";
    document.getElementById("errorMsg").style.display = "none";
  }

  function closeModal() {
    document.getElementById("passwordModal").style.display = "none";
  }

  function submitPassword() {
    const input = document.getElementById("passwordInput").value.trim();

    if (input === correctPassword) {
      window.location.href = "dedica.html";
    } else {
      document.getElementById("errorMsg").style.display = "block";
    }
  }

  // Chiudi con ESC o clic fuori
  window.onclick = function(event) {
    const modal = document.getElementById("passwordModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}



