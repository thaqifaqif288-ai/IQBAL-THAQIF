// Lagu betul yang bertukar instrumen
const correctSong = 2;

function playSong(number) {
  alert("Playing Song " + number + " 🎶\n(Imagine instrument change here)");
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value;
  const result = document.getElementById("result");

  if (userAnswer == correctSong) {
    result.style.color = "lightgreen";
    result.textContent = "✅ Correct! Well done!";
  } else {
    result.style.color = "red";
    result.textContent = "❌ Wrong answer. Try again!";
  }
}

function handleEnter(event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
}
