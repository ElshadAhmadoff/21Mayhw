let add = document.querySelector(".addd-btn");
let dell = document.querySelector(".dell-btn");
let ul = document.querySelector(".ullis ul");
let input = document.querySelector("input");
if (localStorage.getItem("tasks") === null ) {
    localStorage.setItem("tasks","[]");
}
add.addEventListener("click",function () {
    if (input.value.trim() !== "") {
        let lis = "<li class='list-group-item'>" + input.value + "</li>";
        let task = ul.innerHTML = ul.innerHTML + lis;
        input.value = " ";
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
    else{
        alert("Can not add an empty task!")
    }
})
dell.addEventListener("click",function () {
    if (ul.innerHTML != " ") {
        ul.innerHTML = " ";
    }
    else{
        alert("Empty task!")
    }
})

