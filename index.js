//Generate a random number
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startChangeColor = function () {
  document.body.style.background = randomColor();
};
const stopChangeColor = function () {
  document.body.style.background = randomColor();
};
document.querySelector('#start').addEventListener('click', startChangeColor);

document.querySelector('#stop').addEventListener('click', stopChangeColor);
