import { incremental } from "./incremental";
import { BoxFactory } from "./BoxFactory";

let currentValue = 1;
let increment = 1;
// get gameContainer and increasingButton form the DOM
const gameContainer = document.querySelector(".game-container");

// display the current value
const currentValueDisplay = document.querySelector(".current-value");
const incrementDisplay = document.querySelector(".increment");

// check if the elements are there
if (!gameContainer || !currentValueDisplay || !incrementDisplay) {
  throw new Error("increment or currentValueDisplay is missing");
}

// creating the boxes
const Box1 = BoxFactory({
  parentDiv: gameContainer,
  color: "red",
  currentNumber: currentValue,
  endingNumber: 10,
  onBuy: () => {
    buyIncrease(currentValue, 10, 1);
    updateBoxes();
  },
});
const Box2 = BoxFactory({
  parentDiv: gameContainer,
  color: "green",
  currentNumber: currentValue,
  endingNumber: 100,
  onBuy: () => {
    buyIncrease(currentValue, 100, 5);
    updateBoxes();
  },
});
const Box3 = BoxFactory({
  parentDiv: gameContainer,
  color: "yellow",
  currentNumber: currentValue,
  endingNumber: 1000,
  onBuy: () => {
    buyIncrease(currentValue, 1000, 10);
    updateBoxes();
  },
});
const Box4 = BoxFactory({
  parentDiv: gameContainer,
  color: "blue",
  currentNumber: currentValue,
  endingNumber: 10000,
  onBuy: () => {
    buyIncrease(currentValue, 10000, 20);
    updateBoxes();
  },
});

// i need to update these manually so i created a function that will do it for me
function updateBoxes(): void {
  Box1.setCurrentNumber(currentValue);
  Box2.setCurrentNumber(currentValue);
  Box3.setCurrentNumber(currentValue);
  Box4.setCurrentNumber(currentValue);
  if (currentValueDisplay && incrementDisplay) {
    currentValueDisplay.innerHTML = `${currentValue}`;
    incrementDisplay.innerHTML = `${increment}`;
  }
}
updateBoxes();

// this function will increase the value of the current value
function buyIncrease(current: number, reduce: number, increase: number): void {
  if (current >= reduce) {
    currentValue = current - reduce;
    increment += increase;
  }
}

// this function will increase the value of the current value
function addNumber(): void {
  currentValue = incremental(currentValue, increment);
  console.log(`currentValue: ${currentValue}`);
  updateBoxes();
}

// this will increase the value of the current value every second
setInterval(() => {
  addNumber();
}, 1000);
