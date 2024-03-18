const bar = document.getElementById("bar");
const colse = document.getElementById("colse");

const nav = document.getElementById("navbar");


if (bar) {
    
    bar.addEventListener('click',() =>
    {
        nav.classList.add("active");
    })
}
if (colse) {
    
    bar.addEventListener('click',() =>
    {
        nav.classList.remove("active");
    })
}