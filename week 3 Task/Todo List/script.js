document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const newTaskInput = document.getElementById('new-task-input');
    const activeTaskList = document.getElementById('active-task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = createTaskElement(taskText);
        activeTaskList.appendChild(taskItem);
    }

    function createTaskElement(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex align-items-center border-0 mb-2 rounded';
        taskItem.style.backgroundColor = '#f4f6f7';

        const taskCheckbox = document.createElement('input');
        taskCheckbox.className = 'form-check-input me-2';
        taskCheckbox.type = 'checkbox';

        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);

        taskCheckbox.addEventListener('change', function () {
            if (taskCheckbox.checked) {
                taskLabel.classList.add('text-decoration-line-through');
                moveTaskToCompleted(taskItem);
            } else {
                taskLabel.classList.remove('text-decoration-line-through');
                moveTaskToActive(taskItem);
            }
        });

        return taskItem;
    }

    function moveTaskToCompleted(taskItem) {
        const clonedItem = taskItem.cloneNode(true);
        clonedItem.querySelector('input').checked = true;
        clonedItem.querySelector('span').classList.add('text-decoration-line-through');
        clonedItem.querySelector('input').addEventListener('change', function () {
            if (!this.checked) {
                moveTaskToActive(clonedItem);
            }
        });
        completedTaskList.appendChild(clonedItem);
        activeTaskList.removeChild(taskItem);
    }

    function moveTaskToActive(taskItem) {
        const clonedItem = taskItem.cloneNode(true);
        clonedItem.querySelector('input').checked = false;
        clonedItem.querySelector('span').classList.remove('text-decoration-line-through');
        clonedItem.querySelector('input').addEventListener('change', function () {
            if (this.checked) {
                moveTaskToCompleted(clonedItem);
            }
        });
        activeTaskList.appendChild(clonedItem);
        completedTaskList.removeChild(taskItem);
    }
});
