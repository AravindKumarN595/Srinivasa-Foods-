let cart = [];

function addToCart(name, price, qtyId) {
    let qty = parseInt(document.getElementById(qtyId).value);
    cart.push({ name, price, qty });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach(item => {
        total += item.price * item.qty;
        cartItems.innerHTML += `<p>${item.name} x ${item.qty} = ₹${item.price * item.qty}</p>`;
    });

    document.getElementById("total").innerText = total;
}

function showPayment() {
    document.getElementById("payment").classList.remove("hidden");
}

function addReview() {
    let name = document.getElementById("reviewName").value;
    let text = document.getElementById("reviewText").value;

    if (name && text) {
        let reviewList = document.getElementById("reviewList");
        reviewList.innerHTML += `<div><strong>${name}</strong><p>${text}</p></div>`;
        document.getElementById("reviewName").value = "";
        document.getElementById("reviewText").value = "";
    }
}
