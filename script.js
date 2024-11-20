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
function showCheckoutForm() {
    if (cart.length === 0) {
        alert("Your cart is empty! Add some snacks before checking out.");
        return;
    }
    // Show the checkout form
    document.getElementById('checkout-form-container').style.display = 'block';
}

function cancelCheckout() {
    // Hide the checkout form
    document.getElementById('checkout-form-container').style.display = 'none';
}

function processCheckout(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    // Simple validation (if needed, as `required` attributes are already used)
    if (!name || !email || !address || !payment) {
        alert("Please fill in all the fields.");
        return;
    }

    // Confirm and process the order
    const confirmation = confirm(
        `Thank you, ${name}! Your order total is ₹${totalPrice.toFixed(2)}. It will be delivered to:\n${address}`
    );

    if (confirmation) {
        alert("Your order has been placed successfully!");
        // Clear the cart
        cart.length = 0;
        totalPrice = 0;
        updateCartDisplay();

        // Hide the checkout form
        document.getElementById('checkout-form-container').style.display = 'none';
    }
}


