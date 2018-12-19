let prerequisites = [`PHP`, `JavaScript`, `Ruby`, `Python`, `Java`];

let candidate = [
  [`Susanne Schuett`, `JavaScript`, `Ruby`, `Python`, `Java`],
  [`Mauro Cervantes`, `Python`, `Java`],
  [`Jens Soltwedel`, `PHP`, `Ruby`, `Java`],
  [`Jens Soltwedel`, `JavaScript`],
  [`Bob Andrews`, `PHP`, `JavaScript`, `Ruby`, `Java`]
];

let hiredOnes = [];
let minSkills = 3;

// outer loop applies to outer array
for (let i=0, len=candidate.length; i<len; i++) {

// check in inner array if candidate has minimum 4 values (1 always is the name)
    if (candidate[i].length > minSkills) {

      let candidateSkills = 0;

    // loop through the prerequisites array
      for (let skill of prerequisites) {

        // check if the values of each candidate correspond to the wanted skills
        if (candidate[i].includes(skill)) {
          candidateSkills++; //updating skill counter
        }
      }
      // check if the found wanted skills are more or equal than 3
      if (candidateSkills >= minSkills) {
        hiredOnes.push(candidate[i][0]) // put the name on the list if suited
      }
    }
}

console.log(hiredOnes);
