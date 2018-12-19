let img = document.querySelectorAll(`div`);
let handlerLeft = document.querySelector(`span:nth-of-type(1)`);
let handlerRight = document.querySelector(`span:nth-of-type(2)`);

handlerRight.addEventListener(`click`, function(ev) {

  for (let i = 0; i < img.length; i++) {

    if (img[i].classList.contains(`visible`)) {

      if (i === img.length - 1) {
        img[i].classList.remove(`visible`);
        img[0].classList.add(`visible`);

      }

      img[i].classList.remove(`visible`);
      img[i + 1].classList.add(`visible`);
      break;
    }
  }
})


handlerLeft.addEventListener(`click`, function(ev) {

  for (let i = 0; i < img.length; i++) {

    if (img[i].classList.contains(`visible`)) {

      if (i === 0) {
        img[i].classList.remove(`visible`);
        img[img.length-1].classList.add(`visible`);
      }

      img[i].classList.remove(`visible`);
      img[i-1].classList.add(`visible`);
      break;
    }

  }
})
