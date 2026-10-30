// Connect the calculator controls and the two parts of its result card.
const marsWeightForm = document.getElementById("mars-weight-form");
const marsEarthWeight = document.getElementById("mars-earth-weight");
const marsWeightUnit = document.getElementById("mars-weight-unit");
const marsResultValue = document.getElementById("mars-result-value");
const marsResultDetail = document.getElementById("mars-result-detail");
const marsGravityRatio = 0.38;

// Calculate without refreshing or navigating away from the page.
marsWeightForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const earthReading = marsEarthWeight.valueAsNumber;

  // Check if the Earth weight value is in range
  if (!Number.isFinite(earthReading) || earthReading < 0.1 || earthReading > 1000000) {
    marsResultValue.textContent = "—";
    marsResultDetail.textContent = "Enter a number between 0.1 and 1,000,000.";
    return;
  }

  const marsReading = earthReading * marsGravityRatio;
  marsResultValue.textContent = marsReading.toFixed(1) + " " + marsWeightUnit.value;
  marsResultDetail.textContent = "About 62% lighter; your mass stays the same.";
});

// Clear a stale result whenever the input or units change.
function clearMarsResult() {
  marsResultValue.textContent = "—";
  marsResultDetail.textContent = "Select Calculate to see your result.";
}

marsEarthWeight.addEventListener("input", clearMarsResult);
marsWeightUnit.addEventListener("change", clearMarsResult);

// The browser resets the fields; JavaScript restores the empty result card.
marsWeightForm.addEventListener("reset", function () {
  marsResultValue.textContent = "—";
  marsResultDetail.textContent = "Enter your Earth weight to get started.";
});
