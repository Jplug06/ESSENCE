// Product Data
const products = [
    {
        id: 1,
        name: "AVENTOS",
        notes: "Bergamot, Pineapple, Birch, Musk",
        size: "100ml",
        concentration: "Eau de Parfum (EDP)",
        longevity: "8–10 hours",
        price: 89.99,
        image: "AVENTOS.jpg",
        featured: true
    },
    {
        id: 2,
        name: "BARAKKAT ROUGE 540",
        notes: "Saffron, Jasmine, Amberwood, Cedar",
        size: "70ml",
        concentration: "Extrait de Parfum",
        longevity: "10–12 hours",
        price: 129.99,
        image: "BARAKKAT ROUGE.jpg",
        featured: true
    },
    {
        id: 3,
        name: "ECLAIRE LATTAFA",
        notes: "Rose, Vanilla, Musk, Oud",
        size: "100ml",
        concentration: "Eau de Parfum (EDP)",
        longevity: "7–9 hours",
        price: 79.99,
        image: "ECLAIRE.jpg",
        featured: false
    },
    {
        id: 4,
        name: "INTENSE MAN",
        notes: "Lemon, Jasmine, Oakmoss, Ambergris",
        size: "100ml",
        concentration: "Eau de Toilette (EDT)",
        longevity: "6–8 hours",
        price: 69.99,
        image: "INTENSE MAN.jpg",
        featured: true
    },
    {
        id: 5,
        name: "MATELOT",
        notes: "Sea breeze, Citrus, Woods",
        size: "100ml",
        concentration: "Eau de Parfum (EDP)",
        longevity: "5–7 hours",
        price: 74.99,
        image: "MATELOT.jpg",
        featured: false
    },
    {
        id: 6,
        name: "MONOGOTAS (COCO)",
        notes: "Coconut, Strawberry, Vanilla",
        size: "100ml",
        concentration: "Body Spray",
        longevity: "3–5 hours",
        price: 39.99,
        image: "MONOTAS.jpg",
        featured: false
    },
    {
        id: 7,
        name: "MONOGOTAS (FRESA)",
        notes: "Strawberry, Vanilla, Musk",
        size: "100ml",
        concentration: "Body Spray",
        longevity: "3–5 hours",
        price: 39.99,
        image: "MONOTAS.jpg",
        featured: false
    },
    {
        id: 8,
        name: "MONOGOTAS (VANILLA)",
        notes: "Vanilla, Coconut, Musk",
        size: "100ml",
        concentration: "Body Spray",
        longevity: "3–5 hours",
        price: 39.99,
        image: "MONOTAS.jpg",
        featured: false
    },
    {
        id: 9,
        name: "MOUSUF WARDI",
        notes: "Rose, Raspberry, Oud, Patchouli",
        size: "80ml",
        concentration: "Eau de Parfum (EDP)",
        longevity: "7–9 hours",
        price: 84.99,
        image: "MOUSUF WARDI.jpg",
        featured: false
    },
    {
        id: 10,
        name: "PEGASUS",
        notes: "Almond, Lavender, Vanilla, Amber",
        size: "100ml",
        concentration: "Eau de Parfum (EDP)",
        longevity: "8–10 hours",
        price: 94.99,
        image: "PEGASUS.jpg",
        featured: true
    },
    {
        id: 11,
        name: "RAMZ LATTAFA",
        notes: "Amber, Vanilla, Oud, Saffron",
        size: "100ml",
        concentration: "Eau de Parfum (EDP)",
        longevity: "9–11 hours",
        price: 89.99,
        image: "RAMZ LATTAFA.jpg",
        featured: false
    },
    {
        id: 12,
        name: "SARA KHLADJ",
        notes: "Rose, White Musk, Citrus",
        size: "80ml",
        concentration: "Eau de Parfum (EDP)",
        longevity: "6–8 hours",
        price: 74.99,
        image: "SARA KHLADJ.jpg",
        featured: false
    },
    {
        id: 13,
        name: "YARA LATTAFA",
        notes: "Vanilla, Coconut, Tropical Fruits",
        size: "100ml",
        concentration: "Eau de Parfum (EDP)",
        longevity: "6–9 hours",
        price: 79.99,
        image: "YARA.jpg",
        featured: false
    },
    {
        id: 14,
        name: "ZARA MAN",
        notes: "Citrus, Musk, Wood",
        size: "100ml",
        concentration: "Eau de Toilette (EDT)",
        longevity: "5–7 hours",
        price: 59.99,
        image: "ZARA MAN.jpg",
        featured: false
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const searchIcon = document.getElementById('search-icon');
const closeSearch = document.getElementById('close-search');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.getElementById('search-input');
const cartCount = document.getElementById('cart-count');
const featuredProductsContainer = document.getElementById('featured-products');
const allProductsContainer = document.getElementById('all-products');
const productDetailContainer = document.getElementById('product-detail-container');
const relatedProductsContainer = document.getElementById('related-products');
const cartContainer = document.getElementById('cart-container');
const checkoutItemsContainer = document.getElementById('checkout-items');
const checkoutSubtotal = document.getElementById('checkout-subtotal');
const checkoutShipping = document.getElementById('checkout-shipping');
const checkoutTotal = document.getElementById('checkout-total');
const checkoutForm = document.getElementById('checkout-form');
const confirmationItemsContainer = document.getElementById('confirmation-items');
const confirmationSubtotal = document.getElementById('confirmation-subtotal');
const confirmationShipping = document.getElementById('confirmation-shipping');
const confirmationTotal = document.getElementById('confirmation-total');
const orderNumber = document.getElementById('order-number');
const orderDate = document.getElementById('order-date');
const printOrder = document.getElementById('print-order');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');
const concentrationFilters = document.querySelectorAll('.concentration-filter');
const longevityFilters = document.querySelectorAll('.longevity-filter');
const clearFilters = document.getElementById('clear-filters');

// Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize
function init() {
    // Mobile Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Search Toggle
    if (searchIcon) {
        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            searchContainer.classList.add('active');
            searchInput.focus();
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener('click', () => {
            searchContainer.classList.remove('active');
        });
    }

    // Search Functionality
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.toLowerCase();
                if (searchTerm.trim() !== '') {
                    window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }

    // Update Cart Count
    updateCartCount();

    // Load Page Content
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === '' || currentPage === 'index.html') {
        loadFeaturedProducts();
    } else if (currentPage === 'products.html') {
        loadAllProducts();
        setupFilters();
    } else if (currentPage === 'product-detail.html') {
        loadProductDetail();
        loadRelatedProducts();
    } else if (currentPage === 'cart.html') {
        loadCart();
    } else if (currentPage === 'checkout.html') {
        loadCheckout();
        setupCheckoutForm();
    } else if (currentPage === 'order-confirmation.html') {
        loadOrderConfirmation();
        setupPrintOrder();
    }

    // Setup Forms
    if (contactForm) {
        setupContactForm();
    }

    if (newsletterForm) {
        setupNewsletterForm();
    }
}

// Load Featured Products
function loadFeaturedProducts() {
    if (!featuredProductsContainer) return;
    
    const featuredProducts = products.filter(product => product.featured);
    
    featuredProductsContainer.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-meta">
                    <span>${product.concentration}</span>
                    <span>${product.size}</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <a href="product-detail.html?id=${product.id}" class="view-details">Details</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add to Cart Event Listeners
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Load All Products
function loadAllProducts() {
    if (!allProductsContainer) return;
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    
    // Filter products based on search term
    let filteredProducts = products;
    if (searchTerm) {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.notes.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.concentration.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Apply concentration filters
    const selectedConcentrations = Array.from(concentrationFilters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);
    
    if (selectedConcentrations.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedConcentrations.includes(product.concentration)
        );
    }
    
    // Apply longevity filters
    const selectedLongevities = Array.from(longevityFilters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);
    
    if (selectedLongevities.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const hours = product.longevity.split('–')[1].split(' ')[0];
            if (selectedLongevities.includes('short') && hours <= 5) return true;
            if (selectedLongevities.includes('medium') && hours > 5 && hours <= 8) return true;
            if (selectedLongevities.includes('long') && hours > 8) return true;
            return false;
        });
    }
    
    if (filteredProducts.length === 0) {
        allProductsContainer.innerHTML = `
            <div class="no-products">
                <p>No products found. Please try different filters.</p>
            </div>
        `;
        return;
    }
    
    allProductsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-meta">
                    <span>${product.concentration}</span>
                    <span>${product.size}</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <a href="product-detail.html?id=${product.id}" class="view-details">Details</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add to Cart Event Listeners
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Setup Filters
function setupFilters() {
    if (!concentrationFilters || !longevityFilters || !clearFilters) return;
    
    // Concentration Filters
    concentrationFilters.forEach(filter => {
        filter.addEventListener('change', loadAllProducts);
    });
    
    // Longevity Filters
    longevityFilters.forEach(filter => {
        filter.addEventListener('change', loadAllProducts);
    });
    
    // Clear Filters
    clearFilters.addEventListener('click', () => {
        concentrationFilters.forEach(filter => {
            filter.checked = false;
        });
        
        longevityFilters.forEach(filter => {
            filter.checked = false;
        });
        
        loadAllProducts();
    });
}

// Load Product Detail
function loadProductDetail() {
    if (!productDetailContainer) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        productDetailContainer.innerHTML = `
            <div class="product-not-found">
                <h2>Product Not Found</h2>
                <p>The product you are looking for does not exist.</p>
                <a href="products.html" class="btn">Back to Products</a>
            </div>
        `;
        return;
    }
    
    // Update page title and breadcrumb
    document.title = `${product.name} | Essence Elegance`;
    const breadcrumb = document.getElementById('product-breadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }
    
    productDetailContainer.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <h1 class="product-detail-name">${product.name}</h1>
            <div class="product-detail-price">$${product.price.toFixed(2)}</div>
            <div class="product-detail-meta">
                <div class="meta-item">
                    <span class="meta-label">Fragrance Notes:</span>
                    <span>${product.notes}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Size:</span>
                    <span>${product.size}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Concentration:</span>
                    <span>${product.concentration}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Longevity:</span>
                    <span>${product.longevity}</span>
                </div>
            </div>
            <div class="product-detail-description">
                <p>Experience the captivating essence of ${product.name}, a fragrance that embodies sophistication and elegance. This exquisite scent features notes of ${product.notes}, creating a harmonious blend that evolves beautifully throughout the day.</p>
                <p>With its ${product.concentration} formulation, this fragrance offers exceptional longevity of ${product.longevity}, ensuring your signature scent remains with you for all your important moments.</p>
            </div>
            <div class="product-detail-actions">
                <div class="quantity">
                    <button class="quantity-btn minus">-</button>
                    <input type="number" class="quantity-input" value="1" min="1" max="10">
                    <button class="quantity-btn plus">+</button>
                </div>
                <button class="btn add-to-cart-detail" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
    
    // Quantity Buttons
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-input');
    
    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });
    
    // Add to Cart Button
    const addToCartButton = document.querySelector('.add-to-cart-detail');
    addToCartButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCartWithQuantity(productId, quantity);
    });
}

