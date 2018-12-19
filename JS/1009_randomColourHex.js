let value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`];

let randomColourHex = function(pool) {

  let colour = [`#`];

  for (i = 1; i <= 6; i++) {
    let randomValue = Math.floor(Math.random() * pool.length);
    colour.push(pool[randomValue]);
  }

  let hexColour = colour.join(``);
  console.log(hexColour);

    document.body.style.backgroundColor = `${hexColour}`;
}

randomColourHex(value);

// let executeColourPeriodically = setInterval(randomColourHex, 1000);
