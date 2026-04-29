let getCarWrapper = document.querySelector(".carousel-wrapper");
let getArrows = document.querySelector(".arrows");
let getArrowL = document.querySelector(".left-arrow");
let getArrowR = document.querySelector(".right-arrow");
let getImgs = document.querySelector(".imgs");
let getImg = document.querySelectorAll(".img");
let getImgLength = getImg.length;
let getCurrImg = document.querySelector(".currImg");
let arrClick = false;
let counter = 1;
let getSize = getImg[counter].clientWidth;
let currImgPos = getImg[counter];
let prevImgPos = counter - 1;
let nextImgPos = counter + 1;

/*empieza a contar el carousel a partir de la segunda imagen*/
getImgs.style.transform='translateX(' + (counter * -1) + '00vw)';

/*mueve carousel hacia adelante*/
let next = function() {
  if (counter >= getImgLength - 1) return;
  getImgs.style.transition=" transform 1s ease-in-out";
  counter++;
  getImgs.style.transform='translateX(' + (counter * -1) + '00vw)';
}

/*mueve carousel hacia atras*/
let prev = function() {
  if (counter <= 0) return;
  getImgs.style.transition="transform 1s ease-in-out";
  counter--;
  getImgs.style.transform='translateX(' + (-counter) + '00vw)';
}

let clickArrowR = getArrowR.addEventListener("click", function() {
  next();
  console.log(counter);
})

let clickArrowL = getArrowL.addEventListener("click", function() {
  prev();
  console.log(counter);
})

/*vuelve a resetear contador para que carousel siga cargando imágenes*/
getImgs.addEventListener("transitionend", function() {
  if (getImg[counter].id === "lastclone") {
    getImgs.style.transition="none";
    counter = getImgLength - 2;
    getImgs.style.transform='translateX(' + (counter * -1) + '00vw)';
  }
  if (getImg[counter].id === "firstclone") {
    getImgs.style.transition = "none";
    counter = getImgLength - counter;
    getImgs.style.transform='translateX(' + (-counter) + '00vw)';
  }
})

//when slider on it doesn't transition the image resizing
window.addEventListener("resize", function() {
  getImgs.style.transition="none";
})
