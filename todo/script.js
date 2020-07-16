const input = document.getElementById("in");
const list = document.querySelector(".todoList");

if (localStorage.getItem("counterId") == !null)
{
    localStorage.setItem("counterId", 1);
}

let counterId = localStorage.getItem("counterId")

input.children[1].addEventListener("click", (e) => 
{
    e.preventDefault();
    
    const inputText = input.children[0].value;
    input.children[0].value = "";
    
    if (inputText == "") return;
    
    const li = document.createElement('li');
    li.setAttribute("id", counterId);
    
    li.innerHTML = `
    <input type="checkbox" value="${counterId}" onchange="check(this.value)">
    <span contenteditable="true">${inputText}</span>
    <button class="btn delete" value="${counterId}" onclick="handleDeleteTodo(this.value)">Delete</button>
    `;
    
    list.append(li);
    localStorage.setItem("counterId", counterId++);
});

function handleDeleteTodo(id)
{
    document.getElementById(id).remove();
} 

function check(id)
{
     document.getElementById(id).children[1].classList.toggle("checked");
}