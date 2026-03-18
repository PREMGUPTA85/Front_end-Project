
    } else {
        todoList.appendChild(li);
    }
    console.log(inputValue);
    document.querySelector("input").value = "";
}

buttonEl.addEventListener("click", addTodo);
