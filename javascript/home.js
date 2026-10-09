// Cache the button and answer so the click handler can update them.
const jokeButton = document.getElementById("joke-button");
const jokeAnswer = document.getElementById("joke-answer");

// Toggle the answer, button label, and expanded state together.
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
