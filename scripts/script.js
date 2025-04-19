const taskInput = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.button-add-task');
const taskList = document.querySelector('.task-list');

let tasks = [];

const addTask = () => {
    taskInput.value ? tasks.push(taskInput.value) : '';
    showTaks();
}

const showTaks = () => {
    let taskItems = '';
    tasks.forEach(task => {
        taskItems += `
            <li class="task-item">
                <p class="task-title">${task}</p>
                <div class="task-actions">
                    <img class="task-action" src="./assets/checked.png" alt="check-task" />
                    <img class="task-action" src="./assets/trash.png" alt="delete-task">
                </div>
            </li>
        `;
    });

    taskList.innerHTML = taskItems
}

addTaskButton.addEventListener('click', addTask);