// Track the model's angle separately from its HTML display.
let uranusTilt = 98;
const uranusModel = document.getElementById("uranus-tilting-model");
const uranusAngle = document.getElementById("uranus-angle");
const uranusDescription = document.getElementById("uranus-tilt-description");
const lessTilt = document.getElementById("less-uranus-tilt");
const moreTilt = document.getElementById("more-uranus-tilt");

// Clamp the angle so repeated clicks cannot move outside 0 to 180 degrees.
function updateUranusTilt() {
  uranusTilt = Math.max(0, Math.min(180, uranusTilt));
  // Build a CSS rotate value from the angle. Rotating this parent also rotates
  // its globe, equator, and axis; the reference lines outside it remain fixed.
  uranusModel.style.transform = "rotate(" + uranusTilt + "deg)";
  uranusAngle.textContent = uranusTilt + "°";
  lessTilt.disabled = uranusTilt === 0;
  moreTilt.disabled = uranusTilt === 180;

  // Choose one explanation for the current angle. Exact special positions
  // are checked first; the remaining branches describe angles below or above 90.
  if (uranusTilt === 98) {
    uranusDescription.textContent = "Uranus is tilted about 98°: slightly past a completely sideways position.";
  } else if (uranusTilt === 0) {
    uranusDescription.textContent = "Upright: the spin axis is perpendicular to the orbital plane.";
  } else if (uranusTilt === 90) {
    uranusDescription.textContent = "Completely sideways: the spin axis lies in the orbital plane.";
  } else if (uranusTilt === 180) {
    uranusDescription.textContent = "Fully flipped: the spin-axis arrow points opposite to its upright direction.";
  } else if (uranusTilt < 90) {
    uranusDescription.textContent = "The axis is tilted " + uranusTilt + "° away from upright. Keep tilting to reach a sideways position.";
  } else {
    uranusDescription.textContent = "The axis is " + (uranusTilt - 90) + "° past a sideways position.";
  }
}

lessTilt.addEventListener("click", function () {
  uranusTilt = uranusTilt - 10;
  updateUranusTilt();
});
moreTilt.addEventListener("click", function () {
  uranusTilt = uranusTilt + 10;
  updateUranusTilt();
});

// Presets let visitors compare an upright planet with Uranus immediately.
document.getElementById("upright-uranus").addEventListener("click", function () {
  uranusTilt = 0;
  updateUranusTilt();
});
document.getElementById("actual-uranus").addEventListener("click", function () {
  uranusTilt = 98;
  updateUranusTilt();
});
// Initialize the display and button availability using the starting 98 degrees.
updateUranusTilt();
