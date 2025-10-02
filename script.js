const container = document.querySelector(".container");
makeGrid(16);

function makeGrid(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("style", `flex: 0 0 ${100 / number}%;`);
      container.appendChild(square);
    }
  }
}

function removeGrid(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

container.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "black";
});

const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Click";
button.addEventListener("click", () => {
  grid = prompt("Number of squares? ");
  if (+grid > 100 || +grid <= 0 || isNaN(grid)) {
    alert("No more than 100 and no less than 0!");
  } else {
    removeGrid(container);
    makeGrid(+grid);
  }
});

body.prepend(button);
