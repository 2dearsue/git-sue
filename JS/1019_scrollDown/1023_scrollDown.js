let links = document.querySelectorAll (`a`);
let movies = document.querySelectorAll (`section`);

// console.table(section);

//// to scroll to a certain movie:

    // let linkGoodfellas = links[3];
    // let goodfellas = movies[3];
    //
    // linkGoodfellas.addEventListener(`click`, function(ev) {
    //   ev.preventDefault();
    //
    //   // window.scrollTo(0, goodfellas.offsetTop);
    //
    //   let scrollDown = setInterval(function(){
    //     if(window.pageYOffset >= prestige.offsetTop){
    //       clearIntervall(scrollDown); // without return here it will execute the last step
    //     }
    //
    //     window.scrollBy(0; 3);
    //   }, 1)
    // })

    let scrollDown = function (pos, fn) {
      if (window.pageYOffset >= pos) {
        clearInterval(fn);
      }
      window.scrollBy(0, 5);
    }

for (let i = 0; i < links.length; i ++) {
  links[i].addEventListener(`click`, function(ev) {
    ev.preventDefault();

    if (i === movies.length - 1) {
      let interval = setInterval(function() {
        scrollDown(movies[i].offsetTop - 130, interval);
      }, 1)

    } else {
      let interval = setInterval(function() {
        scrollDown(movies[i].offsetTop, interval);
      }, 1)
    }

  })
}
