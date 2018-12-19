//// use the fetch api to bring data & JSON

let exampleUrl = `https://reqres.in/api/users`;
let btn = document.querySelector(`button:nth-of-type(1)`);

let getUsers = ev => {
  fetch(exampleUrl)
    .then(response => response.json())
    // JSON = JavaScript Object Notation
    .then(obj => {
      console.log(obj.data);
      for (user of obj.data) {
        let section = document.createElement(`SECTION`);
        let firstHeading = document.createElement(`H3`);
        let secondHeading = document.createElement(`H3`);
        let image = document.createElement(`IMG`);
        firstHeading.innerText = user.first_name;
        secondHeading.innerText = user.last_name;
        image.src = user.avatar;
        section.appendChild(firstHeading);
        section.appendChild(secondHeading);
        section.appendChild(image);
        document.body.appendChild(section);
      }
    })
}

btn.addEventListener(`click`, getUsers);

let commentUrl = `http://35.156.88.18:3050/comments`;
let commentBtn = document.querySelector(`button:nth-of-type(2)`);

let getComments = ev => {
  fetch(commentUrl)
    .then(res => res.json())
    .then(commentsInfo => {
      // console.log(commentsInfo);

      for (commentInfo of commentsInfo) {
        let section = document.createElement(`SECTION`);
        let userName = document.createElement(`H3`)
        let userComment = document.createElement(`P`);
        userName.innerText = commentInfo.name;
        userComment.innerText = commentInfo.body;
        document.body.appendChild(section);
        section.appendChild(userName);
        section.appendChild(userComment);
      }
    })
    .catch(err => {
      document.write(err);
    })
}

commentBtn.addEventListener(`click`, getComments);


//////////////////////////////////////////newTask
const apiKey = `a624c671733bab56e3a1e59481f0ab93`;
let weatherBtn = document.querySelector(`button:nth-of-type(3)`);

let input = document.querySelector(`input`);
let divContainer = document.querySelector(`#container`);

const colorTemperatures = [
  {limitTemp: 40, color: `red`},
  {limitTemp: 35, color: `blue`},
  {limitTemp: 30, color: `pink`},
  {limitTemp: 20, color: `grey`},
  {limitTemp: 10, color: `orange`},
  {limitTemp: 0, color: `deepskyblue`},
  {limitTemp: -100, color: `turquoise`}
];

// console.log(colorTemperatures.find(entry => entry.limitTemp < 15));

weatherBtn.addEventListener('click', getWeather => {
    // event.preventDefault();
    let city = input.value;
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
    fetch(weatherUrl)
      .then(resWeather => resWeather.json())
      .then(weatherData => {
        console.log(weatherData);
        let img = document.createElement(`IMG`);
        let section = document.createElement(`SECTION`);
        let heading = document.createElement(`H3`);
        let tempParagraph = document.createElement(`P`);
        let span = document.createElement(`span`);
        let descriptionFooter = document.createElement(`FOOTER`);

        let cityTemp = Math.round(weatherData.main.temp-273.15);
        let icon = weatherData.weather[0].icon;
        let color = colorTemperatures.find(entry => cityTemp > entry.limitTemp).color;

        heading.innerText = weatherData.name;
        tempParagraph.innerText = `${cityTemp} °C`;
        descriptionFooter.innerText = weatherData.weather[0].description;
        img.src = `http://openweathermap.org/img/w/${icon}.png`;

        section.appendChild(heading);
        section.appendChild(tempParagraph);
        section.appendChild(descriptionFooter);
        descriptionFooter.appendChild(span);
        span.appendChild(img);
        divContainer.appendChild(section);

        section.style.background = color;
      })

      // .catch(errorMsg => {
      //   console.error(`The city you have typed does not exist!`);
      // })

})
