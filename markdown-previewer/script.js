const input = document.getElementById("in");
const output = document.getElementById("out");

const DomElements = {
    h1 : '<h1>',
    h2 : '<h2>',
    h3 : '<h3>',
    h4 : '<h4>',
    h5 : '<h5>',
    h6 : '<h6>',
    p: '<p>',
    br: '<br/>'
} 

input.addEventListener("keydown", () => setTimeout(() => process()));

function process() {
    const text = input.value;
    let textout = '';
    let currentTag = '';
    const arr = [''];
    let i = 0;

    function closeTag() {
        if (currentTag != '') return "</" + currentTag.substr(1);
        else return '';
    }

    function header1(letter, index, array) {
        closeTag();
        textout += DomElements.h1;
        currentTag = DomElements.h1;
    }

    function breakLine(letter, index, array) {
        if ((array[index - 1] == '\n' || text.substr(index - 3, 3) != '.  ') && currentTag == DomElements.p) 
        {
            textout += ' ';
            return;
        }
        textout += closeTag();
        //if (currentTag != DomElements.p) textout += DomElements.br;
        textout += letter;
        currentTag = '';
    }

    function def(letter, index, array) {
        if (currentTag === '')
        {
            textout += closeTag();
            textout += DomElements.p;
            currentTag = DomElements.p;
        }
        textout += letter;
    }

    [...text].forEach( (letter, index, array) => {

        /* switch(letter)
        {
            case '#':
                header1(letter, index, array);
                break;
            case '\n':
                breakLine(letter, index, array);
                break;
            default:
                def(letter, index, array);
        } */

        switch(letter) {
            case '\n':
                currentTag = ''
                arr.push('');
                i++;
                break;
            default:
                arr[i] += letter;
        }
    });
    console.log(arr);

    output.innerHTML = textout;
}


