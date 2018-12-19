let requirements = [`PHP`, `JS`, `Ruby`, `Python`, `Java`];

const jake = [`Kostas Diakogiannis`, `Julia`, `Python`, `JS`];
const daniel = [`Daniel Cipolla`, `Ruby`, `Python`, `JS`, `PHP`];

let hiredPeople = [];

let hireOrNot = function(candidate) {

  let skillsMet = 0;

  for (let language of requirements) {
    if (candidate.includes(language)) {
      skillsMet++;
    }
  }

  if (skillsMet >= 3) {
    hiredPeople.push (candidate[0]);
  }
}

hireOrNot(jake);
hireOrNot(daniel);

console.log(hiredPeople);
