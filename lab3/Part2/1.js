
    let taskInput = document.getElementById("inputNewTask")
    let buttonAdd = document.getElementById("buttonAdding")
    let tasksList = document.getElementById("tasksList")


    function add(){
        let task = taskInput.value

        let taskItem = document.createElement('li')
        let checkBox = document.createElement("input")
        checkBox.type='checkbox'
        checkBox.className = 'checkBox'
        checkBox.onchange = function(){
            if(this.checked){
                textSpan.style.textDecoration = 'line-through';
                textSpan.style.color = 'grey';
            }
            else{
                textSpan.style.textDecoration='none'
                textSpan.style.color = 'black';
            }
        }

        let textSpan = document.createElement('span');
        textSpan.className = 'spanText'
        textSpan.textContent = task;

        let deleteItem = document.createElement('button')
        deleteItem.innerHTML = '<img src = "recycling.png" width="20px">';
        deleteItem.className = "deleteButton"
        deleteItem.onclick = function(){
            tasksList.removeChild(taskItem)
        }
        taskItem.appendChild(checkBox)
        taskItem.appendChild(textSpan); 
        taskItem.appendChild(deleteItem)
        // tasksList.appendChild(taskItem)
        tasksList.insertBefore(taskItem, tasksList.firstElementChild)

        taskInput.value = ""
    }

    buttonAdd.addEventListener("click",add)
