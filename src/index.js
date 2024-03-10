// Selecting the modal
var modal = document.querySelector('#modal');

// Selecting the 'Add' button
var addButton = document.getElementById('add');

// Adding event listener to the 'Add' button to open the modal
addButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Selecting all elements with class 'close' (assuming there are multiple close buttons)
var closeButtons = document.querySelectorAll('.close');

// Adding event listeners to all 'close' buttons
closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});

var addTodoButton = document.querySelector('#addTodoBtn');

// Adding event listener to the 'Add Todo' button
addTodoButton.addEventListener('click', function () {
    // Get the values from the input fields
    var todoInput = document.getElementById('todoInput').value;
    var descriptionInput = document.getElementById('descriptionInput').value;
    var selectedDate = document.getElementById('selectedDate').value;
    var priority = document.getElementById('priority').value;

    // Storing values in local storage
    localStorage.setItem("todoinput", todoInput);
    localStorage.setItem("descriptionInput", descriptionInput);
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("priority", priority);

    // Create a new todo item element
    var todoItem = document.createElement('div');
    todoItem.textContent = todoInput + ' - ' + descriptionInput + ' - ' + selectedDate + ' - ' + priority;

    // Append the todo item to the todo list
    var todoList = document.getElementById('addlist');
    todoList.appendChild(todoItem);

    var todoObject = {
        todo: todoInput,
        description: descriptionInput,
        date: selectedDate,
        priority: priority
    };

    // Get existing todos from local storage or initialize an empty array
    var todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Add the new todo object to the array
    todos.push(todoObject);

    // Save the updated array back to local storage
    localStorage.setItem('todos', JSON.stringify(todos));


    // Close the modal after adding todo
    modal.style.display = 'none';

    renderTodos();

});

function renderTodos() {
    var todoList = document.getElementById('addlist');
    todoList.innerHTML = ''; // Clear the existing list

    var todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Loop through todos and create HTML elements for each todo
    todos.forEach(function (todoObject) {
        var todoItem = document.createElement('div');
        todoItem.textContent = todoObject.todo + ' - ' + todoObject.description + ' - ' + todoObject.date + ' - ' + todoObject.priority;
        todoList.appendChild(todoItem);
    });
}

