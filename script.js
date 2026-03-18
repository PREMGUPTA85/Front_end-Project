
    if (inputValue === "") {
        alert("Please enter a valid value");
    } else {
        todoList.appendChild(li);
    }
    console.log(inputValue);
    document.querySelector("input").value = "";
}

buttonEl.addEventListener("click", addTodo);
