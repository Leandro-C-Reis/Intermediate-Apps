
import Submit from'./controllers/main.js';

document.getElementById("content").addEventListener("keydown", () => {
  if (event.key == 'Enter') Submit();
})

document.getElementById("submit").addEventListener("click", () => {
  Submit();
})
