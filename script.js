// ===== MOCK DATA =====
const restaurants = [
    {
        id: 1,
        name: "Nisar Charsi Tikka",
        cuisine: "BBQ & Traditional Native",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviewsCount: 1250,
        description: "The legendary Charsi Tikka is an icon of Peshawar. Known world-wide for its perfectly spiced mutton tikka and karahi.",
        menu: [
            { id: 101, name: "Mutton Karahi", desc: "Per Kg. Cooked in pure animal fat with tomatoes and green chilies.", price: 2800 },
            { id: 102, name: "Mutton Tikka", desc: "Per Dozen. Juicy, lightly spiced, grilled to perfection.", price: 1500 },
            { id: 103, name: "Kabuli Pulao", desc: "Traditional rice dish with raisins, carrots, and tender meat.", price: 800 },
            { id: 104, name: "Chicken Karahi", desc: "Per Kg. Traditional Peshawari style chicken.", price: 1800 },
            { id: 105, name: "Charsi Special Naan", desc: "Freshly baked tandoori naan.", price: 50 },
            { id: 106, name: "Mutton Champ", desc: "Spiced mutton chops grilled over charcoal.", price: 1600 },
            { id: 107, name: "Dumba Karahi", desc: "Per Kg. Lamb cooked in its own fat.", price: 3000 },
            { id: 108, name: "Peshawari Kehwa", desc: "Traditional green tea with cardamom.", price: 100 }
        ],
        reviews: [
            { id: 1, user: "Ahmed A.", text: "Best Karahi in the world. Absolute must-visit.", rating: 5 },
            { id: 2, user: "Sarah K.", text: "Authentic taste. A bit crowded but worth the wait.", rating: 4.5 }
        ]
    },
    {
        id: 2,
        name: "Jalil Kabab House",
        cuisine: "Traditional Chapli Kabab",
        image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviewsCount: 980,
        description: "Famous since the 1950s for the most authentic and juicy Peshawar Chapli Kababs.",
        menu: [
            { id: 201, name: "Beef Chapli Kabab", desc: "Per Piece. Pan-fried minced beef patty with spices.", price: 250 },
            { id: 202, name: "Chicken Chapli Kabab", desc: "Per Piece. Spiced minced chicken patty.", price: 200 },
            { id: 203, name: "Mutton Chapli Kabab", desc: "Per Piece. Premium mutton mince kabab.", price: 350 },
            { id: 204, name: "Special Raita", desc: "Mint and yogurt sauce.", price: 60 },
            { id: 205, name: "Kandahari Naan", desc: "Large traditional flatbread.", price: 80 },
            { id: 206, name: "Chicken Roast", desc: "Half chicken roasted with local spices.", price: 700 },
            { id: 207, name: "Gajar Halwa", desc: "Traditional carrot dessert.", price: 250 }
        ],
        reviews: [
            { id: 1, user: "Raza Ali", text: "The crispiness on the outside and juiciness inside is unmatched.", rating: 5 }
        ]
    },
    {
        id: 3,
        name: "Habibi Restaurant",
        cuisine: "Pakistani & Continental",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewsCount: 1100,
        description: "A family favorite offering a wide variety of local and continental dishes in a comfortable environment.",
        menu: [
            { id: 301, name: "Habibi Platter", desc: "Mixed BBQ, Rice, and Curries. Serves 4.", price: 4500 },
            { id: 302, name: "Chicken Handi", desc: "Boneless chicken cooked in a creamy sauce.", price: 1200 },
            { id: 303, name: "Roghni Naan", desc: "Soft, buttery flatbread.", price: 80 },
            { id: 304, name: "Chicken Manchurian", desc: "Desi Chinese style chicken with gravy.", price: 950 },
            { id: 305, name: "Egg Fried Rice", desc: "Classic Chinese fried rice.", price: 650 },
            { id: 306, name: "Mutton Kunna", desc: "Traditional slow-cooked mutton.", price: 1600 },
            { id: 307, name: "Seekh Kabab", desc: "Grilled minced meat skewers.", price: 600 },
            { id: 308, name: "Pina Colada", desc: "Refreshing coconut and pineapple blend.", price: 350 }
        ],
        reviews: [
            { id: 1, user: "Zainab T.", text: "Great ambiance for families. The Handi is delicious.", rating: 4 }
        ]
    },
    {
        id: 4,
        name: "Shiraz Ronaq",
        cuisine: "Fine Dining & Buffet",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviewsCount: 850,
        description: "High-end dining experience offering the best buffet in town with over 50 dishes.",
        menu: [
            { id: 401, name: "Dinner Buffet", desc: "Per Head. Unlimited access to 50+ dishes.", price: 2500 },
            { id: 402, name: "Mutton Ribs", desc: "A la carte special. Slow roasted.", price: 3000 },
            { id: 403, name: "Prawn Tempura", desc: "Crispy fried prawns.", price: 1200 },
            { id: 404, name: "Mulligatawny Soup", desc: "Rich lentil and chicken soup.", price: 450 },
            { id: 405, name: "Grilled Fish", desc: "Served with lemon butter sauce.", price: 1500 },
            { id: 406, name: "Shahi Tukda", desc: "Royal bread pudding dessert.", price: 400 },
            { id: 407, name: "Fresh Lime Sprite", desc: "Mint Margarita style.", price: 250 }
        ],
        reviews: [
            { id: 1, user: "Kamran M.", text: "Excellent variety and premium quality.", rating: 5 }
        ]
    },
    {
        id: 5,
        name: "Dumpukht",
        cuisine: "Traditional Slow-Cooked Meat",
        image: "dumpukht.jpg",
        rating: 4.8,
        reviewsCount: 600,
        description: "Specializes in 'Dumpukht', a method of slow-cooking meat in a sealed pot resulting in incredibly tender dishes.",
        menu: [
            { id: 501, name: "Mutton Dumpukht", desc: "Per Kg. Slow-cooked overnight.", price: 3200 },
            { id: 502, name: "Rosh", desc: "Clear meat broth with a large cut of meat.", price: 1800 },
            { id: 503, name: "Namkeen Tikka", desc: "Salted BBQ meat chunks.", price: 1400 },
            { id: 504, name: "Afghani Pulao", desc: "Sweet and savory rice dish.", price: 850 },
            { id: 505, name: "Lamb Chops", desc: "Grilled to perfection.", price: 1700 },
            { id: 506, name: "Mutton Joint Roast", desc: "Whole roasted mutton joint.", price: 4000 },
            { id: 507, name: "Gur Wali Chai", desc: "Tea sweetened with jaggery.", price: 150 }
        ],
        reviews: [
            { id: 1, user: "Faizan K.", text: "Meat falls off the bone. Absolutely divine.", rating: 5 }
        ]
    },
    {
        id: 6,
        name: "Cafe Crunch",
        cuisine: "Cafe & Continental",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        reviewsCount: 720,
        description: "The perfect spot for coffee, desserts, and premium continental meals in University Town.",
        menu: [
            { id: 601, name: "Crunch Burger", desc: "Signature beef burger with caramelized onions.", price: 850 },
            { id: 602, name: "Molten Lava Cake", desc: "With vanilla ice cream.", price: 550 },
            { id: 603, name: "Latte", desc: "Freshly brewed espresso with steamed milk.", price: 450 },
            { id: 604, name: "Alfredo Pasta", desc: "Fettuccine in creamy mushroom sauce.", price: 950 },
            { id: 605, name: "Club Sandwich", desc: "Triple layered sandwich with fries.", price: 750 },
            { id: 606, name: "Iced Caramel Macchiato", desc: "Chilled espresso drink.", price: 500 },
            { id: 607, name: "Grilled Chicken Steak", desc: "Served with mashed potatoes and veg.", price: 1200 },
            { id: 608, name: "Blueberry Cheesecake", desc: "Slice of rich baked cheesecake.", price: 550 }
        ],
        reviews: [
            { id: 1, user: "Ayesha S.", text: "Best coffee in Peshawar. Love the vibe.", rating: 4.5 }
        ]
    },
    {
        id: 7,
        name: "Taraskun",
        cuisine: "Afghani & BBQ",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewsCount: 540,
        description: "Authentic Afghani flavors brought to Peshawar. Famous for their Manto and BBQ.",
        menu: [
            { id: 701, name: "Afghani Boti", desc: "Mildly spiced, tender beef skewers.", price: 900 },
            { id: 702, name: "Manto", desc: "Meat dumplings served with yogurt sauce.", price: 700 },
            { id: 703, name: "Ashak", desc: "Leek and scallion dumplings.", price: 650 },
            { id: 704, name: "Borani Banjan", desc: "Fried eggplant with garlic yogurt.", price: 550 },
            { id: 705, name: "Uzbeki Pulao", desc: "Rice with lamb, carrots, and raisins.", price: 950 },
            { id: 706, name: "Bolani", desc: "Stuffed Afghan flatbread.", price: 400 },
            { id: 707, name: "Doogh", desc: "Salty yogurt drink.", price: 150 }
        ],
        reviews: [
            { id: 1, user: "Daud J.", text: "Hidden gem for Afghani food.", rating: 4 }
        ]
    },
    {
        id: 8,
        name: "Chief Burgers",
        cuisine: "Fast Food",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.3,
        reviewsCount: 1500,
        description: "Peshawar's iconic local fast food chain. A nostalgic favorite for many.",
        menu: [
            { id: 801, name: "Chief Special Burger", desc: "Double patty, egg, and cheese.", price: 550 },
            { id: 802, name: "Crispy Broast", desc: "Quarter chicken served with fries and bun.", price: 650 },
            { id: 803, name: "Zinger Burger", desc: "Crispy fried chicken breast.", price: 450 },
            { id: 804, name: "Chicken Tikka Pizza", desc: "Medium size.", price: 1100 },
            { id: 805, name: "Loaded Fries", desc: "Fries topped with cheese and chicken chunks.", price: 400 },
            { id: 806, name: "Coleslaw", desc: "Fresh cabbage salad.", price: 120 },
            { id: 807, name: "Chocolate Shake", desc: "Thick chocolate milkshake.", price: 300 }
        ],
        reviews: [
            { id: 1, user: "Omar P.", text: "Childhood memories attached. Quick and tasty.", rating: 4 }
        ]
    },
    {
        id: 9,
        name: "Bukhara",
        cuisine: "Luxury BBQ (Pearl Continental)",
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviewsCount: 300,
        description: "Located in Pearl Continental Hotel, offering a premium open-air BBQ experience.",
        menu: [
            { id: 901, name: "Sikandari Raan", desc: "Whole roasted leg of lamb.", price: 5500 },
            { id: 902, name: "Peshawari Chappal Kabab", desc: "Premium quality.", price: 1200 },
            { id: 903, name: "Bataer Roast", desc: "Roasted Quail (Per piece).", price: 800 },
            { id: 904, name: "Special Malai Boti", desc: "Creamy chicken skewers.", price: 1500 },
            { id: 905, name: "Nihari", desc: "Slow-cooked beef stew.", price: 1800 },
            { id: 906, name: "Garlic Naan", desc: "Fresh from tandoor.", price: 150 },
            { id: 907, name: "Rabri", desc: "Condensed milk dessert.", price: 600 }
        ],
        reviews: [
            { id: 1, user: "Nadia R.", text: "Expensive but the quality and service are 5 star.", rating: 5 }
        ]
    },
    {
        id: 10,
        name: "Central Asian Pulao",
        cuisine: "Regional Specialties",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        reviewsCount: 410,
        description: "Focusing solely on bringing the best Pilaf dishes from across Central Asia.",
        menu: [
            { id: 1001, name: "Uzbek Pulao", desc: "Served with quail eggs and horse meat sausage.", price: 1500 },
            { id: 1002, name: "Sajji", desc: "Roasted whole chicken.", price: 1800 },
            { id: 1003, name: "Shashlik", desc: "Central Asian style meat skewers.", price: 1200 },
            { id: 1004, name: "Samsa", desc: "Baked pastry with meat filling.", price: 300 },
            { id: 1005, name: "Lagman", desc: "Hand-pulled noodle soup.", price: 850 },
            { id: 1006, name: "Mutton Balochi Tikka", desc: "Spicy and tangy small mutton pieces.", price: 1600 },
            { id: 1007, name: "Chilled Ayran", desc: "Salty yogurt beverage.", price: 150 }
        ],
        reviews: [
            { id: 1, user: "Usman A.", text: "Different from local pulao, very unique and flavorful.", rating: 4.5 }
        ]
    }
];

