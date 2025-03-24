let product_name = localStorage.getItem("name");
let price = localStorage.getItem("price");
let img = localStorage.getItem("img");
let fit = localStorage.getItem("fit");




// Ensure elements exist before modifying
const productImg = document.querySelector(".product-img");
if (productImg) {
    productImg.src = img;
    productImg.alt = product_name;
}

const productNameElem = document.querySelector("#name");
if (productNameElem) productNameElem.textContent = product_name;

const priceElem = document.querySelector("#price");
if (priceElem) priceElem.textContent = price;

const productDescElem = document.querySelector(".product-desc");
if (productDescElem) productDescElem.textContent = fit;

document.querySelector("title").textContent = product_name;

let selectedSize = '';

document.querySelectorAll('.size-option').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');

        selectedSize = this.getAttribute('data-size');
        console.log("Selected Size:", selectedSize); // Debugging step
    });
});

// Ensure 'bag' button exists before adding event
const bagButton = document.getElementById('bag');
if (bagButton) {
    bagButton.addEventListener('click', function() {
        if (!selectedSize) {
            alert("Please select a size.");
            return;
        }
        this.classList.add('added');
        this.textContent = 'Added to Bag';

        let product = { name: product_name, price: price, img: img, fit:fit, size: selectedSize, quantity: 1 };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

    });
} else {
    console.error("Error: 'bag' button not found!");
}
