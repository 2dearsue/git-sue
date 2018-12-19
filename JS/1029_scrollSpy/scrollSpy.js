let links = document.querySelectorAll (`a`);
let movies = document.querySelectorAll (`section`);

let moviesOffsets = [];

for (let i = 0; i < links.length; i ++) {
  moviesOffsets.push(movies[i].offsetTop);
}

let checkAndRemoveClass = function (linksOfElements, classToCheck) {
  for (let j = 0; j < linksOfElements, classToCheck; j++) {
    if(linksOfElements[j].classList.contains(classToCheck)) {
      linksOfElements[j].classList.remove(classToCheck);
      return;
    }
  }
}

window.addEventListener(`scroll`, function(ev) {
  for (let k = 0; k < moviesOffsets.length; k++) {
    if (window.pageYOffset >= moviesOffsets[k]-100) {
      checkAndRemoveClass(links, `selected`);
      links[k].classList.add(`selected`);
    }
  }
})
