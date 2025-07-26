// Enhanced THCA Store - "On Steroids" Edition

// Enhanced product data with more details - Now includes 12 products
const products = [
    {
        id: 1,
        name: "🌿 THCA Flower - Blue Dream",
        description: "Sativa-dominant hybrid with sweet berry aroma. Perfect for creative sessions and daytime use. Lab-tested at 28% THCA.",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
        category: "flower",
        thca: 28,
        effects: ["Euphoric", "Creative", "Uplifted"],
        strain: "Sativa Hybrid",
        rating: 4.8,
        reviews: 247,
        terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
        size: "3.5g"
    },
    {
        id: 2,
        name: "💨 THCA Vape - OG Kush",
        description: "Indica-dominant with earthy pine notes. Deep relaxation and stress relief. Premium ceramic cartridge.",
        price: 40.00,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
        category: "vape",
        thca: 85,
        effects: ["Relaxed", "Sleepy", "Happy"],
        strain: "Indica",
        rating: 4.9,
        reviews: 189,
        terpenes: ["Limonene", "Caryophyllene", "Linalool"],
        size: "1g"
    },
    {
        id: 3,
        name: "🍬 THCA Gummies - Assorted",
        description: "10mg THCA per gummy. Discreet, delicious, and precisely dosed. Perfect for microdosing or full experience.",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
        category: "edibles",
        thca: 10,
        effects: ["Relaxed", "Happy", "Euphoric"],
        strain: "Hybrid",
        rating: 4.7,
        reviews: 356,
        servings: 10,
        perServing: 10
    },
    {
        id: 4,
        name: "💎 THCA Diamonds - 99%",
        description: "Ultra-pure crystalline THCA. Maximum potency for experienced users. Lab-verified purity.",
        price: 50.00,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        category: "concentrate",
        thca: 99,
        effects: ["Euphoric", "Relaxed", "Creative"],
        strain: "Pure THCA",
        rating: 5.0,
        reviews: 98,
        terpenes: ["Pure THCA"],
        size: "1g"
    },
    {
        id: 5,
        name: "🌙 THCA Pre-Rolls - Nighttime",
        description: "Indica-dominant pre-rolls for evening relaxation. Hand-rolled with premium flower. 5-pack.",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1603903823774-9f3f7a6f9a6f?auto=format&fit=crop&w=400&q=80",
        category: "prerolls",
        thca: 24,
        effects: ["Sleepy", "Relaxed", "Calm"],
        strain: "Indica",
        rating: 4.6,
        reviews: 134,
        terpenes: ["Myrcene", "Linalool", "Humulene"],
        size: "5-pack"
    },
    {
        id: 6,
        name: "🌅 THCA Tincture - Daytime",
        description: "Fast-acting sublingual drops. Precise dosing with measured dropper. Clean, discreet consumption.",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
        category: "tincture",
        thca: 30,
        effects: ["Focused", "Energetic", "Clear"],
        strain: "Sativa",
        rating: 4.8,
        reviews: 167,
        servings: 30,
        perServing: 30
    },
    {
        id: 7,
        name: "🌿 Premium THCA Flower - Wedding Cake",
        description: "Indica-dominant hybrid with sweet vanilla and earthy notes. Perfect for relaxation and stress relief. Lab-tested at 26% THCA with rich terpene profile.",
        price: 28.00,
        image: "https://images.unsplash.com/photo-1603903823774-9f3f7a6f9a6f?auto=format&fit=crop&w=400&q=80",
        category: "flower",
        thca: 26,
        effects: ["Relaxed", "Happy", "Euphoric"],
        strain: "Indica Hybrid",
        rating: 4.9,
        reviews: 89,
        terpenes: ["Limonene", "Caryophyllene", "Myrcene"],
        size: "3.5g"
    },
    {
        id: 8,
        name: "💨 THCA Live Resin Vape - Gelato",
        description: "Premium live resin cartridge with sweet dessert flavors. Full-spectrum extract preserving all cannabinoids and terpenes. 90% THCA potency.",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1616627989270-1a1a1a1a1a1a?auto=format&fit=crop&w=400&q=80",
        category: "vape",
        thca: 90,
        effects: ["Creative", "Uplifted", "Focused"],
        strain: "Hybrid",
        rating: 4.8,
        reviews: 156,
        terpenes: ["Linalool", "Humulene", "Pinene"],
        size: "1g"
    },
    {
        id: 9,
        name: "🍫 THCA Chocolate Bar - Milk Chocolate",
        description: "Delicious milk chocolate infused with 50mg THCA. Precisely dosed segments for easy microdosing. Made with premium Belgian chocolate.",
        price: 22.00,
        image: "https://images.unsplash.com/photo-1590080877777-2b2b2b2b2b2b?auto=format&fit=crop&w=400&q=80",
        category: "edibles",
        thca: 50,
        effects: ["Relaxed", "Happy", "Euphoric"],
        strain: "Hybrid",
        rating: 4.7,
        reviews: 234,
        servings: 10,
        perServing: 5
    },
    {
        id: 10,
        name: "🔥 THCA Shatter - Pineapple Express",
        description: "Ultra-clean shatter with tropical pineapple terpenes. Glass-like consistency perfect for dabbing. 85% THCA with full terpene profile.",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1585238342028-1c1c1c1c1c1c?auto=format&fit=crop&w=400&q=80",
        category: "concentrate",
        thca: 85,
        effects: ["Energetic", "Creative", "Uplifted"],
        strain: "Sativa",
        rating: 4.9,
        reviews: 78,
        terpenes: ["Terpinolene", "Ocimene", "Myrcene"],
        size: "1g"
    },
    {
        id: 11,
        name: "🌙 THCA Sleep Gummies - Berry Flavor",
        description: "Special nighttime formula with 25mg THCA plus melatonin. Delicious berry flavor promotes restful sleep. Vegan and gluten-free.",
        price: 30.00,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
        category: "edibles",
        thca: 25,
        effects: ["Sleepy", "Relaxed", "Calm"],
        strain: "Indica",
        rating: 4.8,
        reviews: 198,
        servings: 20,
        perServing: 1.25,
        ingredients: ["THCA", "Melatonin", "Natural Berry Flavor"]
    },
    {
        id: 12,
        name: "🌞 THCA Energy Tincture - Citrus Burst",
        description: "Fast-acting sublingual tincture with energizing citrus terpenes. Perfect for daytime focus and productivity. 1000mg THCA per bottle.",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
        category: "tincture",
        thca: 1000,
        effects: ["Focused", "Energetic", "Clear"],
        strain: "Sativa",
        rating: 4.7,
        reviews: 145,
        servings: 30,
        perServing: 33.33,
        flavor: "Citrus Burst"
    }
];