// Load Related Products
function loadRelatedProducts() {
    if (!relatedProductsContainer) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const currentProduct = products.find(p => p.id === productId);
    
    if (!currentProduct) return;
    
    // Get products with similar concentration or notes
    let relatedProducts = products.filter(product => 
        product.id !== productId && 
        (product.concentration === currentProduct.concentration || 
         product.notes.split(', ').some(note => currentProduct.notes.includes(note)))
    );
    
    // If not enough related products, add some random ones
    if (relatedProducts.length < 4) {
        const randomProducts = products
            .filter(product => product.id !== productId && !relatedProducts.includes(product))
            .sort(() => 0.5 - Math.random())
            .slice(0, 4 - relatedProducts.length);
        
        relatedProducts = [...relatedProducts, ...randomProducts];
    }
    
    // Limit to 4 products
    relatedProducts = relatedProducts.slice(0, 4);
    
    relatedProductsContainer.innerHTML = relatedProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-meta">
                    <span>${product.concentration}</span>
                    <span>${product.size}</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <a href="product-detail.html?id=${product.id}" class="view-details">Details</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add to Cart Event Listeners
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Load Cart
function loadCart() {
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added any fragrances to your cart yet.</p>
                <a href="products.html" class="btn">Shop Now</a>
            </div>
        `;
        return;
    }
    
    let cartHTML = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
    `;
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;
        
        cartHTML += `
            <tr>
                <td>
                    <div class="cart-product">
                        <div class="cart-product-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div>
                            <div class="cart-product-name">${product.name}</div>
                            <div>${product.concentration} | ${product.size}</div>
                        </div>
                    </div>
                </td>
                <td>$${product.price.toFixed(2)}</td>
                <td>
                    <div class="cart-quantity">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><i class="fas fa-trash cart-remove" data-id="${product.id}"></i></td>
            </tr>
        `;
    });
    
    cartHTML += `
            </tbody>
        </table>
    `;
    
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;
    
    cartHTML += `
        <div class="cart-summary">
            <h3>Cart Summary</h3>
            <div class="summary-item">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-item">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span>
            </div>
            <div class="summary-item summary-total">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
        </div>
        <div class="cart-actions">
            <a href="products.html" class="btn btn-outline">Continue Shopping</a>
            <a href="checkout.html" class="btn">Proceed to Checkout</a>
        </div>
    `;
    
    cartContainer.innerHTML = cartHTML;
    
    // Quantity Buttons
    const minusButtons = document.querySelectorAll('.minus');
    const plusButtons = document.querySelectorAll('.plus');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const removeButtons = document.querySelectorAll('.cart-remove');
    
    minusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'));
            updateCartItemQuantity(id, -1);
        });
    });
    
    plusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'));
            updateCartItemQuantity(id, 1);
        });
    });
    
    quantityInputs.forEach(input => {
        input.addEventListener('change', () => {
            const id = parseInt(input.getAttribute('data-id'));
            const quantity = parseInt(input.value);
            
            if (quantity < 1) {
                input.value = 1;
                updateCartItemQuantity(id, 0, 1);
            } else if (quantity > 10) {
                input.value = 10;
                updateCartItemQuantity(id, 0, 10);
            } else {
                updateCartItemQuantity(id, 0, quantity);
            }
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'));
            removeCartItem(id);
        });
    });
}

