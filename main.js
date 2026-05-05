let cart = [];

/* =========================
   NAVIGATION
========================= */
function goTo(page) {
    window.location.href = page;
}

/* =========================
   ACTIVE NAV MENU
========================= */
function setActiveMenu() {
    const path = window.location.pathname;

    const menus = document.querySelectorAll(".nav-center span");

    menus.forEach(menu => {
        menu.classList.remove("active");

        const text = menu.textContent.trim().toLowerCase();

        if (path.includes("index.html") && text === "home") {
            menu.classList.add("active");
        }

        if (path.includes("product.html") && text === "product") {
            menu.classList.add("active");
        }

        if (path.includes("about.html") && text === "about us") {
            menu.classList.add("active");
        }
    });
}


/* =========================
   CART SYSTEM
========================= */
function addToCart(item) {
    cart.push(item);
    renderCart();
}

function renderCart() {
    let list = document.getElementById("cart-list");
    if (!list) return;

    list.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;

        // tombol hapus
        let btn = document.createElement("button");
        btn.textContent = "x";
        btn.style.marginLeft = "10px";

        btn.onclick = function () {
            cart.splice(index, 1);
            renderCart();
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

/* =========================
   TOGGLE CART
========================= */
function toggleCart() {
    let cartBox = document.getElementById("cartPopup");
    if (!cartBox) return;

    cartBox.style.display =
        cartBox.style.display === "block" ? "none" : "block";
}

/* =========================
   FILTER PRODUCT
========================= */
function filterProduct(category) {
    let products = document.querySelectorAll(".product");

    products.forEach(p => {
        if (category === "all") {
            p.style.display = "block";
        } else {
            p.style.display = p.classList.contains(category)
                ? "block"
                : "none";
        }
    });
}

/* =========================
   PAGE LOAD
========================= */
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
    setActiveMenu();
});