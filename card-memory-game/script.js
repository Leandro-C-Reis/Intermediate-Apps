const alphabetic = ['A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'];

let counter = 0;
let selected = 0;
let lastElement = { id: 0 };

function generateItems() 
{   
    const container = document.getElementById('container');
    const indexes = [];
    
    let count = 0;
    while (count != 12)
    {
        let index = Math.round(Math.random() * (11));

        while (indexes.includes(index))
        {   
            index = Math.round(Math.random() * (11));
        }
        
        indexes.push(index);

        container.innerHTML += `
        <div id="${count + 1}" class="card" value="${alphabetic[index].toUpperCase()}" onclick="animation(this)">
            <div class="front"></div>
            <div class="back">${alphabetic[index].toUpperCase()}</div>
        </div>
        `

        count++;
    }
}

generateItems();

function animation(element) {
    if (element.classList.contains("hidden")) return;
    if (element.id == lastElement.id) return;
    
    element.classList.add('animation');

    selected = selected == 1 ? 2 : 1; 

    if (selected == 2) compareElements(lastElement, element);

    lastElement = element;
}

function compareElements(last, element) {
    setTimeout(() => {
        element.classList.remove('animation');
        last.classList.remove('animation');
    }, 300);

    if (element.getAttribute('value') == last.getAttribute('value')) 
    {
        setTimeout(() => {
            element.classList.add('hidden');
            last.classList.add('hidden');
            counter++;
            if (counter == 6) winScreen();
        }, 300);
    }
    
    selected = 0;
}

function winScreen() {
    document.body.innerHTML = '<div class="win">CONGRATULATIONS!</div>';
    setTimeout(() => {
        document.body.innerHTML = '<div id="container"></div>'
        generateItems();
        counter = 0;
    }, 3000);
    
}