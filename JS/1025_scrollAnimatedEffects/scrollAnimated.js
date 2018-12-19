
let img = document.querySelectorAll(`img`);

let imgOffset = [];
let images =[];

for (let i = 0; i < img.length; i ++) {
  images.push(img[i]);
}

for (let i = 0; i < img.length; i ++) {
  imgOffset.push(img[i].offsetTop);
}

window.addEventListener(`scroll`, function(ev) {

    if (window.pageYOffset >= imgOffset[0]-300) {
      img[0].classList.add(`fade-in`);
    }

    if (window.pageYOffset >= imgOffset[1]-300) {
      img[1].classList.add(`slide`);
    }

    if (window.pageYOffset >= imgOffset[2]-300) {
      img[2].classList.add(`rotate`);
    }

})
