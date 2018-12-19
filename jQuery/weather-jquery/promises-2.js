let firstStudent = `Meir`;

let changeStudent = name => {
  let promisedStudent = new Promise((resolve, reject) => {
    if (name.length === 4) {
      reject(`Too short man!`);
    }
    resolve(name);
  });

  return promisedStudent;
}

let printAnotherStudent = newStudent => {
  let nameLower = name.toUpperCase();
  firstStudent = nameLower;
  console.log(firstStudent);
}

changeStudent(`Jens`)
  .then(printAnotherStudent)
  .catch(errMessage => {
    console.warn(errMessage)
  })

console.log(firstStudent);

console.log(`//////////////////////////////////////////`);
// use the fetch api to bring data /// fetch returns a promises
let urlAddress = `../img/saraHerranz1.jpeg`;

fetch(urlAddress)
  .then(response => {
    let imageSource = response.url;
    let image = document.createElement(`IMG`);
    image.src = imageSource;
    document.body.appendChild(image);
  })
  .catch(errMessage => {
    let createParagraph = document.createElement(`P`);
    createParagraph.innerText = errMessage;
    document.body.appendChild(createParagraph);
  })
