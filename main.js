'use strict';

{
  
  const todos = [
    {title: 'aaa', isCompleted: false},
    {title: 'bbb', isCompleted: false},
    {title: 'ccc', isCompleted: false},
  ];

  const renderTodo = (todo)=>{
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = todo.isCompleted;

    const span = document.createElement('span');
    span.textContent = todo.title;

    const lavel = document.createElement('lavel');
    lavel.appendChild(input);
    lavel.appendChild(span);

    const button = document.createElement('button');
    button.textContent = 'X';

    const li = document.createElement('li');
    li.appendChild(lavel);
    li.appendChild(button);


    document.querySelector('#todos').appendChild(li);

  }


  const renderTodos = ()=>{
    todos.forEach((todo)=>{
      renderTodo(todo);
    });
  };
  renderTodos();
  






}