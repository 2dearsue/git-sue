let headings = document.querySelectorAll(`h3`);
let blocks = document.querySelectorAll(`p`);

let toggleAccordion = function (collection, classToCheck) {
    for (let k = 0; k < collection.length; k++) {
        if (collection[k].classList.contains(classToCheck)) {
            collection[k].classList.remove(classToCheck);
            break;
        }
    }
  }

for (let i = 0; i < headings.length; i++) {
    headings[i].addEventListener('click', function (ev) {
        toggleAccordion(blocks, 'active');
        toggleAccordion(headings, 'selected');
        headings[i].classList.add('selected');
        blocks[i].classList.add('active');
    })
  }