// Load Checkout
function loadCheckout() {
    if (!checkoutItemsContainer || !checkoutSubtotal || !checkoutShipping || !checkoutTotal) return;
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    let checkoutHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;
        
        checkoutHTML += `
            <div class="checkout-item">
                <div class="checkout-item-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="checkout-item-details">
                    <div class="checkout-item-name">${product.name}</div>
                    <div class="checkout-item-price">$${product.price.toFixed(2)}</div>
                    <div class="checkout-item-quantity">Quantity: ${item.quantity}</div>
                </div>
            </div>
        `;
    });
    
    checkoutItemsContainer.innerHTML = checkoutHTML;
    
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;
    
    checkoutSubtotal.textContent = '$' + subtotal.toFixed(2);
    checkoutShipping.textContent = shipping === 0 ? 'Free' : '$' + shipping.toFixed(2);
    checkoutTotal.textContent = '$' + total.toFixed(2);
}

// Setup Checkout Form
function setupCheckoutForm() {
    if (!checkoutForm) return;
    
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Save order details to localStorage
        const orderDetails = {
            items: cart,
            subtotal: parseFloat(checkoutSubtotal.textContent.replace('$', '')),
            shipping: checkoutShipping.textContent === 'Free' ? 0 : parseFloat(checkoutShipping.textContent.replace('$', '')),
            total: parseFloat(checkoutTotal.textContent.replace('$', '')),
            orderNumber: generateOrderNumber(),
            orderDate: new Date().toLocaleDateString(),
            customer: {
                firstName: document.getElementById('first-name').value,
                lastName: document.getElementById('last-name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zip: document.getElementById('zip').value,
                country: document.getElementById('country').value,
                notes: document.getElementById('notes').value
            }
        };
        
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Redirect to confirmation page
        window.location.href = 'order-confirmation.html';
    });
}

