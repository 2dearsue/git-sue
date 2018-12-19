document.addEventListener('DOMContentLoaded', function(ev) {

  let input = document.querySelector('input');
  let button = document.querySelector('button');
  let article = document.querySelector('article');
  let checkbox = document.querySelector('input[type="checkbox"]');
  let image = document.querySelector('img');
  let selectFields = document.querySelectorAll('select');
  let link = document.querySelector('a');
  let textarea = document.querySelector('textarea');
  let paragraphs = document.querySelectorAll('p');

  input.addEventListener('keyup', function(ev) {
    let val = input.value;
    val ? article.innerText = val : article.innerText = input.placeholder
  })

  checkbox.addEventListener('click', function(ev) {
    checkbox.checked ? input.type = 'password' : input.type = 'text'
    console.log(input.value);
  })

  selectFields[0].addEventListener('change', function(ev) {
    let selectedValue = selectFields[0].value;
    image.src = `../img/${selectedValue}.jpg`;
  })

  selectFields[1].addEventListener('change', function(ev) {
    link.innerHTML = `Go to <span>${ev.currentTarget.value}</span>`;
    link.href =  `https://www.${ev.currentTarget.value}.com`;
    console.log(ev.currentTarget);
  })

  button.addEventListener('click', function(ev) {
    let text = textarea.value;
    let newParagraph = document.createElement('P');
    newParagraph.innerHTML = `${text} <span class="but">&times;</span>`;
    document.body.appendChild(newParagraph);
    textarea.value = '';

    let spans = document.querySelectorAll(`.but`);

    for (let i = 0; i < spans.length; i++) {
      spans[i].addEventListener(`click`, function(ev){
        let spanClicked = ev.currentTarget;
        let parentOfSpan = spanClicked.parentElement;
        // document.body.removeChild(parentTarget);
        parentOfSpan.parentElement.removeChild(parentOfSpan);
      })
    }
  })

})
