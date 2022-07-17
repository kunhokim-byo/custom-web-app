const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];
const TODO_KEY = "todos"
//////////////////////////////////////////////////////

function saveToDos(){
    localStorage.setItem(TODO_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    button.innerText = "X";
    toDoList.appendChild(li);

    button.addEventListener("click", deleteTodo);
   
}



function handleTodoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    saveToDos();
    paintToDo(newTodoObj);
}




toDoForm.addEventListener("submit", handleTodoSubmit);
const savedTodos = localStorage.getItem(TODO_KEY);

// function sayHello(item){
//     console.log("this is the turn of ", item);
// }

if(savedTodos){
    //JSON.parse = String을 js가 알아 들을 수 있는 array 로 바꿔줌.
    const paresedToDos = JSON.parse(savedTodos);

    toDos = paresedToDos;
    paresedToDos.forEach(paintToDo);
}

