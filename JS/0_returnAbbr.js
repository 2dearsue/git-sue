// function accept string, split to address each word, convert to uppercase
// then take first letter (index), push into new array and JOIN


let phrase = `Eat my shorts`;

let returnAbbr = function(phrase) {

  let newPhrase = [];
  phrase = phrase.replace(`,`, ``);
  let splitPhrase = phrase.split(` `);

  for(let i = 0; i < splitPhrase.length; i++){
    splitPhrase[i] = splitPhrase[i].toUpperCase();
  }

  let getLetter = function (letter) {

      for (let i = 0; i < letter.length; i += 1) {
        newPhrase.push(letter[i].charAt(0));
        }
    console.log(newPhrase.join(``));
  }
  getLetter(splitPhrase);

}

returnAbbr(phrase);
