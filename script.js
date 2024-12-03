const display = document.getElementById("display");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let count = 0;

incrementButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decrementButton.addEventListener("click", () => {
    count--;
    updateDisplay();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    display.textContent = count;
}
