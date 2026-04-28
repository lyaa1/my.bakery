let cart = [];

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function renderCart() {
    let list = document.getElementById("cart-list");
    list.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function toggleCart() {
    let cartBox = document.getElementById("cartPopup");

    if (cartBox.style.display === "block") {
        cartBox.style.display = "none";
    } else {
        cartBox.style.display = "block";
    }
}

/* FILTER */
function filterProduct(category) {
    let products = document.querySelectorAll(".product");

    products.forEach(p => {
        if (category === "all" || p.classList.contains(category)) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
}