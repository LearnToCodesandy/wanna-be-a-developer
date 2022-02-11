let inputField = document.querySelector('#todoItem');
let addTodoBtn = document.querySelector('.btn-submit');
let todoListContainer = document.querySelector('.todo-list-container');


let todos = localStorage.length !== 0 ? [...JSON.parse(localStorage.getItem('data'))]: [];


let addTodosToLocalStorage = ()=>{
    let todoItem = inputField.value;
        let data = {
            todoItem  :todoItem,
            isDone : false
        };
        todos.push(data);
        localStorage.setItem('data',JSON.stringify(todos));
        inputField.value = '';
}

addTodoBtn.addEventListener('click',e=>{
    e.preventDefault();
    addTodosToLocalStorage();
    loadTodos();
});

let createTodoDOMItem = (todo,index)=>{
    
let div = `
    <div class="todo-item-container">
        <li class="todo-item">${todo.todoItem}</li>
        <div class="btn-group">
            <button class="btn btn-done" onClick='handleDone(${index})'>Done</button>
            <button class="btn btn-delete" onClick='handleDelete(${index})'>Delete</button>
        </div>
    </div> 
    `;
todoListContainer.innerHTML += div;
}


let loadTodos = ()=>{
    if(localStorage.length !== 0) 
       {    let todosFromLocalStorage = JSON.parse(localStorage.getItem('data'))
            // here we load the todos as DOM elements
            todoListContainer.innerHTML = '';
            todosFromLocalStorage.map((todo,index)=>{
                createTodoDOMItem(todo,index);    
            }); 
       }
    else{
        let p = document.createElement('p');
        p.classList.add('center-text');
        p.textContent = 'No TODOs yet...'
        todoListContainer.appendChild(p);
    }
    if(!todoListContainer.hasChildNodes()){

        let p = document.createElement('p');
        p.classList.add('center-text');
        p.textContent = 'No TODOs yet...'
        todoListContainer.appendChild(p);
    }
}

loadTodos();

function handleDone(index){
    let storage = JSON.parse(localStorage.getItem('data'));
    let newStorage = [];
    storage.forEach((store,indexIn)=>{
        if (indexIn === index) {
            store.isDone = !store.isDone;
        }else{}
        newStorage.push(store);
    });

    localStorage.setItem('data',JSON.stringify(newStorage));
    let lis = document.querySelectorAll('.todo-item');
    lis[index].classList.toggle('task-done');
}

function handleDelete(index){
    let storage= JSON.parse(localStorage.getItem('data'));
    storage.splice(index,1);
    localStorage.setItem('data',JSON.stringify(storage));
    loadTodos();
}




