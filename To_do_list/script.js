
// const buttonEl = document.querySelector("#button");
// const todoList = document.querySelector("#todo_list");

// function addTodo() {
//     const li = document.createElement("li");
//     let inputValue = document.querySelector(".input").value;
//     const t = document.createTextNode(inputValue);
//     li.appendChild(t);

//     // Cheack input validation
//     if (inputValue === "") {
//         alert("Please enter a valid value");
//     } else {
//         todoList.appendChild(li);
//     }
//     console.log(inputValue);
//     document.querySelector("input").value = "";
// }

// // add a remove button in each list item
// function addRemoveButton(li) {
//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     removeButton.addEventListener("click", function() {
//         todoList.removeChild(li);
//     });
//     li.appendChild(removeButton);
// }
// //it's html code is 



// buttonEl.addEventListener("click", addTodo);


// class method// class method
let form1 = document.querySelector("#fi");
let addinput1 = document.querySelector("#addtask");
let tasklist1 = document.querySelector("#tasklist");

form1.addEventListener("submit", (evt)=> {
    evt.preventDefault();

    let tasktext = addinput1.value.trim();
    if(tasktext == ""){
        alert("Please enter a task");
        return;
    }

    let elementlist = document.createElement("li");
    elementlist.textContent = tasktext;
    tasklist1.appendChild(elementlist);
    addinput1.value = ""; // clears the input box;

    let elementdelete = document.createElement("button");
    elementdelete.innerText = "x";
    elementdelete.className = "deletebtn";
    elementlist.append(elementdelete);

});

tasklist1.addEventListener("click", (evt)=> {
    if(evt.target.classList.contains("deletebtn")){
        evt.target.parentElement.remove();
    }
});