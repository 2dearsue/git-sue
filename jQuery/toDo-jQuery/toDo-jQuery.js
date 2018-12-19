document.addEventListener('DOMContentLoaded', ev => {
  let task = document.querySelector('input'),
      form = document.querySelector('form');

  let deleteTask = (ev) => {
    let target = ev.currentTarget,
        targetParent = target.parentElement,
        sec = document.querySelector('section');

    sec.removeChild(targetParent);
  }

  let createTask = (ev) => {
    let taskName = task.value,
        listItem = document.createElement('LI'),
        section = document.querySelector('section');

    listItem.innerHTML = `<span>${taskName}</span><button>Close this task</button>`;
    section.append(listItem);
    task.value = '';
    ev.preventDefault();

    setTimeout(() => {
      listItem.classList.add('fadeIn');
    }, 0);

    let btn = document.querySelectorAll('li button');

    for (let btnCount = 0; btnCount < btn.length; btnCount++) {
      btn[btnCount].addEventListener('click', deleteTask);
    }

  }

  form.addEventListener('submit', createTask);
})
