let total = 0;

function addItem() {
    let menu = document.getElementById("menu");
    let price = parseInt(menu.value);
    let qty = parseInt(document.getElementById("qty").value);

    if (!qty || qty <= 0) {
        alert("Enter valid quantity!");
        return;
    }

    let subtotal = price * qty;
    total += subtotal;

    let li = document.createElement("li");
    li.innerText = menu.options[menu.selectedIndex].text +
                   " x" + qty + " = ₹" + subtotal;

    document.getElementById("orderList").appendChild(li);

    // Reset input
    document.getElementById("qty").value = "";
}

function generateBill() {
    let tax = (total * 0.1).toFixed(2);
    let final = (total + parseFloat(tax)).toFixed(2);

    document.getElementById("total").innerText = "Total: ₹" + total;
    document.getElementById("tax").innerText = "Tax: ₹" + tax;
    document.getElementById("final").innerText = "Final: ₹" + final;
}