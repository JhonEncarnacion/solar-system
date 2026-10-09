const jokeButton = document.getElementById("joke-button");
const jokeAnswer = document.getElementById("joke-answer");

jokeButton.addEventListener("click", function () {
  if (jokeAnswer.hidden) {
    jokeAnswer.hidden = false;
    jokeButton.textContent = "Hide the Answer";
    jokeButton.setAttribute("aria-expanded", "true");
  } else {
    jokeAnswer.hidden = true;
    jokeButton.textContent = "Reveal the Answer";
    jokeButton.setAttribute("aria-expanded", "false");
  }
});
