const body = document.querySelector("body");

const IMG_NUM = 10;

function paintImg(imgNum) {
  const image = new Image();
  image.src = `/image/${imgNum + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImg(randomNumber);
}

init();
