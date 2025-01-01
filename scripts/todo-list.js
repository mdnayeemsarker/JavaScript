const todoList = [
    'Learn HTML',
    'Learn CSS',
    'Learn JavaScript',
    'Learn PHP',
    'Learn Python',
    'Learn Ruby',
    'Learn Java',
    'Learn C++',
    'Learn C#',
    'Learn Swift'
];


function renderTodoList() {
    let todoHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<li>${todo}</li>`;
        todoHtml += html;
    }

    document.querySelector('.todo-list').innerHTML = todoHtml;
}

renderTodoList(); // the main idea of javascript of 3 things: save data, generate html, and render html also interactive website.

function addTodo() {
  const inputElement = document.querySelector('.todo-name');
  const name = inputElement.value;
  todoList.push(name);
  inputElement.value = ''; 
  renderTodoList();    
}


