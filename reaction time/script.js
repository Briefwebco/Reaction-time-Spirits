/*let startTime, endTime;
let testRunning = false;
let waitingForSignal = false;

document.getElementById("startBtn").addEventListener("click", function() {
  if (testRunning) {
    endTest();
  } else {
    if (waitingForSignal) {
      resetGame(); // Call resetGame directly if waiting for the signal
    } else {
      startTest();
    }
  }
});

function startTest() {
  console.log("startTest function called");
  if (!testRunning && !waitingForSignal) {
    document.getElementById("startBtn").innerText = "Изчакай...";
    document.getElementById("startBtn").disabled = true; // Disable the button
    document.getElementById("hero").style.backgroundColor = "#e74c3c";
    document.getElementById("statusText").innerText = "Приготви се....";
    testRunning = true;
    waitingForSignal = true;
    setTimeout(showSignal, Math.random() * 5000 + 1000); // Random delay between 1 to 6 seconds
  } else if (waitingForSignal) {
    document.getElementById("statusText").innerText = "Много бързаш. Натисни бутона отново.";
    setTimeout(resetGame, 2000); // Reset the game after 2 seconds
  }
}

function showSignal() {
  console.log("showSignal function called");
  document.getElementById("hero").style.backgroundColor = "#3498db";
  document.getElementById("statusText").innerText = "Натисни!";
  startTime = new Date().getTime();
  waitingForSignal = false;
  document.getElementById("startBtn").innerText = "Натисни!";
  document.getElementById("startBtn").disabled = false; // Enable the button
}

function endTest() {
  console.log("endTest function called");
  if (testRunning && !waitingForSignal) {
    endTime = new Date().getTime();
    let reactionTime = endTime - startTime; // Time difference in milliseconds
    document.getElementById("statusText").innerText = "Твоето време за реакция: " + reactionTime + " ms";
    testRunning = false;
    document.getElementById("startBtn").innerText = "Играй отново"; // Change button text to "Play Again"
  }
}

function resetGame() {
  console.log("resetGame function called");
  testRunning = false;
  waitingForSignal = false;
  document.getElementById("startBtn").innerText = "Натисни!"; // Reset button text after resetting the game
  document.getElementById("hero").style.backgroundColor = "#FFC0CB";
  document.getElementById("statusText").innerText = "Играта се рестартира";
  document.getElementById("startBtn").disabled = true; // Enable the button
}
*/