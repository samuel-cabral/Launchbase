const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  const cardId = card.getAttribute("id")
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active");
    
    if (modal.classList.contains("maximize")) {
      modal.classList.remove("maximize")      
    }

    // selecionar o curso pelo id da DOM
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cardId}`

  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = ""
});

document.querySelector(".modal").addEventListener("click", function () {
  modal.classList.contains("maximize");
  modal.classList.toggle("maximize");
});
