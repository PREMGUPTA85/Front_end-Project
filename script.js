
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    // Cheack input validation
    if (inputValue === "") {
        alert("Please enter a valid value");
    } else {
        todoList.appendChild(li);
    }
    console.log(inputValue);
    document.querySelector("input").value = "";
}

buttonEl.addEventListener("click", addTodo);
