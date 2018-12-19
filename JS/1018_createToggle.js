let button = document.querySelector(`button`);
let list = document.querySelector(`ul`);
let items = document.querySelectorAll(`ul li`);
let paragraph = document.querySelector(`p`);
let secondButton = document.querySelector(`button:nth-of-type(2)`);

let paragraphHeightFullScreen = paragraph.clientHeight;
let buttonWidthFullScreen = button.clientWidth;

list.style.width = `25.1vw`

let listVisible = false;
let paragraphIsShown = true;


  button.addEventListener(`click`, function() {
    if (listVisible) {
      list.style.opacity = `0`;
      items.style.width = `0`;
      button.innerHTML = `Show me now!!!`;
    } else {
      list.style.opacity = `1`;
      items.style.width = buttonWidthFullScreen;
      button.innerHTML = `Get them out of here`;
    }
      listVisible = !listVisible;
  })



secondButton.addEventListener(`click`, function() {
  if (paragraphIsShown) {
    paragraph.style.height = `0`;
    paragraph.style.padding = `0`;
    secondButton.innerHTML = `Show Paragraph`;
  } else {
    paragraph.style.height = paragraphHeightFullScreen + `px`;
    paragraph.style.padding = `1vw 4vw`;
    secondButton.innerHTML = `Hide Paragraph`;
  }

  paragraphIsShown = !paragraphIsShown;
})
