$().ready(function(ev) {
  // ev.preventDefault();

  const apiKey = `a624c671733bab56e3a1e59481f0ab93`;

  $(`button`).click(async ev => {

    //either this syntax:

    $.fetch(weatherUrl)
    .done(data => {
      console.log(data);
    })
    .fail(err => {
      console.log(err);
    })

    // or this syntax:

    let dataWeather = await $.ajax(dataWeather);
    console.log(dataWeather);

  })
})
