let form = document.querySelector(`form`),
    username = document.querySelector(`input[type="text"]`),
    age = document.querySelector(`input[type="number"]`);
    dateField = document.querySelector(`input[type="date"]`),
    paragraphError = document.querySelector(`.error`);

form.addEventListener(`submit`, function(ev) {
  ev.preventDefault();
  console.log(`was submitted`);
})

username.addEventListener(`invalid`, function(ev) {
  ev.preventDefault();
  console.log(ev.currentTarget.validationMessage);
})

age.addEventListener(`invalid`, function(ev) {
  ev.preventDefault();
  console.log(ev.currentTarget.validationMessage);

})

dateField.addEventListener(`invalid`, function(ev) {
  ev.preventDefault();
  // let errorMessage;

  if (dateField.validity.rangeOverflow) {
    ev.currentTarget.setCustomValidity(`Get your milk`);

  } else {
    ev.currentTarget.setCustomValidity(`Get out weirdo.`);
    // errorMessage = `Get out weirdo.`;
  }

  paragraphError.innerText = ev.currentTarget.validationMessage;
  // paragraphError.innerText = errorMessage;
  paragraphError.style.display = `block`;
  ev.currentTarget.focus();
  ev.currentTarget.setCustomValidity(``);


  // possibility to put a message after wrong input:
  // ev.currentTarget.insertAdjacentElement(`afterend`,paragraphError);
  // beforebegin, afterend> sibling,
  // afterbegin, beforeend > children

})
