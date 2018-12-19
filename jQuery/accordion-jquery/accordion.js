$(document).ready(function(ev) {

  let allSections = $(`section`).hide();

  $(`button`).click(function() {
      allSections.slideUp();
      $(this).next().slideDown();
  })
})
