// script.js

let cart = [];
let cartCount = document.getElementById('cart-count');
let cartSection = document.getElementById('cart-section');
let cartItems = document.getElementById('cart-items');
let cartTotal = document.getElementById('cart-total');

// Function to update the cart UI
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <li class="list-group-item">
                ${item.name} - ₹${item.price} x ${item.quantity}
                <button class="btn btn-danger btn-sm float-right remove-item" data-index="${index}">Remove</button>
            </li>
        `;
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Add to Cart event listener
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCart();
    }
});

// Remove item from Cart
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.getAttribute('data-index');
        cart.splice(index, 1);
        updateCart();
    }
});

// Toggle Cart Visibility
document.getElementById('cart-icon').addEventListener('click', function() {
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
});
