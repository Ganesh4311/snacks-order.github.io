const cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice, quantityId) {
    // Fetch the quantity from the input field
    const quantityElement = document.getElementById(quantityId);
    if (!quantityElement) {
        console.error(`Quantity input with ID "${quantityId}" not found.`);
        return;
    }

    const quantity = parseInt(quantityElement.value);
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    const totalItemPrice = itemPrice * quantity;

    // Add item to the cart
    cart.push({ name: itemName, price: totalItemPrice, quantity });

    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) {
        console.error('Cart items element with ID "cart-items" not found.');
        return;
    }

    cartItems.innerHTML = ''; // Clear the existing cart items

    cart.forEach((item, index) => {
        // Create a list item for each cart entry
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ₹${item.price.toFixed(2)} (x${item.quantity})
            <button onclick="removeFromCart(${index})" style="margin-left: 10px; color: red; background: none; border: none; cursor: pointer;">Remove</button>
        `;
        cartItems.appendChild(li);
    });

    // Update the total price
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0); // Recalculate total price
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = `₹${totalPrice.toFixed(2)}`;
    } else {
        console.error('Total price element with ID "total" not found.');
    }
}

function removeFromCart(index) {
    // Remove the item at the specified index
    cart.splice(index, 1);

    // Update the cart display
    updateCartDisplay();
}
