$(document).ready(function(ev) {

  $(`form`).submit(function(ev) {
    ev.preventDefault();
    let listItem = document.createElement(`LI`);
    let taskName = $(`input`).val();

        listItem.innerHTML =`<span>${taskName}</span><button>close this task</button>`;

      $(`section`).append(listItem);
      $(`input`).val(``);

      $(`li > button`).click(function(ev) {
        $(this).parent().remove();
      })
  })

})

// DIFFERENCE OR WHY ARROW FUNCTIONS....
// let newArr = array.map(item => item * 2).filter();

// let newArr = array.map(function(item) {
//     return item * 2;
// })
