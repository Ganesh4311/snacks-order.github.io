const cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    // Add item to the cart array
    cart.push({ name: itemName, price: itemPrice });

    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear the existing cart items

    cart.forEach((item, index) => {
        // Create a list item for each cart entry
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - Rs ${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})" style="margin-left: 10px; color: red; background: none; border: none; cursor: pointer;">Remove</button>
        `;
        cartItems.appendChild(li);
    });

    // Update the total price
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0); // Recalculate total price
    document.getElementById('total').textContent = `Rs ${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
    // Remove the item at the specified index
    cart.splice(index, 1);

    // Update the cart display
    updateCartDisplay();
}
