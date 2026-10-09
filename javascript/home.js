// Search the guide using each card's name and descriptive keywords.
const destinationSearch = document.getElementById("destination-search");
const destinationCards = document.querySelectorAll(".destination-card");
const destinationStatus = document.getElementById("destination-status");
const clearDestinations = document.getElementById("clear-destinations");

function filterDestinations() {
  const query = destinationSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  destinationCards.forEach(function (card) {
    const matches = card.dataset.search.includes(query);
    card.hidden = !matches;
    if (matches) {
      visibleCount = visibleCount + 1;
    }
  });

  // Explain empty results instead of leaving a blank section.
  if (visibleCount === 0) {
    destinationStatus.textContent = "No destinations found. Try a name or another keyword.";
  } else if (query === "") {
    destinationStatus.textContent = "Showing all " + destinationCards.length + " destinations.";
  } else {
    destinationStatus.textContent = visibleCount + (visibleCount === 1 ? " destination found." : " destinations found.");
  }
}

destinationSearch.addEventListener("input", filterDestinations);
clearDestinations.addEventListener("click", function () {
  destinationSearch.value = "";
  filterDestinations();
  destinationSearch.focus();
});
filterDestinations();
