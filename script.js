const cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    // Add item to the cart array
    cart.push({ name: itemName, price: itemPrice });

    // Update the cart display
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear the existing cart items
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rs ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update the total price
    totalPrice += itemPrice;
    document.getElementById('total').textContent = `Rs ${totalPrice.toFixed(2)}`;
}
