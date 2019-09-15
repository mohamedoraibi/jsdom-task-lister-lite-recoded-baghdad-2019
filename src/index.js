document.getElementById("create-task-form").addEventListener("submit", updateList);

function updateList(){
  
  let inputValue=document.getElementById('new-task-description').value;
  var ul = document.getElementById("tasks");
  var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
  ul.appendChild(li);
}





