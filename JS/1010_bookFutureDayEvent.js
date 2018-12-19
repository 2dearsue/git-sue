
let months = [`January`, `February`,`March`,`April`,`May`,`June`,
      `July`, `August`, `September`, `Oktober`, `November`, `December`];

let createEvent = function (currentDate, usersDate) {

  if (today < usersDate) {

    let getDate = usersDate.getDate();
    let getMonth = usersDate.getMonth();
    let getYear = usersDate.getFullYear();

    console.log(`Your book to the event for the ${getDate}th ${months[getMonth]} ${getYear} is already guaranteed!`);

  } else {
    console.log(`Please choose a date in the future!`);
  }
}

let today = new Date();
let preferrableDate = new Date(2019, 2, 23);
let notPossibleDate = new Date(2018, 9, 1);

createEvent(today, preferrableDate);
createEvent(today, notPossibleDate);
