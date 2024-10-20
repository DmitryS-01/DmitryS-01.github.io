let count = 0;
let button = document.getElementById("counterButton");

function inc() {
    count++;
    button.textContent = "Cliked " + count + " times";
}

button.addEventListener('click', inc)