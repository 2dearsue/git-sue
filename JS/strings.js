///// FIND THE LONGEST WORD

let sentence = `Sometimes you put walls up not to keep people out, but to see who cares enough to break them down. - Socrates`

let parts = sentence.split(` `);
let longestIndex = -1;
let longestWord = 0;

console.log(parts);

for (let i=0; i < parts.length; i++) {
  if (parts[i].length > longestWord) {
    longestWord = parts[i].length;
    longestIndex = i;
  }
}

console.log(`Longest word is ${parts[longestIndex]} with ${longestWord} characters.`);



console.log(`/////////// FIND PALINDROME //////////////////`);
///// FIND PALINDROME

let palindrome = function(word) {

  let splitWord = word.split(``);
  let reverseWord = splitWord.reverse();
  let joinWord = reverseWord.join(``);

  // return joinWord;

  if (word === joinWord) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is NOT a palindrome`);
  }
}

palindrome(`otto`);
palindrome(`boomerang`);
