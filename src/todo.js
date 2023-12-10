const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    // JSON.parse(localStorage.getItem("todos"));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
    // console.log(li.id);
    // console.dir(event.target.parentElement.innerText);
    // console.log(event.target.parentElement);
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const button = document.createElement("button");
    button.innerText = "✔️";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);

    const span = document.createElement("span");
    span.innerText = newTodo.text;
    li.appendChild(span);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
    // parsedTodos.forEach((item) => console.log(item)); 
    // 화살표 함수 / 위의 forEach function을 만들지 않고도 할 수 있다
}

todoList.style.textAlign = "left";