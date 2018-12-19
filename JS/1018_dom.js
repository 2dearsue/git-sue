let button = document.querySelector('button');
let headings = document.querySelectorAll('h3');
let counter = 0;
console.log(`well`);

let removeHeadings = function() {
  headings[counter].style.background = 'grey';
  counter++;

  if (counter === headings.length) {
    button.removeEventListener('click', removeHeadings);
  }
}

button.addEventListener('click', removeHeadings);
