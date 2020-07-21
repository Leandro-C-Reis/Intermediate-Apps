const input = document.getElementById("in");
const list = document.querySelector(".todoList");

var data = localStorage.getItem('data') !=  null ? JSON.parse(localStorage.getItem('data')) : [];

let counterId = 1;

if (data.length != 0)
{
    data.forEach(addTodo);
}

input.children[1].addEventListener("click", (e) => {
    e.preventDefault();
    
    counterId = data.length > 0 ? data.length + 1 : 1;

    const text = input.children[0].value;
    if (text == '') return;
    
    data.push(text);
    addTodo(text);

    localStorage.setItem('data', JSON.stringify(data));
});

function handleDeleteTodo(index)
{
    data.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(data));
    
    renderScreen();
} 

function check(id)
{
     document.getElementById(id).children[1].classList.toggle("checked");
}

function addTodo(todoText) 
{
    input.children[0].value = "";
    
    const li = document.createElement('li');
    li.setAttribute("id", counterId);
    
    li.innerHTML = `
        <input type="checkbox" value="${counterId}" onchange="check(this.value)">
        <span contenteditable="true">${todoText}</span>
        <button class="btn delete" value="${counterId - 1}" onclick="handleDeleteTodo(this.value)">Delete</button>
    `;

    list.append(li);
    list.children[counterId - 1].children[1].addEventListener('focusout', () => changeData());
    
    counterId++;
}

function changeData() 
{
    
    var changed = false;

    for (let id = 1; id < counterId; id++)
    {
        const index = id - 1;
        const text = document.getElementById(id).children[1].innerHTML;

        if (text != data[index])
        {
            data.splice(index, 1, text);
            changed = true;
        }
    }

    localStorage.setItem('data', JSON.stringify(data));

    if (changed) renderScreen();
}

function renderScreen()
{
    counterId = 1;
    const len = data.length;
    list.innerHTML = ''; 
    
    for (let text of data) addTodo(text);    
}