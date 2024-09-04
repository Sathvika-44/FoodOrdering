
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const orderList = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    const placeOrderBtn = document.getElementById('place-order-btn');

    // Sample menu items
    const items = [
        { id: 1, name: 'Burger', price: 200 },
        { id: 2, name: 'Pizza', price: 120 },
        { id: 3, name: 'Pasta', price: 150 },
        { id: 4, name: 'Salad', price: 99 }
    ];

    let cart = [];

    function updateMenu() {
        menu.innerHTML = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'food-item';
            div.innerHTML = `
               <div class="food-details">
                <h2 style="color:burlywood">${item.name}</h2>
                <h3 style="color:brown">Rs.${item.price}</h3>
                </div>
                <button id="${item.id}">Add to Order</button>

            `;
            
            menu.appendChild(div);
        });
    }
    menu.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const itemId = parseInt(event.target.getAttribute('id'));
            const item = items.find(i => i.id === itemId);
            if (item) {
                cart.push(item);
                alert(item.name+" added to the cart");
                updateOrderSummary(); 
            }
        }
    });


    function updateOrderSummary() {
        orderList.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - Rs.${item.price}`;
            orderList.appendChild(li);
            totalPrice += item.price;
        });
        totalPriceElement.textContent = `Total Price: Rs. ${totalPrice}`;
    }

    function placeOrder() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Order placed successfully!');
        cart = [];
        updateOrderSummary();
    }

    placeOrderBtn.addEventListener('click', placeOrder);

    // Initialize menu
    updateMenu();
    
});