// Load Order Confirmation
function loadOrderConfirmation() {
    if (!confirmationItemsContainer || !confirmationSubtotal || !confirmationShipping || !confirmationTotal || !orderNumber || !orderDate) return;
    
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    
    if (!orderDetails) {
        window.location.href = 'index.html';
        return;
    }
    
    let confirmationHTML = '';
    
    orderDetails.items.forEach(item => {
        const product = products.find(p => p.id === item.id);
        
        confirmationHTML += `
            <div class="checkout-item">
                <div class="checkout-item-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="checkout-item-details">
                    <div class="checkout-item-name">${product.name}</div>
                    <div class="checkout-item-price">$${product.price.toFixed(2)}</div>
                    <div class="checkout-item-quantity">Quantity: ${item.quantity}</div>
                </div>
            </div>
        `;
    });
    
    confirmationItemsContainer.innerHTML = confirmationHTML;
    
    confirmationSubtotal.textContent = '$' + orderDetails.subtotal.toFixed(2);
    confirmationShipping.textContent = orderDetails.shipping === 0 ? 'Free' : '$' + orderDetails.shipping.toFixed(2);
    confirmationTotal.textContent = '$' + orderDetails.total.toFixed(2);
    
    orderNumber.textContent = orderDetails.orderNumber;
    orderDate.textContent = orderDetails.orderDate;
}

