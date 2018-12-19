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

let delayRequest = url, time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch(url));
    }, time)
  })
}

// let delayRequest = url, time => {
//   let promiseCity = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(fetch(url));
//     }, time)
//   })
//    return promiseCity;
// }

let getWeatherForCity = async ev => {
  ev.preventDefault();
  let cities = inputField.value.split(`-`);
  try {

    for (city of cities) {

      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
      let res = await res.json();
      let weatherData = await res.json();

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
    }
  }
}

weatherBtn.addEventListener('click', getWeather => {

      })

      // .catch(errorMsg => {
      //   console.error(`The city you have typed does not exist!`);
      // })

})
