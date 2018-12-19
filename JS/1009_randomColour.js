

let randomColour = function() {

  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);

  console.log(r, g, b);

  let rgb = [r, g, b];

  console.log(rgb);

  // document.body.style.backgroundColor = `rgb(${rgb})`;
  document.body.style.backgroundColor = `rgb(${[...rgb]})`;

}

let executeColourPeriodically = setInterval(randomColour, 1000);
