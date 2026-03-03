let cart = [];

function addToCart(name, price, id) {
    let qty = parseInt(document.getElementById(id).value);
    cart.push({name, price, qty});
    updateCart();
}

function updateCart() {
    let cartDiv = document.getElementById("cartItems");
    let total = 0;
    cartDiv.innerHTML = "";

    cart.forEach(item => {
        total += item.price * item.qty;
        cartDiv.innerHTML += `<p>${item.name} x ${item.qty} = ₹${item.price * item.qty}</p>`;
    });

    document.getElementById("total").innerText = total;
}

function addReview() {
    let name = document.getElementById("name").value;
    let text = document.getElementById("reviewText").value;

    if(name && text) {
        document.getElementById("reviews").innerHTML += 
        `<p><strong>${name}:</strong> ${text}</p>`;

        document.getElementById("name").value = "";
        document.getElementById("reviewText").value = "";
    }
}
