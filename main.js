'use strict';

{
  


  // renderTodoは、todoを引数にとり、HTMLの各要素を作成して値を入れる
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
    button.addEventListener('click', ()=>{
      if(confirm('Sure?') === false){
        return;
      }
      li.remove();
    });

    const li = document.createElement('li');
    li.appendChild(lavel);
    li.appendChild(button);


    document.querySelector('#todos').appendChild(li);

  }

  // 追加ボタンが押されたときの処理、todoを引数としてrenderTodoを呼び出す。
  document.querySelector('#add-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const input = document.querySelector('#add-form input');
    const todo = {
      title: input.value,
      isCompleted: false,
    }
    renderTodo(todo);
    input.value = '';
    input.focus();
  });

  

  






}