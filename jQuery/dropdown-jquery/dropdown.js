$(document).ready(function(ev) {

  $(`nav > li`).click(function(ev) {
    ev.stopPropagation();
    $(`ul`).hide();
    $(this).children(`ul`).show();
    $(`li.selected`).children(`ul`).hide();
    $(`li.selected`).removeClass(`selected`);
    $(this).addClass(`selected`); // class doesn't exist in css
  })

  $(`body`).click(function(ev) {
    $(`ul`).hide();
  })

})


/// my solution try:

// $(document).ready(function(ev) {
//
//   let text = $(`nav > li > ul`).hide();
//
//   $(`nav > li`).click(function() {
//
//     $(this).children().fadeIn();
//     $(this).children().addClass(`selected`);
//
//     let selectedItem = $(this).children().hasClass(`selected`);
//
//     $(`nav > li`).click(function() {
//       if (selectedItem) {
//         $(this).children().removeClass(`selected`);
//         $(this).children().fadeOut();
//
//       } else {
//         $(this).children().addClass(`selected`);
//       }
//     })
//
//   })
// })
