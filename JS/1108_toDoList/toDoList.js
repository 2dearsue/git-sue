document.addEventListener('DOMContentLoaded', function(ev) {

  let button = document.querySelector(`button`);
  let input = document.querySelector(`input`);
  let section = document.querySelector(`section`);
  let form = document.querySelector(`form`);
  let counterID = localStorage.length;
  // let textarea = document.querySelector(`textarea`);

// this is rendering the page with its former tasks out of localStorage
// and bringing the stuff back to the html

if (localStorage.length > 0) {

  let counterObject = 0;

  for (let task in localStorage) {
    counterObject++;
    if (counterObject > localStorage.length) {
      break;
    }

    let article = document.createElement(`ARTICLE`);
    article.innerText = localStorage[task];
    let spanClose = document.createElement(`SPAN`);
    spanClose.innerText = `Finished!`;

    article.appendChild(spanClose);
    section.appendChild(article);

    spanClose.addEventListener(`click`, function(ev) {
      let taskToBeRemoved = ev.currentTarget.parentElement;
      section.removeChild(taskToBeRemoved);
    })

  }
}

// this is the function for adding new tasks with the button to close them

  form.addEventListener(`submit`, function (ev) {
    counterID++;
    ev.preventDefault();

    let text = input.value;
    let article = document.createElement(`ARTICLE`);
    let spanClose = document.createElement(`SPAN`);

    spanClose.innerText = `Finished!`;
    article.innerHTML = `${text}`;    // article.innerText = text;

    article.appendChild(spanClose);
    section.appendChild(article);

    localStorage.setItem(`article-${counterID}`, text);
    console.log(localStorage);

    input.value = ``;

    spanClose.addEventListener(`click`, function(ev) {
      let taskToBeRemoved = ev.currentTarget.parentElement;
      section.removeChild(taskToBeRemoved);
    })
  })
})
