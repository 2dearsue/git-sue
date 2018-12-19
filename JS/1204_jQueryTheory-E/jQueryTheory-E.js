// my solution to toggle the paragraph with corresponding
// button:

// $().ready(ev => {
//
//   $(`button:first-of-type`).click(ev => {
//         $(`p:first-of-type`).fadeToggle(500);
//     })
//
//   $(`button:nth-of-type(2)`).click(ev => {
//         $(`p:nth-of-type(2)`).fadeToggle(500);
//     })
//   $(`button:last-of-type`).click(ev => {
//         $(`p:last-of-type`).fadeToggle(500);
//     })
// })


$().ready(ev => {
  $(`button`).click(ev => {
    $(`p`).hide();
    // console.log(ev.target.getAttribute(`identifier`));
    let identityAttribute = ev.target.getAttribute(`identifier`);
    $(`p[identifier=${identityAttribute}]`).show();
  })
})
