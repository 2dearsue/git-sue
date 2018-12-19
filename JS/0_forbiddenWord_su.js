let forbiddenWords = [`cunt`, `nazi`, `bimbo`, `asshole`, `hitler`];

let checkPhrase = function(sentence) {

  let splitSentence = sentence.split(` `);

  for (let word of forbiddenWords) {

    if (splitSentence.includes(word)) {
      console.log(`The message cannot be printed because it contains inappropriate words.`);
      return;
      }
    }
console.log(`${sentence}`);
}

checkPhrase(`I hate you nazi !`);
checkPhrase(`I like you`);
checkPhrase(`You bimbo`);



// WIE PRINTE ICH DEN SATZ FALLS KEIN FORBIDDEN WORD DRIN IST???
