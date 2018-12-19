// Create 10 objects that contain quotes or sayings as
// strings from famous peoples, and the names for every person
// who has credit for this quote, and store each object into an array.


let quoteDatabase = [

   {author: 'Jesus Christ',  quote: 'Ask and you shall receive'},

   {author: 'Julius Caesar', quote: 'Veni, Vidi, Vici'},

   {author: 'Tony Montana', quote: 'Say hello to my little friend!'},

   {author: 'Napoleon Hill', quote: 'If you cannot do great things, do little things in a great way.'},

   {author: 'Mary Poppins', quote: 'Anything can happen if you let it.'},

   {author: 'The Godfather', quote: 'I am gonna make him an offer he cannot refuse.'},

   {author: 'Charlie Chaplin', quote: 'We think too much and feel to little.'},

   {author: 'Batman', quote: 'With great power comes great responsibility.'},

   {author: 'Taxi Driver', quote: 'You are talking to me?'},

   {author: 'Lt. Colonel Bill Killgore', quote: 'I love the smell of napalm in the morning.'}

];


// Then create a function that any times it executes
// selects a random quote and prints the quote and the
// name of the man who said the quote after it as a credit.
//
// ex. 'Ask and you shall Receive, Jesus Christ'.


let writtenQuote = function(collectionOfQuotes) {

  let x = Math.round(Math.random() * quoteDatabase.length);

  console.log(collectionOfQuotes[x].quote + ` - ` + collectionOfQuotes[x].author);

  // random()	Returns a random number between 0 and 1
}

writtenQuote(quoteDatabase);