// Setup Print Order
function setupPrintOrder() {
    if (!printOrder) return;
    
    printOrder.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
    });
}

// Add to Cart
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    addToCartWithQuantity(productId, 1);
}

// Add to Cart with Quantity
function addToCartWithQuantity(productId, quantity) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
        if (existingItem.quantity > 10) existingItem.quantity = 10;
    } else {
        cart.push({
            id: productId,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Update Cart Item Quantity
function updateCartItemQuantity(productId, change, newQuantity = null) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex === -1) return;
    
    if (newQuantity !== null) {
        cart[itemIndex].quantity = newQuantity;
    } else {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity < 1) {
            cart[itemIndex].quantity = 1;
        } else if (cart[itemIndex].quantity > 10) {
            cart[itemIndex].quantity = 10;
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

// Remove Cart Item
function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

// Update Cart Count
function updateCartCount() {
    if (!cartCount) return;
    
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Generate Order Number
function generateOrderNumber() {
    const prefix = 'EE';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${random}`;
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'white';
    notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    notification.style.borderRadius = '4px';
    notification.style.padding = '15px 20px';
    notification.style.display = 'flex';
    notification.style.justifyContent = 'space-between';
    notification.style.alignItems = 'center';
    notification.style.zIndex = '1000';
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
    notification.style.transition = 'all 0.3s ease';
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.display = 'flex';
    notificationContent.style.alignItems = 'center';
    
    const icon = notification.querySelector('.fa-check-circle');
    icon.style.color = 'var(--success-color)';
    icon.style.marginRight = '10px';
    icon.style.fontSize = '1.2rem';
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '1rem';
    closeButton.style.color = '#999';
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Hide notification after 3 seconds
    const timeout = setTimeout(() => {
        hideNotification();
    }, 3000);
    
    // Close button event
    closeButton.addEventListener('click', () => {
        clearTimeout(timeout);
        hideNotification();
    });
    
    function hideNotification() {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }
}

// Setup Contact Form
function setupContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            
            // Clear form
            contactForm.reset();
            
            // Show success message
            showNotification('Your message has been sent successfully!');
        }, 1500);
    });
}

// Setup Newsletter Form
function setupNewsletterForm() {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        submitButton.disabled = true;
        submitButton.textContent = 'Subscribing...';
        
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            
            // Clear form
            emailInput.value = '';
            
            // Show success message
            showNotification('Thank you for subscribing to our newsletter!');
        }, 1500);
    });
}

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', init);
