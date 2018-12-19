let button = document.querySelector(`button`);
let paragraph = document.querySelector(`p`);


    //   button.addEventListener(`click`, function() {
    //     paragraph.classList.toggle(`styleParagraph`);
    //
    // })


    button.addEventListener(`click`, function() {
      paragraph.classList.replace(`styleParagraph`, `styleYellow`);

  })

// mapping/structuring:
//
// let names = [`Mohammed`, `Jens`, `Sue`];
//
// let [mohammed, jens, sue] = names
