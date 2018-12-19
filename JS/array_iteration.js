let bundesligaTeams = [
  `Bayern Munich`,
  `Dortmund`,
  `Schalke`,
  `Wolfsburg`,
  `Werder Bremen`,
  `Bayer Leverkusen`,
  `Leipzig`,
  `Freiburg`,
  `Mainz`,
  `Nurnberg`,
  `Eintracht Frankfurt`,
  `Gladbach`,
  `Hannover`,
  `Hertha Berlin`,
  `Hoffenheim`,
  `Stuttgart`,
  `Fortuna Dusseldorf`,
  `Augsburg`,
];

// for (let i = 0; i < bundesligaTeams.length; i++) {
//   console.log(`${i + 1} . ${bundesligaTeams[i]}`);
// }


console.log(`/////////eine Möglichkeit um alle gemochten Teams auzugeben: //////////////////////////`);

let jensHatedTeams = [`Bayern Munich`, `Hannover`, `Werder Bremen`, `Leipzig`, `Stuttgart`];

for (let team of bundesligaTeams) {

  if (jensHatedTeams.includes(team)) {
    continue;
  }
  console.log(team);
}

console.log(`/////////zweite Möglichkeit: ///////////////////////////////`);

for (let team of bundesligaTeams) {

  let isHated = false;

  for (hatedTeam of jensHatedTeams) {
    if(team === hatedTeam) {
      isHated = true;
      break;
    }
  }

  if (!isHated) {
    console.log(team);
  }
}
