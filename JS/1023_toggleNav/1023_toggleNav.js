let titles = document.querySelectorAll (`nav > li`);
let lists = document.querySelectorAll (`ul`);

for (let i = 0; i < titles.length; i++) {

  titles[i].addEventListener(`click`, function(ev) {
    ev.stopPropagation();
    for (let j = 0; j < lists.length; j++) {
      if (lists[j].classList.contains(`active`)) {
        lists[j].classList.remove(`active`);
        break;
      }
    }

    lists[i].classList.add(`active`);
    // links[0].classList.add(`active`);
  })
}

document.body.addEventListener(`click`, function() {

    for (let j = 0; j < lists.length; j++) {
      if (lists[j].classList.contains(`active`)) {
        lists[j].classList.remove(`active`);
        break;
      }
    }
  })
