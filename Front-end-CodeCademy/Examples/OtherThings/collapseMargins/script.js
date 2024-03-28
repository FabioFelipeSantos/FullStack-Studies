const container1 = document.querySelector('.container-1')

const box1 = document.querySelector('.box-1');
const box1Positions = box1.getBoundingClientRect();

const box2 = document.querySelector('.box-2');
const box2Positions = box2.getBoundingClientRect();

const bordersDistance = box2Positions.left - box1Positions.right;

const divHor = document.createElement('div');

divHor.textContent = `${bordersDistance}px`;

const divHorStyles = {
  color: 'darkslateblue',
  fontSize: '32px',
  position: 'absolute',
  top: `${box1Positions.height / 2 - 20}px`,
  left: `${box1Positions.width + bordersDistance / 2}px`,
  transform: "translate(-50%, -100%)",
}

Object.assign(divHor.style, divHorStyles);
container1.appendChild(divHor)

const lineHor = document.createElement('div');
const lineHorStyles = {
  position: 'absolute',
  backgroundColor: '#006400',
  width: `${bordersDistance}px`,
  height: '2px',
  top: `${box1Positions.height / 2 - 20}px`,
  left: `${box1Positions.width}px`,
}

Object.assign(lineHor.style, lineHorStyles);
container1.appendChild(lineHor)

const container2 = document.querySelector('.container-2')
const positionsContainer2 = container2.getBoundingClientRect();

const box3 = document.querySelector('.box-3');
const box3Positions = box3.getBoundingClientRect();

const box4 = document.querySelector('.box-4');
const box4Positions = box4.getBoundingClientRect();

const bordersDistanceVertical = box4Positions.top - box3Positions.bottom;

const divVer = document.createElement('div');
divVer.textContent = `${bordersDistanceVertical}px`;
const divVerStyles = {
  color: 'darkslateblue',
  margin: 'unset',
  padding: 'unset',
  fontSize: '32px',
  position: 'absolute',
  top: `${box3Positions.bottom + bordersDistanceVertical / 2 - positionsContainer2.top}px`,
  left: `${box3Positions.left + box3Positions.width / 2 - positionsContainer2.left}px`,
  transform: "translateY(-50%)",
}
Object.assign(divVer.style, divVerStyles);
container2.appendChild(divVer)


const lineVer = document.createElement('div');
const lineVerStyles = {
  position: 'absolute',
  backgroundColor: '#006400',
  height: `${bordersDistanceVertical}px`,
  width: '2px',
  top: `${box3Positions.height}px`,
  left: `${box3Positions.width / 2}px`,
}
Object.assign(lineVer.style, lineVerStyles);
container2.appendChild(lineVer);