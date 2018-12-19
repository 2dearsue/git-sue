
let form = document.querySelector(`form`);
let name = document.querySelector(`input[type="text"]`);
let birthday = document.querySelector(`input[type="date"]`);
let primaryColor = document.querySelector(`input[type="primaryColor"]`);
let secondColor = document.querySelector(`input[type="secondaryColor"]`);
let text = document.querySelector(`textarea`);
let selectFields = document.querySelectorAll('input[type="checkbox"]');

// EventListener für Erstellung der Form
form.addEventListener(`submit`, function(ev) {


  console.log(`yes`);
  ev.preventDefault();

  // den inhalt von dem feld name speichern in variable
  let section = document.createElement(`SECTION`);
  let person = name.value;
  let headline = document.createElement(`H3`);
  let spanClose = document.createElement(`SPAN`);

  headline.innerHTML = `${person}`;
  spanClose.innerHTML = `&times;`;

  document.body.appendChild(section);
  section.appendChild(h3);
  headline.appendChild(spanClose);



  // spanClose.addEventListener(`click`, function(ev) {
  //   let taskToBeRemoved = ev.currentTarget.parentElement;
  //   section.removeChild(taskToBeRemoved);
  // })

})
