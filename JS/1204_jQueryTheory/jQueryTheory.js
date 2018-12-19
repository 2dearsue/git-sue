// Selectors

// $(`.intro`);
// $(`#class`);
// $(`nav li`);

// let paragraphProperties = {`display`:`block`, `color`:`#e1e1e1`, `padding`:`2vw 0`};
// let convertToCelsius = tempToKelvin => 273 - tempToKelvin;

$().ready(ev => {
  console.log(`it was loaded.whoop.`);

      $(`button`).click(ev => {
        // $(`p`).fadeToggle(500);
        // $(`p`).slideToggle(500);
        // $(`p`).toggleClass(`red`);
        $(`p`).attr(`newAttribute`, `someValue`);
        $(`p`).text(`Es ist nicht unsere Aufgabe,einander näher zu kommen,so wenig wie Sonne und Mond zueinander kommen, oder Meer und Land.`);
  })
})
