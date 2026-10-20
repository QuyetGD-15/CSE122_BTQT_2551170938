let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');
let taskCount = document.getElementById('taskCount');

function updateCount() {
    let uncompletedTasks = document.querySelectorAll('.task-item:not(.completed)').length;
    taskCount.innerText = uncompletedTasks;
}

function addTask() {
    let text = taskInput.value.trim();
    if (text === '') return;

let li = document.createElement('li');
li.className = 'task-item';
li.innerHTML = `
        <div class="d-flex align-items-center flex-grow-1">
            <span class="custom-checkbox"></span>
            <span class="task-text">${text}</span>
        </div>
        <button class="btn-delete">Xoá</button>
    `;

li.querySelector('.custom-checkbox').addEventListener('click', function() {
    li.classList.toggle('completed');
    updateCount();
});

li.querySelector('.task-text').addEventListener('click', function() {
    li.classList.toggle('completed');
    updateCount();
});

li.querySelector('.btn-delete').addEventListener('click', function() {
    li.remove();
    updateCount();
});

    taskList.appendChild(li);
    taskInput.value = '';
    updateCount();

}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});