let timeTillXmas = setInterval(function(){

  let today = new Date();
  let xMas = new Date(2018, 11, 25);

  if (xMas <= today) {
    console.log(`X-Mas has arrived. Ho ho ho!`);
    clearInterval(timeTillXmas);
  }

  let difference = xMas - today;

  let yearsRemaining = difference / 1000 / 60 / 60 / 24 / 365;
  let yearsRounded = Math.floor(yearsRemaining);

  let daysRemaining = (yearsRemaining - yearsRounded) * 365;
  let daysRounded = Math.floor(daysRemaining);

  let hoursRemaining = (daysRemaining - daysRounded) * 24;
  let hoursRounded = Math.floor(hoursRemaining);

  let minutesRemaining = (hoursRemaining - hoursRounded) * 60;
  let minutesRounded = Math.floor(minutesRemaining);

  let secondsRemaining = (minutesRemaining - minutesRounded) * 60;
  let secondsRounded = Math.floor(secondsRemaining);

  let countdown = [];
  countdown.push(yearsRounded);
  countdown.push(daysRounded);
  countdown.push(hoursRounded);
  countdown.push(minutesRounded);
  countdown.push(secondsRounded);

  document.body.innerHTML = `Till X-mas remaining ${countdown.join(` : `)}.`;

}, 1000)
