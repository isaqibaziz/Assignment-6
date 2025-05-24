
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greeting = document.getElementById('greeting');
const colorButton = document.getElementById('colorButton');
const body = document.body;

greetButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    if (name) {
        greeting.innerText = "Hello, " + name + "!";
    } else {
        greeting.innerText = 'Please enter your name!';
    }
});

colorButton.addEventListener('click', function() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});