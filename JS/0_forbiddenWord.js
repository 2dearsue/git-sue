let badWords = [`fuck`, `shit`, `pussy`, `asshole`];

let sentence = `I had a fuck time in Bruges.`;

let checkPhrase = function(text, forbiddenWords) {

  text = text.replace(`,`, `!`);

  let sentenceSplit = text.split(` `);

  console.log(sentenceSplit);

  for (let word of sentenceSplit) {

    if (forbiddenWords.includes(word)) {
      console.log(`This message cannot be printed`);
      return;
      }
    }
  console.log(text);
}

checkPhrase(sentence, badWords);