// Delivery Riders
const deliveryRiders = ["Foodpanda", "Cheetay", "Bykea", "In-House Delivery"];

// STATE
let currentOrder = [];
let currentRestaurantId = null;

// DOM Elements
const restaurantContainer = document.getElementById('restaurant-container');
const modal = document.getElementById('restaurant-modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');

// ===== INITIALIZATION =====
function init() {
    renderRestaurants();
    setupEventListeners();
}

function renderRestaurants() {
    restaurantContainer.innerHTML = '';
    
    restaurants.forEach((restaurant, index) => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <div class="restaurant-rank">#${index + 1}</div>
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img">
            <div class="restaurant-info">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <span class="restaurant-cuisine">${restaurant.cuisine}</span>
                <p style="font-size: 0.9rem; margin-bottom: 1rem; color: #4b5563;">${restaurant.description.substring(0, 80)}...</p>
                <div class="restaurant-meta">
                    <div class="meta-item">
                        <i class="fa-solid fa-star"></i>
                        <span>${restaurant.rating}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fa-regular fa-comment"></i>
                        <span>${restaurant.reviewsCount} Reviews</span>
                    </div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openRestaurantModal(restaurant));
        restaurantContainer.appendChild(card);
    });
}

// ===== MODAL LOGIC =====
function openRestaurantModal(restaurant) {
    currentRestaurantId = restaurant.id;
    currentOrder = []; // Reset order when opening new restaurant
    
    // Generate Reviews HTML
    const reviewsHTML = restaurant.reviews.map(r => `
        <div class="review-card">
            <div class="review-header">
                <span class="reviewer-name">${r.user}</span>
                <span class="review-stars"><i class="fa-solid fa-star"></i> ${r.rating}</span>
            </div>
            <p class="review-text">"${r.text}"</p>
        </div>
    `).join('');

    // Generate Menu HTML
    const menuHTML = restaurant.menu.map(item => `
        <div class="menu-item">
            <div class="item-info">
                <h4>${item.name}</h4>
                <p class="item-desc">${item.desc}</p>
                <span class="item-price">Rs. ${item.price}</span>
            </div>
            <button class="add-to-order-btn" onclick="addToOrder(${item.id})">Add</button>
        </div>
    `).join('');

    // Generate Rider Options
    const riderOptions = deliveryRiders.map(rider => `<option value="${rider}">${rider}</option>`).join('');

    modalBody.innerHTML = `
        <div class="modal-header-img" style="background-image: url('${restaurant.image}')">
            <div class="modal-header-overlay">
                <h2>${restaurant.name}</h2>
                <div class="meta-item" style="display:inline-flex; margin-right: 15px;">
                    <i class="fa-solid fa-star"></i> <span>${restaurant.rating}</span>
                </div>
                <span>${restaurant.cuisine}</span>
            </div>
        </div>

        <div class="modal-body-content">
            <!-- Left Column: Menu & Reviews -->
            <div class="main-details">
                <div class="detail-section">
                    <h3><i class="fa-solid fa-book-open"></i> Menu & Ordering</h3>
                    <div class="menu-list">
                        ${menuHTML}
                    </div>
                </div>

                <div class="detail-section">
                    <h3><i class="fa-solid fa-comments"></i> Food Reviews</h3>
                    <div id="reviews-list-${restaurant.id}">
                        ${reviewsHTML}
                    </div>
                    
                    <h4 style="margin-top: 2rem; margin-bottom: 1rem;">Add a Review</h4>
                    <form class="custom-form" id="review-form" onsubmit="submitReview(event)">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" id="review-name" class="form-control" required placeholder="Your Name">
                        </div>
                        <div class="form-group">
                            <label>Rating (1-5)</label>
                            <input type="number" id="review-rating" class="form-control" min="1" max="5" required placeholder="5">
                        </div>
                        <div class="form-group">
                            <label>Review</label>
                            <textarea id="review-text" class="form-control" rows="3" required placeholder="How was the food?"></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Submit Review</button>
                        <div id="review-msg" class="success-msg">Review submitted successfully!</div>
                    </form>
                </div>
            </div>

            <!-- Right Column: Order Cart & Suggestions -->
            <div class="sidebar-details">
                
                <div class="detail-section order-summary">
                    <h3><i class="fa-solid fa-bag-shopping"></i> Your Order</h3>
                    <div class="order-items" id="order-items-list">
                        <p style="color:var(--text-muted); font-size: 0.9rem;">Your cart is empty.</p>
                    </div>
                    
                    <div class="total-row">
                        <span>Total:</span>
                        <span id="order-total">Rs. 0</span>
                    </div>

                    <form class="custom-form" id="checkout-form" style="margin-top: 1.5rem;" onsubmit="submitOrder(event)">
                        <div class="form-group">
                            <label>Delivery Rider Brand</label>
                            <select id="rider-select" class="form-control" required>
                                <option value="" disabled selected>Select a rider service</option>
                                ${riderOptions}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Delivery Address / Contact</label>
                            <input type="text" class="form-control" required placeholder="Address & Phone number">
                        </div>
                        <button type="submit" class="btn-submit" style="width: 100%;"><i class="fa-solid fa-motorcycle"></i> Place Order</button>
                        <div id="order-msg" class="success-msg">Order placed successfully!</div>
                    </form>
                </div>

                <div class="detail-section">
                    <h3><i class="fa-solid fa-lightbulb"></i> Suggestions</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">Have an idea on how ${restaurant.name} can improve? Let them know!</p>
                    <form class="custom-form" id="suggestion-form" onsubmit="submitSuggestion(event)">
                        <div class="form-group">
                             <textarea class="form-control" rows="3" required placeholder="Your suggestion..."></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Send Suggestion</button>
                        <div id="suggestion-msg" class="success-msg">Suggestion received. Thank you!</div>
                    </form>
                </div>

            </div>
        </div>
    `;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeRestaurantModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function setupEventListeners() {
    closeButton.addEventListener('click', closeRestaurantModal);
    
    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeRestaurantModal();
        }
    });
}

