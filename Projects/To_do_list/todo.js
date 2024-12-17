// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTodos);

// Add task event
addBtn.addEventListener('click', addTodo);

// Function to load tasks from localStorage
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(task => {
        addTaskToUI(task);
    });
}

// Function to add a task
function addTodo() {
    const task = todoInput.value.trim();
    if (task === '') return alert('Please enter a task!');
    
    // Add task to UI
    addTaskToUI(task);

    // Save task to localStorage
    saveTodoToLocalStorage(task);

    // Clear input
    todoInput.value = '';
}

// Function to add task to the UI
function addTaskToUI(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);

    // Add delete event to the button
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        deleteTodoFromLocalStorage(task);
    });
}

// Function to save task to localStorage
function saveTodoToLocalStorage(task) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to delete task from localStorage
function deleteTodoFromLocalStorage(task) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = todos.filter(t => t !== task);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}
