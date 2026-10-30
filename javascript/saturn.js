// Each checkbox controls one ring independently of the others.
const saturnRings = [
  { name: "C", checkbox: document.getElementById("toggle-ring-c"), diagram: document.getElementById("saturn-ring-c") },
  { name: "B", checkbox: document.getElementById("toggle-ring-b"), diagram: document.getElementById("saturn-ring-b") },
  { name: "A", checkbox: document.getElementById("toggle-ring-a"), diagram: document.getElementById("saturn-ring-a") }
];
const saturnRingStatus = document.getElementById("saturn-ring-status");

// Update visibility and describe the selected rings in text.
function updateSaturnRings() {
  const visibleRings = [];
  //  Makes sure unchecked rings are hidden and checked ones are shown
  saturnRings.forEach(function (ring) {
    ring.diagram.hidden = !ring.checkbox.checked;
    if (ring.checkbox.checked) {
      visibleRings.push(ring.name);
    }
  });

  if (visibleRings.length === 0) {
    saturnRingStatus.textContent = "All rings hidden. Select a ring to add it back.";
  } else {
    saturnRingStatus.textContent = "Showing " + visibleRings.length +
      " of 3 rings: " + visibleRings.join(", ") + ".";
  }
}

saturnRings.forEach(function (ring) {
  ring.checkbox.addEventListener("change", updateSaturnRings);
});

// Bulk controls update the checkboxes as well as the diagram.
function setAllSaturnRings(visible) {
  saturnRings.forEach(function (ring) {
    ring.checkbox.checked = visible;
  });
  updateSaturnRings();
}

document.getElementById("show-saturn-rings").addEventListener("click", function () {
  setAllSaturnRings(true);
});
document.getElementById("hide-saturn-rings").addEventListener("click", function () {
  setAllSaturnRings(false);
});

// Initialize visibility and status from the starting checkbox values.
updateSaturnRings();
