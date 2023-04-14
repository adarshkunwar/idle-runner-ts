type BoxFactory = {
  parentDiv: Element;
  color: string;
  currentNumber: number;
  endingNumber: number;
  onBuy: () => void;
};

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

  button.addEventListener("click", () => {
    onBuy();
  });

  progress.appendChild(progressColor);

  container.appendChild(progress);
  container.appendChild(button);
  parentDiv.appendChild(container);

  const updateWidth = () => {
    const width = (currentNumber / endingNumber) * 100;
    progressColor.style.width = `${width}%`;
  };

  updateWidth();

  return {
    setCurrentNumber: (newNumber: number) => {
      currentNumber = newNumber;
      updateWidth();
    },
    button,
  };
};
