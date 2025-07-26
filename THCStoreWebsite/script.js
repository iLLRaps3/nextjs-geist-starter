// Sample product data
const products = [
    {
        id: 1,
        name: "THCA Flower - Blue Dream",
        description: "Sativa dominant hybrid with a sweet berry aroma.",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1602524810536-3a7a7a7a7a7a?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "THCA Vape Cartridge - OG Kush",
        description: "Indica dominant strain with earthy pine flavor.",
        price: 40.00,
        image: "https://images.unsplash.com/photo-1616627989270-1a1a1a1a1a1a?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "THCA Edibles - Gummies",
        description: "Assorted fruit flavored gummies with 10mg THCA each.",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1590080877777-2b2b2b2b2b2b?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "THCA Concentrate - Wax",
        description: "High potency concentrate for dabbing.",
        price: 50.00,
        image: "https://images.unsplash.com/photo-1585238342028-1c1c1c1c1c1c?auto=format&fit=crop&w=400&q=80"
    }
];

let cart = [];

const productListEl = document.getElementById('product-list');
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const cartTotalContainer = document.getElementById('cart-total-container');
const checkoutBtn = document.getElementById('checkout-btn');

function renderProducts() {
    productListEl.innerHTML = '';
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'product';
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListEl.appendChild(productEl);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    renderCart();
}

function renderCart() {
    cartItemsEl.innerHTML = '';
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p>Your cart is empty.</p>';
        cartCountEl.textContent = '0';
        cartTotalContainer.style.display = 'none';
        checkoutBtn.style.display = 'none';
        return;
    }

    cart.forEach(item => {
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <span>${item.product.name} (x${item.quantity})</span>
            <span>$${(item.product.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.product.id})" title="Remove item">x</button>
        `;
        cartItemsEl.appendChild(cartItemEl);
    });

    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    cartTotalEl.textContent = total.toFixed(2);
    cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotalContainer.style.display = 'block';
    checkoutBtn.style.display = 'block';
}

checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your purchase! This is a demo site, so no actual orders are processed.');
    cart = [];
    renderCart();
});

renderProducts();
renderCart();
