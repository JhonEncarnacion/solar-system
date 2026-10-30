const destinationSearch = document.getElementById("destination-search");
const destinationCards = document.querySelectorAll(".destination-card");
const destinationStatus = document.getElementById("destination-status");
const clearDestinations = document.getElementById("clear-destinations");

// filterDestinations reads the current search field, shows matching cards, 
// and updates the count.
function filterDestinations() {
  const query = destinationSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  // dataset.search reads its HTML data-search attribute. includes checks
  // for the query anywhere in that string; an empty query matches every card.
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
