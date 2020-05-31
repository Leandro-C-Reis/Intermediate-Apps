const main = document.querySelector("main");
let searchText;

import SearchBooks from'./api.js';
import CreateElements from './DOMController.js';

// Submit is called when user send a searchText
export default function Submit()
{
  const input = document.getElementById("content"); //HTML element that contain a Text Value
  
  //verify whether the input is the same as previous searchText; if true, the function SearchBooks is not validate 
  if (searchText == input.value)
  {
    return;
  }
  
  searchText = input.value;

  //loop that clear all previous books 
  while(main.hasChildNodes())
  {
    main.removeChild(main.firstChild);
  }
  main.style.height = "0";

  //if input is empty, the search is not validate and the screen do not show books
  if (input.value == "")
  {
    return;
  }
  
  //call api function
  SearchBooks(searchText)
    .then
    (response => CreateElements(response))
    .catch
    (reject => console.warn(reject));
}
