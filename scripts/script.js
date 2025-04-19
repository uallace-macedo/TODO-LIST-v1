const taskInput = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.button-add-task');
const taskList = document.querySelector('.task-list');

let tasks = [];

const addTask = () => {
    if(!taskInput.value) return;

    tasks.push({ id: tasks.length + 1, label: taskInput.value, checked: false });
    taskInput.value = '';
    showTasks();
}

const checkTask = (id) => {
    tasks = tasks.map(task => {
        if(task.id == id + 1) {
            return {
                id: task.id,
                label: task.label,
                checked: !task.checked
            }
        }

        return task;
    })

    showTasks();
}

const deleteTask = (index) => {
    tasks = tasks.filter(task => task.id != index + 1);
    tasks = tasks.map((task, index) => {
        return {
            id: index + 1,
            label: task.label,
            checked: task.checked
        }
    });

    showTasks();
};

const showTasks = () => {
    let taskItems = '';
    tasks.forEach((task, index) => {
        taskItems += `
            <li class="task-item ${task.checked ? 'task-done' : ''}">
                <p class="task-title">#${task.id} ${task.label}</p>
                <div class="task-actions">
                    <img id="check-action" class="task-action" src="./assets/checked.png" alt="check-task" onClick="checkTask(${index})" />
                    <img id="delete-action" class="task-action" src="./assets/trash.png" alt="delete-task" onClick="deleteTask(${index})" />
                </div>
            </li>
        `;
    });

    taskList.innerHTML = taskItems
}

const toggleCheckTask = (task) => {

}

addTaskButton.addEventListener('click', addTask);