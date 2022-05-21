"use strict"

let tbody = document.querySelector("table tbody");
let removeAll = document.querySelector(".remove-all");
let removeSelectedTaskBtn = document.getElementById("remove-selected-task");

if (localStorage.getItem("favourites") === null || JSON.parse(localStorage.getItem("favourites")).length === 0) {
    let tr = "<tr><td colspan='4' class='text-center text-danger fw-bold'>No items</td></tr>"
    removeAll.classList.add("d-none")
    tbody.innerHTML += tr;
}
else {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    let total = 0;
    for (const product of favourites) {
        let tr = `
        <tr>
            <td class='list'><img src='${product.image}'></td>
            <td class='list'>${product.name}</td>
            <td class='list'>${product.desc}</td>
            <td class='price list'>${product.price} * ${product.count}</td>
        </tr>
        `
        tbody.innerHTML += tr;

        let amount = product.price.replace("$", "");
        amount = parseInt(amount);
        total += amount * product.count;
    }

    let subtotalTr = `
    <tr>
        <td colspan='3' class='text-end'>Subtotal:</td>
        <td class='price'>$${total}</td>
    </tr>
    `
    tbody.innerHTML += subtotalTr;

}
removeAll.addEventListener("click", function () {
    localStorage.removeItem("favourites");
    location.reload();
})

removeSelectedTaskBtn.addEventListener("click", () => {
    document.querySelectorAll(".list.active").forEach(e => {
      e.remove();
    })
  })