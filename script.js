const taskInput = document.getElementById("taskinput");
const taskList = document.getElementById("tasklist");

function addTask(){
    const taskText = taskInput.value.trim();

if(taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.classList.add("task");


// click event to remove task

taskItem.addEventListener("click", function(){
    taskList.removeChild(taskItem)
});

taskList.appendChild(taskItem);

taskInput.value = "";


};


