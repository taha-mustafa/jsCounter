// Catching HTML Elements
let starterCounter = 0;
    countNum = document.getElementById("counter"),
    minus = document.getElementById("minus"),
    plus = document.getElementById("plus");

countNum.innerText = starterCounter;

// Operation For Adding
plus.addEventListener("click", () => {
  starterCounter++;
  countNum.innerText = starterCounter;

  if (starterCounter == 10) {
    alert("Hey! You reached The Number 10, Do You Wanna Complete!!!");
  }
});

// Operation For Substract
minus.addEventListener("click", () => {
  starterCounter--;
  countNum.innerText = starterCounter;

  if (starterCounter == -10) {
    alert("Hey! You reached The Number -10, Do You Wanna Complete!!!");
  }
});
// Finished!!!!!!!!!!!!