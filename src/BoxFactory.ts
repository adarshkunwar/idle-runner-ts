type BoxFactory = {
  parentDiv: Element;
  color: string;
  currentNumber: number;
  endingNumber: number;
  onBuy: () => void;
};
// this will create the box that contains a progress bar and a button
export const BoxFactory = ({
  parentDiv,
  color,
  currentNumber,
  endingNumber,
  onBuy,
}: BoxFactory) => {
  // Create the container
  const container = document.createElement("div");
  container.className = "inner_bar_container";

  // Create the progress bar
  const progress = document.createElement("div");
  progress.className = "progress_bar";

  // Create the inner progress bar3
  const progressColor = document.createElement("div");
  progressColor.className = "inner_progress_bar";
  progressColor.style.backgroundColor = color;

  // creating a button
  const button = document.createElement("button");
  button.className = "button";
  button.innerHTML = "Buy";

  // adding an event listener to the button which will be invoked outside the function
  button.addEventListener("click", () => {
    onBuy();
  });

  // appending the elements to the container
  progress.appendChild(progressColor);
  container.appendChild(progress);
  container.appendChild(button);
  parentDiv.appendChild(container);

  // this will update the width of the progress bar based on the current number
  const updateWidth = () => {
    const width = (currentNumber / endingNumber) * 100;
    progressColor.style.width = `${width}%`;
  };
  updateWidth();

  // this will return an object with a function that will update the current number and the button
  return {
    setCurrentNumber: (newNumber: number) => {
      currentNumber = newNumber;
      updateWidth();
    },
    button,
  };
};
