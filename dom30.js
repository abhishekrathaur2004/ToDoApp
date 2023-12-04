// todo-app complete 

// submitevent lgega form pe

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);
// console.log(todoInput.textContent);
const ul = document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(todoInput.textContent);
    // console.log(todoInput.value);
    const newTodotext = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `<span class="text">${newTodotext}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHTML;
    console.log(newLi);
    todoInput.value = "";
    ul.append(newLi);
    // jaise user submit kre phir wo add ho jaye ek li me 
})


// done and remove k liye alag alag event  ni add krenge 
// bas event delegation se krenge wo apne ap dekh lega ki kispe click hua hai


ul.addEventListener("click",(e)=>{
    // console.log(e.target);
    // check if user click on done 

    if(e.target.classList.contains("done")){
        // console.log("You have to outline");
        // you have to go to its parent brother
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "Line-through";
    }
    
    if(e.target.classList.contains("remove")){
        // console.log("You have to remove it");
        const targettedLi = e.target.parentNode.parentNode;
        // console.log(targettedLi);
        targettedLi.remove();
    }

})

// yeah its working
