const name = document.querySelector(`input[type="text"]`),
      userDate = document.querySelector(`input[type="date"]`),
      picture = document.querySelector(`input[type="file"]`)
      primaryColor = document.querySelector(`#primaryColor`),
      secondaryColor = document.querySelector(`#secondaryColor`),
      text = document.querySelector(`textarea`),
      checkboxes = document.querySelectorAll('input[type="checkbox"]'),
      form = document.querySelector(`form`),
      paragraphTextareaMessage = document.querySelector(`p.counterMessage`),
      charactersAllowed = 140;
// other possibility but if some things are added the indexes dont work anymore
// let input = document.querySelectorAll(`input`);

// EventListener für Erstellung der Form
form.addEventListener(`submit`, function(ev) {
  // immer gut einzubauen u verhindert default verhalten vom browser
  ev.preventDefault();
  // erstellung der elemente!!!!
  let section = document.createElement(`SECTION`);
  let headline = document.createElement(`H3`);
  let spanClose = document.createElement(`SPAN`);
  let date = document.createElement(`P`);
  let photo = document.createElement(`img`);
  let article = document.createElement(`ARTICLE`);

  let username = name.value;

  let birthday = new Date(userDate.value);
  let today = new Date();
  let diffBirthday = (today - birthday);
  let age = today.getFullYear() - birthday.getFullYear();
  console.log(age);

  let pictureSource = picture.value;

  // zuweisung von inhalt / values
  headline.innerHTML = `${username}`;
  spanClose.innerHTML = `&times;`;
  // let spanCloseButton = document.createElement(`SPAN`);
  // spanCloseButton.innerText = `X`;
  date.innerHTML = `${username} is <b>${age}</b> years old.`;
  article.innerText = text.value;

  // Foto - Teil:
  let newPath = pictureSource.replace("C:\\fakepath\\", "/img/");   // let pos = str.lastIndexOf(`\\`);
  photo.src = newPath;

  section.style.backgroundColor = primaryColor.value;
  section.style.color = secondaryColor.value;

  // checkboxes
  let skills = [];
  for (let i = 0; i < checkboxes.length; i++) {

    if (checkboxes[i].checked) {
      skills.push(checkboxes[i].parentElement.innerText)
    }
  }
  let skillsList = document.createElement(`P`);
  skillsList.innerText = `Programming Skills: ${skills.join(`, `)}`;


  // platzieren der html Elemente
  section.appendChild(headline);
  section.appendChild(date);
  section.appendChild(photo);
  section.appendChild(article);
  section.appendChild(skillsList);
  section.appendChild(spanClose);
  // untill here the user see nothing...
  document.body.appendChild(section);

  spanClose.addEventListener(`click`, function(ev) {
    let sectionToBeRemoved = ev.currentTarget.parentElement;
    document.body.removeChild(sectionToBeRemoved);
  })

})


name.addEventListener(`invalid`, function(ev) {
  ev.preventDefault();

  ev.currentTarget.setCustomValidity(`Please enter your name`);
  ev.currentTarget.nextElementSibling.innerText = ev.currentTarget.validationMessage;
  ev.currentTarget.setCustomValidity(``);
})

name.addEventListener(`keyup`, function(ev) {
  ev.currentTarget.checkValidity();
})
// ++++++++++++++++++++++
userDate.addEventListener(`invalid`, function(ev) {
  ev.preventDefault();

  ev.currentTarget.setCustomValidity(`Please think before typing, you morron.`);
  ev.currentTarget.nextElementSibling.innerText = ev.currentTarget.validationMessage;
  ev.currentTarget.setCustomValidity(``);
})

userDate.addEventListener(`change`, function(ev) {
  ev.currentTarget.checkValidity();
  console.log(`anything`);
})
// ++++++++++++++++++++++
text.addEventListener(`keyup`, function(ev) {
  ev.preventDefault();

  let charactersRemained = charactersAllowed - text.value.length;
  paragraphTextareaMessage.innerText = `You have ${charactersRemained} left.`;

  if (charactersRemained === 1) {
    paragraphTextareaMessage.innerText = `End of Story.`;
    paragraphTextareaMessage.style.color = red;
  }
})