// ===== INTERACTIVITY FUNCTIONS =====

// Expose to window for onclick attributes in dynamically generated HTML
window.addToOrder = function(itemId) {
    const restaurant = restaurants.find(r => r.id === currentRestaurantId);
    const item = restaurant.menu.find(m => m.id === itemId);
    
    if(item) {
        currentOrder.push(item);
        updateOrderUI();
    }
}

function updateOrderUI() {
    const orderList = document.getElementById('order-items-list');
    const totalEl = document.getElementById('order-total');
    const checkoutBtn = document.querySelector('#checkout-form .btn-submit');
    
    if(currentOrder.length === 0) {
        orderList.innerHTML = `<p style="color:var(--text-muted); font-size: 0.9rem;">Your cart is empty.</p>`;
        totalEl.innerText = `Rs. 0`;
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
        return;
    }

    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = '1';

    // Group items
    const itemCounts = {};
    currentOrder.forEach(item => {
        if(itemCounts[item.id]) {
            itemCounts[item.id].qty += 1;
        } else {
            itemCounts[item.id] = { ...item, qty: 1 };
        }
    });

    orderList.innerHTML = Object.values(itemCounts).map(item => `
        <div class="order-row">
            <span>${item.qty}x ${item.name}</span>
            <span>Rs. ${item.price * item.qty}</span>
        </div>
    `).join('');

    const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
    totalEl.innerText = `Rs. ${total}`;
}

