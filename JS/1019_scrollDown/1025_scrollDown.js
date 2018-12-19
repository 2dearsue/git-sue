let links = document.querySelectorAll (`a`);
let movies = document.querySelectorAll (`section`);

let moviesOffsets = [];
let movieTitles = [];

for (let i = 0; i < links.length; i ++) {
  moviesOffsets.push(movies[i].offsetTop);
  movieTitles.push(links[i].innerText);
}

let checkAndRemoveClass = function (linksOfElements, classToCheck) {
  for (let j = 0; j < linksOfElements, classToCheck; j++) {
    if(linksOfElements[j].classList.contains(classToCheck)) {
      linksOfElements[j].classList.remove(classToCheck);
      return;
    }
  }
}

for (let i = 0; i < links.length; i ++) {
  links[i].addEventListener(`click`, function(ev) {
    ev.stopPropagation();
    checkAndRemoveClass(links, `active`);
    links[i].classList.add(`active`);
  })
}

document.body.addEventListener(`click`, function() {
  checkAndRemoveClass(lists, `active`)
})

window.addEventListener(`scroll`, function(ev) {
  for (let k = 0; k < moviesOffsets.length; k++) {
    if (window.pageYOffset >= moviesOffsets[k] && window.pageYOffset < moviesOffsets[k+1]) {
      console.log(`You are watching the ${movieTitles[k]} section!`);
      links[k].classList.add(`selected`);
      links[k - 1].classList.remove(`selected`);
    }
  }
})
