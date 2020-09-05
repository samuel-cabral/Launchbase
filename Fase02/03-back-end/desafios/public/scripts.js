const cards = document.querySelectorAll(".card");

for (let card of cards) {
  const courseId = card.getAttribute("id")
  card.addEventListener("click", function () {
    window.location.href = `courses/${courseId}`;
  });
}
