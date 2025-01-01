const todoList = [
    { name: 'Learn HTML', date: '2023-01-01' },
    { name: 'Learn CSS', date: '2023-01-02' },
    { name: 'Learn JavaScript', date: '2023-01-03' },
    { name: 'Learn PHP', date: '2023-01-04' },
    { name: 'Learn Python', date: '2023-01-05' },
    { name: 'Learn Ruby', date: '2023-01-06' },
    { name: 'Learn Java', date: '2023-01-07' },
    { name: 'Learn C++', date: '2023-01-08' },
    { name: 'Learn C#', date: '2023-01-09' },
    { name: 'Learn Swift', date: '2023-01-10' }
];

function renderTodoList() {
    let todoHtml = '';

    for (let i = 0; i < todoList.length; i++) 
    { 
        const todoObject=todoList[i]; 
        const { name, date }=todoObject; const
        html=`<div>${name} </div>
        <div> ${date} </div> <button class="delete-todo-button" onclick="todoList.splice(${i}, 1); renderTodoList()">Delete</button>`;
        todoHtml += html;
    }

    document.querySelector('.todo-list-div').innerHTML = todoHtml;
}

renderTodoList(); // the main idea of javascript of 3 things: save data, generate html, and render html also interactive website.

function addTodo() {
    const inputElement = document.querySelector('.todo-name');
    const dateInputElement = document.querySelector('.todo-date');
    const name = inputElement.value;
    const date = dateInputElement.value;
    todoList.push({ name, date });
    inputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
}
