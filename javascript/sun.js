const openSunJoke = document.getElementById("open-sun-joke");
const closeSunJoke = document.getElementById("close-sun-joke");
const sunJokeDialog = document.getElementById("sun-joke-dialog");

openSunJoke.addEventListener("click", function () {
  sunJokeDialog.showModal();
});

closeSunJoke.addEventListener("click", function () {
  sunJokeDialog.close();
});
