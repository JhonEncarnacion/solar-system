// Fahrenheit controls the slider and main reading; Celsius is a secondary display.
const heatSlider = document.getElementById("heat-slider");
const heatFill = document.getElementById("heat-fill");
const heatReading = document.getElementById("heat-reading");
const heatCelsius = document.getElementById("heat-celsius");
const heatExplanation = document.getElementById("heat-explanation");
const venusTemperature = 867; // Rounded average surface temperature in Fahrenheit.

// Keep the thermometer, readings, and accessible slider value synchronized.
function updateHeat() {
  const fahrenheit = Number(heatSlider.value);
  const celsius = Math.round((fahrenheit - 32) * 5 / 9);

  // Normalize to the visible scale: 32 degrees at the bottom, 1,000 at the top.
  const fraction = (fahrenheit - Number(heatSlider.min)) /
    (Number(heatSlider.max) - Number(heatSlider.min));
  heatFill.style.height = (fraction * 100) + "%";
  heatFill.style.backgroundColor = "hsl(" + (45 - fraction * 40) + ", 90%, 60%)";
  heatReading.textContent = fahrenheit + "°F";
  heatCelsius.textContent = celsius + "°C";
  heatSlider.setAttribute("aria-valuetext", fahrenheit + " degrees Fahrenheit, approximately " +
    celsius + " degrees Celsius");

  if (fahrenheit === 86) {
    heatExplanation.textContent = "86°F is an example of a warm day on Earth.";
  } else if (fahrenheit === 212) {
    heatExplanation.textContent = "Water boils at about 212°F at Earth's sea-level pressure. Venus is much hotter!";
  } else if (fahrenheit === venusTemperature) {
    heatExplanation.textContent = "Welcome to Venus: about 867°F on average at the surface. Its dense atmosphere traps enormous amounts of heat.";
  } else if (fahrenheit < venusTemperature) {
    heatExplanation.textContent = "Still " + (venusTemperature - fahrenheit) + "°F below Venus's average surface temperature.";
  } else {
    heatExplanation.textContent = "That's " + (fahrenheit - venusTemperature) + "°F above Venus's average surface temperature.";
  }
}

// Update continuously while dragging or using the keyboard's arrow keys.
heatSlider.addEventListener("input", updateHeat);

// Presets use Fahrenheit, matching the slider and main reading.
function selectTemperature(temperature) {
  heatSlider.value = temperature;
  updateHeat();
}
document.getElementById("warm-day").addEventListener("click", function () {
  selectTemperature(86);
});
document.getElementById("boiling-water").addEventListener("click", function () {
  selectTemperature(212);
});
document.getElementById("venus-heat").addEventListener("click", function () {
  selectTemperature(venusTemperature);
});

// Initialize from the slider's starting value.
updateHeat();