// Enhanced cart with localStorage
let cart = JSON.parse(localStorage.getItem('thcaCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('thcaWishlist')) || [];

// DOM Elements
const productListEl = document.getElementById('product-list');
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const cartTotalContainer = document.getElementById('cart-total-container');
const checkoutBtn = document.getElementById('checkout-btn');
const filterBtns = document.getElementById('filter-btns');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
    createFilterButtons();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    searchInput?.addEventListener('input', filterProducts);
    sortSelect?.addEventListener('change', sortProducts);
}

// Filter Buttons
function createFilterButtons() {
    if (!filterBtns) return;
    
    const categories = ['all', ...new Set(products.map(p => p.category))];
    filterBtns.innerHTML = categories.map(cat => 
        `<button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
            ${cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>`
    ).join('');
    
    filterBtns.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            filterProducts();
        }
    });
}

// Enhanced Product Rendering
function renderProducts(filteredProducts = products) {
    if (!productListEl) return;
    
    productListEl.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'product';
        productEl.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                    ${wishlist.includes(product.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-meta">
                    <span class="strain-badge">${product.strain}</span>
                    <span class="thca-badge">${product.thca}% THCA</span>
                </div>
                <p>${product.description}</p>
                <div class="effects">
                    ${product.effects.map(effect => `<span class="effect-tag">${effect}</span>`).join('')}
                </div>
                <div class="rating">
                    ${generateStars(product.rating)} 
                    <span>(${product.reviews} reviews)</span>
                </div>
                <div class="price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                        <span>Add to Cart</span>
                        <span class="btn-icon">🛒</span>
                    </button>
                </div>
            </div>
        `;
        productListEl.appendChild(productEl);
    });
    
    // Add entrance animation
    animateProducts();
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (hasHalfStar) stars += '✨';
    
    return stars;
}

// Product Filtering
function filterProducts() {
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
    
    let filtered = products;
    
    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.effects.some(e => e.toLowerCase().includes(searchTerm))
        );
    }
    
    renderProducts(filtered);
}

// Product Sorting
function sortProducts() {
    const sortBy = sortSelect?.value || 'name';
    let sorted = [...products];
    
    switch (sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'thca':
            sorted.sort((a, b) => b.thca - a.thca);
            break;
        default:
            sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    renderProducts(sorted);
}

// Enhanced Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.product.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }
    
    saveCart();
    renderCart();
    showNotification(`${product.name} added to cart! 🛒`);
    animateCartAdd();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    saveCart();
    renderCart();
    showNotification('Item removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem('thcaCart', JSON.stringify(cart));
}

// Wishlist Functions
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist! ❤️');
    }
    
    localStorage.setItem('thcaWishlist', JSON.stringify(wishlist));
    renderProducts();
}

// Enhanced Cart Rendering
function renderCart() {
    if (!cartItemsEl || !cartCountEl || !cartTotalEl) return;
    
    cartItemsEl.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty 🌱</p>
                <p>Add some amazing products to get started!</p>
            </div>
        `;
        cartCountEl.textContent = '0';
        cartTotalContainer.style.display = 'none';
        checkoutBtn.style.display = 'none';
        return;
    }
    
    cart.forEach(item => {
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
                <div>
                    <h4>${item.product.name}</h4>
                    <p>$${item.product.price.toFixed(2)} each</p>
                </div>
            </div>
            <div class="cart-item-controls">
                <button onclick="updateQuantity(${item.product.id}, -1)" class="qty-btn">-</button>
                <span class="qty">${item.quantity}</span>
                <button onclick="updateQuantity(${item.product.id}, 1)" class="qty-btn">+</button>
                <button onclick="removeFromCart(${item.product.id})" class="remove-btn" title="Remove">×</button>
            </div>
            <div class="cart-item-total">
                $${(item.product.price * item.quantity).toFixed(2)}
            </div>
        `;
        cartItemsEl.appendChild(cartItemEl);
    });
    
    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartTotalEl.textContent = total.toFixed(2);
    cartCountEl.textContent = totalItems;
    cartTotalContainer.style.display = 'block';
    checkoutBtn.style.display = 'block';
}

// Checkout Process
checkoutBtn?.addEventListener('click', () => {
    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    
    // Create order summary
    const orderSummary = cart.map(item => 
        `${item.quantity}x ${item.product.name} - $${(item.product.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const message = `
🎉 Order Confirmed! 🎉

Thank you for your purchase! Here's your order summary:

${orderSummary}

Total: $${total.toFixed(2)}

This is a demo site - no actual orders are processed, but your cart has been saved for next time!

Enjoy your elevated experience! 🚀
    `;
    
    alert(message);
    
    // Keep cart for demo purposes, but could clear it
    // cart = [];
    // saveCart();
    // renderCart();
});

// Notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animations
function animateProducts() {
    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
        product.style.opacity = '0';
        product.style.transform = 'translateY(30px)';
        setTimeout(() => {
            product.style.transition = 'all 0.6s ease';
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function animateCartAdd() {
    const cartIcon = document.querySelector('#cart-count');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.3)';
        cartIcon.style.color = 'var(--neon-green)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
            cartIcon.style.color = '';
        }, 300);
    }
}

// Search suggestions
function setupSearchSuggestions() {
    const suggestions = [
        ...new Set(products.flatMap(p => [...p.effects, p.strain, p.category]))
    ];
    
    // Could implement autocomplete here
}

// Initialize
setupSearchSuggestions();
