////////////// sync VS async ///////////////////////

let currentRuler = `Cersei Lannister`;

let changeRuler = name => {
    currentRuler = name;
    return currentRuler
}

let asyncChangeRuler = (name, time) => {
  let promisedName = new Promise((resolve, reject) => {
    if (name === `Jon Snow`) {
      reject(`Bastards are not allowed to sit on the iron throne`);
    }
    setTimeout(() => {
      resolve(name);
    }, time)
 // function that returns the promise when it is ready!
  })
  return promisedName;
}

let rulers = [`Danny`, `Jon Snow`, `Euron Greyjoy`, `Jamie Lannister`, `Nightking`];
let times = [5000, 3000, 2000, 1500, 1000];
let counter = 0;

let makeRulersAtOnce = () => {
  if (counter === rulers.length) {
    return;
  }

  asyncChangeRuler(rulers[counter], times[counter])
    .then(name => {
      currentRuler = name;
      console.log(currentRuler);
      counter++;
      makeRulersAtOnce(counter);
    })
    .catch(errorMessage => {
      console.warn(errorMessage);
    })
}

makeRulersAtOnce(`danny`);

console.log(currentRuler);
