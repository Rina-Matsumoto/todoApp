'use strict';

{
  
  // 追加ボタンを押したときに入力値を受け取って表示させる
  // ☓ボタンを押したときに削除する
  // ページを再読込したときに値を保持する（inputの値）
  // ページを再読込したときに値を保持する（checkboxの値）
  // チェックされたものをリセットボタンでまとめて削除する



  let todos;


  // ローカルストレージのtodosというキーに対応する値がnullの場合、変数todosに空の配列を入れる。nullでなければ、ローカルストレージのtodosの値を取得し、オブジェクトに変換して配列に入れる。
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }


  // renderTodoは、todoを引数にとり、HTMLの各要素を作成して値を入れる（タグと中身を作る）
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


  // 配列todosを展開し、HTMLを作っている
  const renderTodos = () => {
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  };



  // 追加ボタンが押されたときの処理、todo(入力値を含む)を引数としてrenderTodoを呼び出す。
  document.querySelector('#add-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const input = document.querySelector('#add-form input');
    const todo = {
      title: input.value,
      isCompleted: false,
    }
    // todoオブジェクトのデータを使って、HTML要素を作る
    renderTodo(todo);

    // ここからローカルストレージのための処理
    // 配列todosに追加する
    todos.push(todo);
    // ローカルストレージの更新
    localStorage.setItem('todos', JSON.stringify(todos));
    
    input.value = '';
    input.focus();
  });


  // これによって、配列todosが展開され、それぞれのオブジェクトにrenderTodoがはしる。
  renderTodos();
  

  






}