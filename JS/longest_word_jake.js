console.log(`/////////////////////jakes solution//////`);

let spruch = `Just because the crocodile ate your enemy it does not mean he became your friend.`;

let findLongestWord = function(sentence) {

  let spruchArray = sentence.split (` `);
  let longestWord = spruchArray[0];

  for (let word of spruchArray) {
   if (word.length > longestWord.length) {
     longestWord = word;
     }
  }

  console.log(`The longest word in the sentence is ${longestWord} that contains ${longestWord.length}`);
}

findLongestWord(spruch);
