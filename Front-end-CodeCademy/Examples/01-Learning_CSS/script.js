const boxDiv = document.querySelector(".box");
const object = document.querySelector(".object");

const position = {
  X: window.getComputedStyle(object)["left"],
  Y: window.getComputedStyle(object)["top"],
}

function createDiv(textContent, styles) {
  const div = document.createElement('div');
  div.textContent = textContent;
  Object.assign(div.style, styles);
  boxDiv.appendChild(div);
  return div;
}

createDiv(`${position.X}`, {
  position: "absolute",
  top: "88px",
  left: "175px",
  transform: "translate(-50%, -50%)"
});

createDiv('', {
  width: '325px',
  height: '3px',
  backgroundColor: 'red',
  position: "absolute",
  top: "100px",
  transform: "translateY(-50%)"
});

createDiv(`${position.Y}`, {
  position: "absolute",
  top: "37.5px",
  left: "326px",
  transform: "translate(-50%, -50%)"
});

createDiv('', {
  width: '3px',
  height: '75px',
  backgroundColor: 'red',
  position: "absolute",
  left: "350px",
  transform: "translateX(-50%)"
});