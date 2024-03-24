function spanWithFontSize(element, fontSize, fzHTML = false) {
  const span = document.createElement('span');
  span.textContent = ` ${fontSize}`;

  if (fzHTML) {
    span.textContent += ` (${100 * parseFloat(fontSize) / parseFloat(fzHTML)}%)`;
  }

  const styles = {
    "color": "rgb(80,30,255)",
    "font-weight": "700",
  };

  Object.assign(span.style, styles);

  element.appendChild(span);
}

function fontSizeCalculator(className, fzHTML = false) {
  const pElement = document.querySelector(className);
  const fontSize = window.getComputedStyle(pElement).fontSize;

  fzHTML ? spanWithFontSize(pElement, fontSize, fzHTML) : spanWithFontSize(pElement, fontSize);

  if (className === '.fz-txt') {
    return fontSize
  }
}

let classesNames = '.fz-txt';
const fzHTML = fontSizeCalculator(classesNames);

for (let i = 1; i <= 8; i++) {
  classesNames = `.fz-${i}`;
  fontSizeCalculator(classesNames, fzHTML);
}