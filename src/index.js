import './style.css';
// Selecting the modal
var modal = document.querySelector('#modal');

// Selecting the 'Add' button
var addButton = document.getElementById('add');

// Adding event listener to the 'Add' button to open the modal
addButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Selecting all elements with class 'close' (assuming there are multiple close buttons)
var closeButton = document.querySelector('.close');

// Adding event listeners to all 'close' buttons
closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
});


var addTodoButton = document.querySelector('#addTodoBtn');

// Adding event listeners to all 'addTodoBtn' buttons
addTodoButton.addEventListener('click', function () {
    // Get the values from the input fields
    var todoInput = document.getElementById('todoInput').value;
    var descriptionInput = document.getElementById('descriptionInput').value;
    var selectedDate = document.getElementById('selectedDate').value;
    var priority = document.getElementById('priority').value;

    // Create a new todo item element
    var todoItem = document.createElement('div');
    todoItem.textContent = todoInput + ' - ' + descriptionInput + ' - ' + selectedDate + ' - ' + priority;

    // Append the todo item to the todo list
    var todoList = document.getElementById('todo-list');
    todoList.appendChild(todoItem);

    // Close the modal after adding todo
    modal.style.display = 'none';
});
