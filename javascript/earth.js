// Find the button and the paragraph that reports the current theme.
const themeButton = document.getElementById("earth-theme-button");
const themeStatus = document.getElementById("earth-theme-status");

// Add or remove the night-mode class each time the button is clicked.
themeButton.addEventListener("click", function () {
  const nightModeIsActive = document.body.classList.toggle("night-mode");

  // Keep the accessible button state and visible message synchronized.
  if (nightModeIsActive) {
    themeButton.setAttribute("aria-pressed", "true");
    themeStatus.textContent = "Night mode is active.";
  } else {
    themeButton.setAttribute("aria-pressed", "false");
    themeStatus.textContent = "Day mode is active.";
  }
});