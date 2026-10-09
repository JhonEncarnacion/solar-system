// Connect the quiz form to its feedback paragraph.
const mercuryForm = document.getElementById("mercury-quiz-form");
const mercuryFeedback = document.getElementById("mercury-feedback");

// Check the selected answer without navigating away or refreshing.
mercuryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedAnswer = mercuryForm.querySelector(
    'input[name="mercury-year"]:checked',
  );

  // Guard against a missing selection before reading its value.
  if (!selectedAnswer) {
    mercuryFeedback.textContent = "Please select an answer first.";
    return;
  }

  mercuryFeedback.classList.remove("correct", "incorrect");

  if (selectedAnswer.value === "88") {
    mercuryFeedback.textContent =
      "Correct! A year on Mercury lasts about 88 Earth days.";

    mercuryFeedback.classList.add("correct");
  } else {
    mercuryFeedback.textContent =
      "Not quite! Mercury completes an orbit in about 88 Earth days. Try again.";

    mercuryFeedback.classList.add("incorrect");
  }
});

// Remove previous feedback when the visitor changes their selection.
mercuryForm.addEventListener("change", function () {
  mercuryFeedback.textContent = "Click Check Answer to check your selection.";

  mercuryFeedback.classList.remove("correct", "incorrect");
});

// The browser clears the selection; JavaScript resets the feedback.
mercuryForm.addEventListener("reset", function () {
  mercuryFeedback.textContent = "Select an answer, then click Check Answer.";

  mercuryFeedback.classList.remove("correct", "incorrect");
});
