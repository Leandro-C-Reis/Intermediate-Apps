
const main = document.querySelector("main");
let books; //Array of books (byDefault is undefined)

//create all HTML elements onScreen based on Promise response
export default function CreateElements(response)
{
  books = response;

  for (let i = 0, n = response.items.length; i < n; i++)
  {
    //main div element
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", `book${i}`);
    mainDiv.setAttribute("class", "responsive");
    
    let a = document.createElement("a");
    //creating a image element
    let image = document.createElement("img")
    image.setAttribute("id", "image");
    image.setAttribute("src", '');
    a.append(image);
    
    //aplicate image into a new div with class "image" in a main div
    let div = document.createElement("div");
    div.setAttribute("class", "image");
    div.appendChild(a);
    mainDiv.appendChild(div);

    //creating a "content" div and childs components
    let content = document.createElement("div");
    let span = document.createElement("span");
    let spanID = document.createElement("span");
    let strong = document.createElement("strong");

    content.setAttribute("class", "content");

    //creating a title
    span.setAttribute("id", "title");
    a = document.createElement("a");
    a.append(span);
    content.appendChild(a);

    //clearing span
    span = document.createElement("span");
    
    //creating a author
    span.appendChild(strong);
    strong.innerHTML = "Author:"
    spanID.setAttribute("id", "author");
    span.appendChild(spanID);
    content.appendChild(span);

    //clearing span and strong and spanID
    span = document.createElement("span");
    strong = document.createElement("strong");
    spanID = document.createElement("span");

    //creating a publisher
    span.appendChild(strong);
    strong.innerHTML = "Publisher:"
    spanID.setAttribute("id", "publisher");
    span.appendChild(spanID);
    content.appendChild(span);

    //clearing span and strong and spanID
    span = document.createElement("span");
    strong = document.createElement("strong");
    spanID = document.createElement("span");

    //creating a published
    span.appendChild(strong);
    strong.innerHTML = "Published:"
    spanID.setAttribute("id", "published");
    span.appendChild(spanID);
    content.appendChild(span);

    //clearing span
    span = document.createElement("span");

    //creating a description
    span.setAttribute("id", "description");
    content.appendChild(span);
    
    mainDiv.appendChild(content);
    main.appendChild(mainDiv);
  }    
  Render();    
}

//Put all books on HTML Elements
function Render()
{
  let n = books.items.length;
  let halfN = Math.round(n/2);

  main.style.height = `${(halfN* 200) + (halfN * 10)}px`;

  for (let i = 0; i < n; i++)
  {
    let title = document.querySelector(`#book${i} #title`);
    let author = document.querySelector(`#book${i} #author`);
    let publisher = document.querySelector(`#book${i} #publisher`);
    let published = document.querySelector(`#book${i} #published`);
    let img = document.querySelector(`#book${i} #image`);
    let description = document.querySelector(`#book${i} #description`);
    
    document.querySelector(`#book${i} .content a`).setAttribute("href", books.items[i].volumeInfo.canonicalVolumeLink);
    document.querySelector(`#book${i} .content a`).setAttribute("target", "_blank");
    document.querySelector(`#book${i} .image a`).setAttribute("href", books.items[i].volumeInfo.canonicalVolumeLink);
    document.querySelector(`#book${i} .image a`).setAttribute("target", "_blank");
    
    title.innerHTML = books.items[i].volumeInfo.title == undefined ? "n/a" : books.items[i].volumeInfo.title;
    author.innerHTML = books.items[i].volumeInfo.authors == undefined ? "n/a" : books.items[i].volumeInfo.authors;
    publisher.innerHTML = books.items[i].volumeInfo.publisher == undefined ? "n/a" : books.items[i].volumeInfo.publisher;
    published.innerHTML = books.items[i].volumeInfo.publishedDate == undefined ? "n/a" : books.items[i].volumeInfo.publishedDate;
    description.innerHTML = books.items[i].volumeInfo.subtitle == undefined ? "" :books.items[i].volumeInfo.subtitle;

    let Image = books.items[i].volumeInfo.imageLinks == undefined ? "https://books.google.com.br/googlebooks/images/no_cover_thumb.gif" : books.items[i].volumeInfo.imageLinks.thumbnail;
    img.setAttribute("src", Image);
  }
}
