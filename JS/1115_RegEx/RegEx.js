// Introduction to Regular Expressions a.k.a. Regex

let dataComesFromUser = `Jake`;
// define my Pattern:
let myRegex = /Jake/i;

console.log(myRegex.test(dataComesFromUser)); // = Test function (regex.test(argumetn))


// partial match:
let userString = `Hello my name is Jake`;

let myRegexString = /^Jake$/i;
// define that only jake with nothing before or after will be accepted
// let myRegex = /Jake/i; // this would work!

console.log(myRegex.test(userString));


let nicholson = `Jack Nicholson`;
let sparrow = `jack Sparrow`;
let russell = `Jack ruSsell`;

let myRegexArtist = /^Jack\s(nicholson|sparrow)$/i;

console.log(myRegex.test(nicholson));
console.log(myRegex.test(sparrow));
console.log(myRegex.test(russell));
