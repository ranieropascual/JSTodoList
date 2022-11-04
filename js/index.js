document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('add');
  const title = document.getElementById('title');
  const table = document.getElementById('table');
  const alert = document.getElementById('alert');
  const description = document.getElementById('description');

  function addTodo () {
    if (title.value === '' || description.value === '') {
      alert.classList.remove('d-none');
      alert.innerText = 'title and description are required';
    }else{
      console.log('ok');
    }

    alert.classList.add('d-none');
    const row = table.insertRow();
    row.innerHTML = `
    <td>${title.value}</td>
    <td>${description.value}</td>
    <td class= "text-right">
    <button class="btn btn-primary mb-1">
    <i class="btn btn-danger mb-1 ml-1">
    <i class="fa fa-pencil"></i>
    </button>
    <button class="btn btn-danger mb-1 ml-1">
    <i class="fa fa-trash"></i>
    </button>
    </td>
    `;
  }

  btn.onclick = addTodo; 
});


