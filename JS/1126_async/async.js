try {
  console.log(hello);
} catch (e) {
  e.message = `blabla bla lesson bla`;
  document.write(e.message);
} finally {
  console.log(`This is the final block ! You will see me in front of you!`);
}

console.log(5);;

console.log(`----------------------------------------------------------------`);


////////////// sync VS async ///////////////////////

let currentRuler = `Cersei Lannister`;

let changeRulerTo = firstRuler, secondRuler, thirdRuler, fourthRuler => {
  setTimeout(() => {
    currentRuler = firstRuler;
    console.log(currentRuler);
    setTimeout(() => {
      currentRuler = secondRuler;
      console.log(currentRuler);
      setTimeout(() => {
        currentRuler = thirdRuler;
        console.log(currentRuler);
        setTimeout(() => {
          currentRuler = fourthRuler;
          console.log(currentRuler);
        }, 1000)
      }, 2000)
    }, 3000)
  }, 5000)
}



console.log(currentRuler);
changeRulerTo(`Danny`, `Jon Snow`, `Jaimie Lannister`, `Nightking`);
console.log(currentRuler);
