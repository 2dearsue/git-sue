const apiKey = `a624c671733bab56e3a1e59481f0ab93`;

const colorTemperatures = [
  {limitTemp: 40, color: `red`},
  {limitTemp: 35, color: `blue`},
  {limitTemp: 30, color: `pink`},
  {limitTemp: 20, color: `grey`},
  {limitTemp: 10, color: `orange`},
  {limitTemp: 0, color: `deepskyblue`},
  {limitTemp: -100, color: `turquoise`}
];

let makeAllRequestsSimultaneously = collectionOfCities => {
  let allCitiesPromises = [];
  for(city of collectionOfCities) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    let promiseCity = new Promise((resolve, reject) => {
      resolve($.ajax(url));
      })
    allCitiesPromises.push(promiseCity);
    }
  return Promise.all(allCitiesPromises);
  }

let getWeatherForCity = async function(ev) {
  ev.preventDefault();

  let cities = $(`input`).val().split(`-`);
  let intervalCounter = 0;

    try{

      let weatherData = await makeAllRequestsSimultaneously(cities);

      let citiesInterval = setInterval( async () => {
        if (intervalCounter === weatherData.length - 1) {
          clearInterval(citiesInterval);
        }
        let section = document.createElement('SECTION');
        let heading = document.createElement('H3');
        let tempParagraph = document.createElement('P');
        let desc = document.createElement('SPAN');
        let littleImage = document.createElement('IMG');
        let footer = document.createElement('FOOTER');

        let tempInCelsius = Math.round(weatherData[intervalCounter].main.temp - 273);
        let color = colorTemperatures.find(entry => tempInCelsius > entry.limitTemp).color;

        heading.innerText = weatherData[intervalCounter].name;
        tempParagraph.innerHTML = `<b>${tempInCelsius}</b> <sup>O</sup>C`;
        desc.innerText = weatherData[intervalCounter].weather[0].description;
        littleImage.src = `http://openweathermap.org/img/w/${weatherData[intervalCounter].weather[0].icon}.png`;
        footer.append(desc, littleImage);
        section.append(heading, tempParagraph, footer);
        section.style.background = color;
        $(`#container`).append(section);
        $(`input`).val(``);
        $(`input`).attr(`placeholder`, `Type a city`);
        intervalCounter++;
      }, 200)

    }catch(e) {
      console.warn(e);
    }
}

$(document).ready(ev => {

  $(`form`).submit(getWeatherForCity);
})
