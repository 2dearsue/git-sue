
let textarea = document.querySelector(`textarea`);
let fb = document.querySelector(`#fb`);
let tw = document.querySelector(`#tw`);

let facebookRegex = /\bf(ace)?b(ook)?\b/ig;
let twitterRegex = /\btw(itter)?\b/ig;

let checkMatches = function(socialRegex, elem, userText) {

  if (socialRegex.test(userText)) {
    let number = userText.match(socialRegex).length;
    elem.innerText = `Shares: ${number}.`;
    elem.style.display = `inline-block`;
  } else {
    elem.style.display = `none`;
    }
}

textarea.addEventListener(`keyup`, function(ev) {
  // let text = textarea.value;
  let text = ev.currentTarget.value;

  checkMatches(facebookRegex, fb, text);
  checkMatches(twitterRegex, tw, text);

})
