let items = document.querySelectorAll(`ul#nav > li`);
let blocks = document.querySelectorAll(`section`);


for (let i = 0; i < items.length; i++) {

    items[i].addEventListener(`click`, function(){

      for (let j=0; j < blocks.length; j++) {
        if (blocks[j].classList.contains(`visible`)) {
          blocks[j].classList.remove(`visible`);
        }
      }

      for (let j=0; j < items.length; j++) {
        if (items[j].classList.contains(`active`)) {
          items[j].classList.remove(`active`);
        }
      }
    items[i].classList.add(`active`);
    blocks[i].classList.add(`visible`);
  })
}
