function spanWithFontSize(element, fontSize) {
  const span = document.createElement('span');
  span.textContent = `${fontSize}`;

  const styles = {
    "color": "rgb(80,30,255)",
    "font-weight": "700",
  };

  Object.assign(span.style, styles);

  element.appendChild(span);
}

function fontSizeCalculator(className) {
  const pElement = document.querySelector(className);
  const fontSize = window.getComputedStyle(pElement).fontSize;

  spanWithFontSize(pElement, fontSize);
}


let classesNames = '.fz-txt';
fontSizeCalculator(classesNames);

for (let i = 1; i <= 8; i++) {
  classesNames = `.fz-${i}`;
  console.log(classesNames)
  fontSizeCalculator(classesNames);
}