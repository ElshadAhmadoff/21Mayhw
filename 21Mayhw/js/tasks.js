"use strict"

let tbody = document.querySelector("table tbody");
if (localStorage.getItem("tasks") === null || JSON.parse(localStorage.getItem("tasks")).length === 0) {
    let tr = "<tr><td colspan='4' class='text-center text-danger fw-bold'>No items</td></tr>"
    tbody.innerHTML += tr;
}
else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let total = 0;
    for (const task of tasks) {
        let tr = `
        <tr>
            <td>${task}</td>
        </tr>
        `
        tbody.innerHTML += tr;
    }
}