window.submitReview = function(e) {
    e.preventDefault();
    const name = document.getElementById('review-name').value;
    const rating = document.getElementById('review-rating').value;
    const text = document.getElementById('review-text').value;

    const restaurant = restaurants.find(r => r.id === currentRestaurantId);
    
    // Add to local state (will disappear on refresh, which is fine for mock)
    const newReview = { id: Date.now(), user: name, rating: rating, text: text };
    restaurant.reviews.unshift(newReview); // Add to top

    // Update UI
    const reviewsList = document.getElementById(`reviews-list-${currentRestaurantId}`);
    const reviewHTML = `
        <div class="review-card" style="animation: fadeInUp 0.5s ease-out;">
            <div class="review-header">
                <span class="reviewer-name">${newReview.user}</span>
                <span class="review-stars"><i class="fa-solid fa-star"></i> ${newReview.rating}</span>
            </div>
            <p class="review-text">"${newReview.text}"</p>
        </div>
    `;
    reviewsList.insertAdjacentHTML('afterbegin', reviewHTML);

    // Show message and reset
    e.target.reset();
    const msg = document.getElementById('review-msg');
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 3000);
}

window.submitOrder = function(e) {
    e.preventDefault();
    if(currentOrder.length === 0) {
        alert("Please add items to your order first.");
        return;
    }

    const rider = document.getElementById('rider-select').value;
    console.log(`Order placed via ${rider}. Items:`, currentOrder);

    // Show message
    const msg = document.getElementById('order-msg');
    msg.style.display = 'block';
    
    // Reset order
    currentOrder = [];
    updateOrderUI();
    e.target.reset();

    setTimeout(() => msg.style.display = 'none', 3000);
}

window.submitSuggestion = function(e) {
    e.preventDefault();
    
    const msg = document.getElementById('suggestion-msg');
    msg.style.display = 'block';
    e.target.reset();

    setTimeout(() => msg.style.display = 'none', 3000);
}

// ===== HELPER SIDEBAR LOGIC =====
const helpSidebar = document.getElementById('help-sidebar');
const helpToggle = document.getElementById('help-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const helpForm = document.getElementById('help-form');

helpToggle.addEventListener('click', () => {
    helpSidebar.classList.add('open');
});

closeSidebar.addEventListener('click', () => {
    helpSidebar.classList.remove('open');
});

// Close sidebar on click outside
window.addEventListener('click', (e) => {
    if (helpSidebar.classList.contains('open') && 
        !helpSidebar.contains(e.target) && 
        e.target !== helpToggle && 
        !helpToggle.contains(e.target)) {
        helpSidebar.classList.remove('open');
    }
});

helpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('help-msg');
    msg.style.display = 'block';
    e.target.reset();

    setTimeout(() => msg.style.display = 'none', 3000);
});

// Run init
window.onload = init;
