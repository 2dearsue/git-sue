let links = document.querySelectorAll (`a`);
let movies = document.querySelectorAll (`section`);

let goodfellasLink = links[3];

let goodfellasGo = function(ev) {
  ev.preventDefault();
  let scrollDownToGoodfellas = setInterval(function () {
    window.scrollBy(0, 4);
    if (window.pageYOffset >= 1341) {
    clearInterval(scrollDownToGoodfellas);
    }

  }, 1)
}

goodfellasLink.addEventListener(`click`, goodfellasGo);
