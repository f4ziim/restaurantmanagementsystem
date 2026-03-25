let total = 0;

function addItem() {
    let menu = document.getElementById("menu");
    let price = parseInt(menu.value);
    let qty = parseInt(document.getElementById("qty").value);

    let subtotal = price * qty;
    total += subtotal;

    let li = document.createElement("li");
    li.innerText = menu.options[menu.selectedIndex].text + " x" + qty;
    document.getElementById("orderList").appendChild(li);
}

function generateBill() {
    let tax = total * 0.1;
    let final = total + tax;

    document.getElementById("total").innerText = "Total: ₹" + total;
    document.getElementById("tax").innerText = "Tax: ₹" + tax;
    document.getElementById("final").innerText = "Final: ₹" + final;
}