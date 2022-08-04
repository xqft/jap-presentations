document.addEventListener("DOMContentLoaded", () => {
    const username = prompt("¿Cuál es tu nombre?");
    const username_span = document.querySelector("#username");
    
    username_span.innerHTML = username;
    
})