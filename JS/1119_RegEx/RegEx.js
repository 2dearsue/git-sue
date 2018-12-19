// Introduction to Regular Expressions a.k.a. Regex

let kamtschaka = `i love watching bears fishing salmons in Kamtschaka.`;
let bear = `bear`;
let beard = `My morgning routine is to shake my beard.`;
let heat = `The heat is unbearable.`;
// define my Pattern:
// let myRegex = /\b(bear|bears)\b/i;
let bearRegex = /\bbears?\b/i;

// console.log(bearRegex.test(kamtschaka));
// console.log(bearRegex.test(bear));
// console.log(bearRegex.test(beard));
// console.log(bearRegex.test(heat));


///////

let bears = `bears, i love watching bears fishing salmons in Kamtschaka. My morgning routine is to shake my beard.`;

// define my Pattern:
// let myRegex = /\b(bear|bears)\b/i;
let bearsRegex = /\bbears?\b/ig;

// console.log(bears.match(bearsRegex));


////////

let textarea = document.querySelector(`textarea`);
let text = textarea.innerHTML;

let facebookRegex = /^facebook$/ig;
let twitterRegex = /^twitter$/ig;

textarea.addEventListener(`keyup`, function(ev) {

  if (facebookRegex || twitterRegex) {

    let shares = text.match(facebookRegex).length;
    let tweets = text.match(twitterRegex).length;

    let counterFacebook = document.createElement(`SPAN`);
    let counterTwitter = document.createElement(`SPAN`);

    counterFacebook.innerText = `FB: ${shares} Shares.`;
    counterTwitter.innerText = `TW: ${tweets} Tweets.`;

    document.body.appendChild(counterFacebook);
    document.body.appendChild(counterTwitter);
  }

})
