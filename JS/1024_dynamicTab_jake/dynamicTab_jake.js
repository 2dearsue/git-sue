// pills refactored with jQuery:

$(document).ready(function(ev) {

  $(`nav > li`).click(function(ev) {

    $(`nav > li`).removeClass(`selected`);
    $(this).addClass(`selected`);

    $(`section`).removeClass(`active`);
    let targetAttribute = $(this).attr(`identifier`);
    $(`section[identifier=${targetAttribute}]`).addClass(`active`);
  })


// Multiple Events:

  $(`button:nth-of-type(1)`).on({
    click: function(ev) {
      console.log(`you have clicked.`);
    },
    mouseover: function(ev) {
      console.log(`you have hovered.`);
    }
  })

  $(`button:nth-of-type(2)`).on({
    mouseenter: function(ev) {
      $(this).text(`Welcome! Stay here forever.`);
    },
    mouseleave: function(ev) {
      $(this).text(`Don't go please.`);
    }
  })

})
