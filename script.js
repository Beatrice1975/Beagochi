let xp = 0;
let level = 1;
let tasks = [];
let characterStage = 'egg_closed';

const xpElement = document.getElementById('xp');
const levelElement = document.getElementById('level');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const characterImage = document.createElement('img');
document.querySelector('.stats').appendChild(characterImage);

function updateStats() {
    xpElement.textContent = `XP: ${xp}`;
    levelElement.textContent = `Livello: ${level}`;
    updateCharacter();
}

function updateCharacter() {
    if (level === 1 && xp < 50) {
        characterStage = 'egg_closed';
        characterImage.src = 'https://raw.githubusercontent.com/Beatrice1975/todo-quest/main/images/egg_closed.gif';
    } else if (level === 1 && xp >= 50) {
        characterStage = 'egg_cracking';
        characterImage.src = 'https://raw.githubusercontent.com/Beatrice1975/todo-quest/main/images/egg_cracking.gif';
    } else if (level >= 2) {
        characterStage = 'egg_cracking'; // Per ora, puoi aggiungere un'altra GIF dopo
        characterImage.src = 'https://raw.githubusercontent.com/Beatrice1975/todo-quest/main/images/egg_cracking.gif';
    }
    characterImage.alt = `Personaggio: ${characterStage}`;
}

function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName) {
        tasks.push({ name: taskName, xpReward: 10 });
        taskInput.value = '';
        renderTasks();
    }
}

function completeTask(index) {
    xp += tasks[index].xpReward;
    tasks.splice(index, 1);
    if (xp >= level * 100) {
        level++;
    }
    renderTasks();
    updateStats();
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task.name} <button onclick="completeTask(${index})">Completa</button>`;
        taskList.appendChild(li);
    });
}

updateStats();
