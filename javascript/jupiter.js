// Connect the diagram and its Start/Pause controls.
const jupiterOrbitModel = document.getElementById("jupiter-orbit-model");
const startJupiterOrbits = document.getElementById("start-jupiter-orbits");
const pauseJupiterOrbits = document.getElementById("pause-jupiter-orbits");
const jupiterOrbitStatus = document.getElementById("jupiter-orbit-status");

// CSS supplies the motion; JavaScript changes its play state with a class.
// No extra timers are created if Start is triggered more than once.
startJupiterOrbits.addEventListener("click", function () {
  jupiterOrbitModel.classList.add("orbits-running");
  startJupiterOrbits.disabled = true;
  pauseJupiterOrbits.disabled = false;
  jupiterOrbitStatus.textContent = "Orbiting: Io, Europa, Ganymede, and Callisto move around Jupiter.";
});

// Pausing preserves the positions, so Start resumes from the same point.
pauseJupiterOrbits.addEventListener("click", function () {
  jupiterOrbitModel.classList.remove("orbits-running");
  startJupiterOrbits.disabled = false;
  pauseJupiterOrbits.disabled = true;
  jupiterOrbitStatus.textContent = "Paused. Select Start Orbits to continue.";
});
