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

input.addEventListener("keydown", () => setTimeout(() => TextFormater()));

function TextFormater() {
    const arr = [''];
    let i = 0;

    [...input.value].forEach( (letter) => {
        switch(letter) {
            case '\n':
                arr.push('');
                i++;
                break;
            
            case '_':
                if (arr[i] != '_')
                {
                    arr.push('');
                    i++;
                    arr[i] += letter;
                }
                else {
                    arr.push('');
                    i++;
                    arr[i] += letter;
                    arr.push('');
                    i++;
                }
                break;

                default:
                arr[i] += letter;
        }
    });
    console.log(arr);
    Render(arr);
}

function Render(array) {
    let textout = '';
    let isP = false;
    let isBold = false;
    let nextOff = false;

    array.map((text, index, arr) => {
        const next = arr[index + 1];

        let len = text.length;
        if (nextOff == true) {
            nextOff = false;
            return;
        }

        if (text.substr(0, 6) == '######')
        {
            textout += closeTag(DomElements.p);
            textout += DomElements.h6 + text.substr(6) + closeTag(DomElements.h6);
            isP = false;
        }
        else if (text.substr(0, 5) == '#####')
        {
            textout += closeTag(DomElements.p);
            textout += DomElements.h5 + text.substr(5) + closeTag(DomElements.h5);
            isP = false;
        }
        else if (text.substr(0, 4) == '####')
        {
            textout += closeTag(DomElements.p);
            textout += DomElements.h4 + text.substr(4) + closeTag(DomElements.h4);
            isP = false;
        }
        else if (text.substr(0, 3) == '###')
        {
            textout += closeTag(DomElements.p);
            textout += DomElements.h3 + text.substr(3) + closeTag(DomElements.h3);
            isP = false;
        }
        else if (text.substr(0, 2) == '##')
        {
            textout += closeTag(DomElements.p);
            textout += DomElements.h2 + text.substr(2) + closeTag(DomElements.h2);
            isP = false;
        }
        else if (text[0] == '#')
        {
            textout += closeTag(DomElements.p);
            textout += DomElements.h1 + text.substr(1) + closeTag(DomElements.h1);
            isP = false;
        }
        else if (text == '_' && next == '_')
        {
            isBold = true ? false: true;
        }
        else 
        {
            if (next != undefined) 
            {
                if (next.length >= 3) {
                    for (let i = 0; i < next.length; i++)
                    {   
                        if (next[i] != '=') break;
                        if (i == next.length - 1)
                        {
                            textout += closeTag(DomElements.p);
                            textout += DomElements.h1 + text.substr(0) + closeTag(DomElements.h1);
                            isP = false;
                            nextOff = true;
                            return;
                        }
                    }
                    for (let i = 0; i < next.length; i++)
                    {   
                        if (next[i] != '-') break;
                        if (i == next.length - 1)
                        {
                            textout += closeTag(DomElements.p);
                            textout += DomElements.h2 + text.substr(0) + closeTag(DomElements.h2);
                            isP = false;
                            nextOff = true;
                            return;
                        }
                    } 
                }
            }

            if (isBold == true)
            {
                textout += text.bold();
            }

            else if (isP == true && len > 0) {
                if (text.substr(len - 3) == '.  ') textout += text + DomElements.br;
                else textout += ' ' + text;
            }
            else {          
                textout += len > 0 ? DomElements.p + text : '';
                isP = true;
            }
        }
    });

    output.innerHTML = textout;
}

function closeTag(currentTag) {
    if (currentTag != '') return "</" + currentTag.substr(1);
    else return '';
}


/* 
# Titulo 1
## Titulo 2
### Titulo 3
#### Titulo 4
##### Titulo 5
###### Titulo 6

Paragrafo 1.  

Paragrafo 2

Teste
===

Teste 2
---

Text __Bold__

if (text[j] == '_')
                {
                    while (text[j + 1] != undefined || (text[j] == '_' && text[j + 1]))
                    {
                        text[j]
                    }
                    
                }
            
*/