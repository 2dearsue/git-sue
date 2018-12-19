let checkAnagram = function(firstWord, secondWord) {

  let splitFirstWord = firstWord.split (``);
  let sortFirstWord = splitFirstWord.sort();
  let joinFirstWord = sortFirstWord.join(``);

  let splitSecondWord = secondWord.split (``);
  let sortSecondWord = splitSecondWord.sort();
  let joinSecondWord = sortSecondWord.join(``);

   if (joinFirstWord === joinSecondWord) {

  console.log(`${firstWord} is a anagram of ${secondWord}.`);
  }
}

checkAnagram(`Asche`, `Achse`);
ceckAnagram(`Bobby`, `Lobster`);
