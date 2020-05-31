
// Promise that consult a google api and return an array with books information
export default function SearchBooks(search) 
{
  return new Promise((resolve, reject) => 
  {  
    var xhr = new XMLHttpRequest();
  
    //Api request metods
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=16`);
    xhr.send(null);
    
    //read the state of response and return metod
    xhr.onreadystatechange = () => 
    {
      //readyState 4 is sucess state of request
      if (xhr.readyState === 4)
      {
        //status is the validation of request
        if (xhr.status === 200)
        {
          resolve(JSON.parse(xhr.responseText));
        }
        else
        {
          reject("Erro na requisição");
        }
      }
    }
  })
}