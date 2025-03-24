const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById("cart-items");

console.log(cart);

if (cart.length === 0) {
    cartContainer.innerHTML = '<p style="text-align: center;">Your bag is empty.</p>';

    const quantityElem = document.querySelector('.quantity');
    if (quantityElem) quantityElem.style.display = 'none';

    const discountElem = document.querySelector('.discount');
    if (discountElem) discountElem.style.display = 'none';

    const paymentIcons = document.querySelector('.payment-icons');
    if (paymentIcons) paymentIcons.style.display = 'none';
} else {
    let subtotal = 0;

    cart.forEach((item, index) => {
        const rawPrice = item.price.toString().replace("$", "");
        const price = parseFloat(rawPrice);
        subtotal += price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-details">
                <span class="tag">NEW</span>
                <h3>${item.name}</h3>
                <p class="product-desc">${item.fit || "No fit available"} | ${item.size}</p>
                <p class="price">$${price}</p>
            </div>
            <div class="cart-actions">
                <button class="wishlist-btn">♡</button>
                <button class="remove-btn" data-index="${index}">🗑</button>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    const shipping = 5;
    const total = subtotal + shipping;

    const pricingContainer = document.querySelector('.pricing');
    if (pricingContainer) {
        pricingContainer.innerHTML = `
            <div class="pricing-row">
                <span>Sub Total</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="pricing-row">
                <span>Estimated Shipping</span>
                <span>$${shipping}</span>
            </div>
            <div class="pricing-total">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
        `;
    } else {
        console.error("Error: '.pricing' element not found!");
    }

    // Remove item event
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload();
        });
    });

}
