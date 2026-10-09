// Connect the two buttons to the existing HTML dialog.
const openSunJoke = document.getElementById("open-sun-joke");
const closeSunJoke = document.getElementById("close-sun-joke");
const sunJokeDialog = document.getElementById("sun-joke-dialog");

// showModal opens the dialog and makes the rest of the page inactive.
openSunJoke.addEventListener("click", function () {
  sunJokeDialog.showModal();
});

// The Close button dismisses the dialog; Escape is handled by the browser.
closeSunJoke.addEventListener("click", function () {
  sunJokeDialog.close();
});
