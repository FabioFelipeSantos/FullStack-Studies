const div = document.querySelector('.container');
const bdWidth = window.getComputedStyle(div).getPropertyValue('border-radius');

console.log(bdWidth)

const p1 = document.createElement('p');