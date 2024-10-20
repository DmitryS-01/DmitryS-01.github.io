let count = 0;
let button = document.getElementById("counterButton");

function inc() {
    count++;
    button.textContent = count + "x нрав!";
}

button.addEventListener('click', inc)
