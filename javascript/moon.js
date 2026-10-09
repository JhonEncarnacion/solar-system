// The eight moon phases in order.
const phases = [
  {
    name: "New Moon",
    symbol: "🌑",
    description:
      "The sunlit half faces away from Earth, so the Moon is usually not visible.",
  },
  {
    name: "Waxing Crescent",
    symbol: "🌒",
    description:
      "A small crescent is illuminated. The visible sunlit portion grows each day.",
  },
  {
    name: "First Quarter",
    symbol: "🌓",
    description:
      "Half of the visible lunar disk is illuminated. The Moon is about a quarter of the way through its phase cycle.",
  },
  {
    name: "Waxing Gibbous",
    symbol: "🌔",
    description:
      "More than half of the visible lunar disk is illuminated. The sunlit portion continues growing toward a full moon.",
  },
  {
    name: "Full Moon",
    symbol: "🌕",
    description:
      "The sunlit half faces Earth, making the Moon appear fully illuminated.",
  },
  {
    name: "Waning Gibbous",
    symbol: "🌖",
    description:
      "More than half of the visible lunar disk is illuminated, but the sunlit portion is now shrinking.",
  },
  {
    name: "Third Quarter",
    symbol: "🌗",
    description:
      "Half of the visible lunar disk is illuminated. The Moon is about three-quarters of the way through its phase cycle.",
  },
  {
    name: "Waning Crescent",
    symbol: "🌘",
    description:
      "Only a small crescent remains illuminated as the Moon approaches the next new moon.",
  },
];

// Cache the display elements that change when a phase is selected.
const phaseSymbol = document.getElementById("phase-symbol");
const phaseName = document.getElementById("phase-name");
const phaseDescription = document.getElementById("phase-description");
const phaseCounter = document.getElementById("phase-counter");

const previousButton = document.getElementById("previous-phase");
const nextButton = document.getElementById("next-phase");

// Array positions start at zero; the visitor sees phase numbers starting at one.
let currentPhase = 0;

// Update the symbol, name, explanation, and counter together.
function displayPhase() {
  phaseSymbol.textContent = phases[currentPhase].symbol;
  phaseName.textContent = phases[currentPhase].name;
  phaseDescription.textContent = phases[currentPhase].description;

  phaseCounter.textContent =
    "Phase " + (currentPhase + 1) + " of " + phases.length;
}

// Move forward and wrap back to New Moon after Waning Crescent.
nextButton.addEventListener("click", function () {
  currentPhase = currentPhase + 1;

  if (currentPhase >= phases.length) {
    currentPhase = 0;
  }

  displayPhase();
});

// Move backward and wrap to Waning Crescent before New Moon.
previousButton.addEventListener("click", function () {
  currentPhase = currentPhase - 1;

  if (currentPhase < 0) {
    currentPhase = phases.length - 1;
  }

  displayPhase();
});

// Show the first phase when the page loads.
displayPhase();
