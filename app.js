// Product data - normally this would come from an API
const productsData = {
    "products": [
        {
            "id": 1,
            "name": "Wireless Bluetooth Headphones",
            "price": 79.99,
            "category": "Electronics",
            "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
            "images": [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
                "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400"
            ],
            "description": "High-quality wireless headphones with noise cancellation and 20-hour battery life. Perfect for music, calls, and travel.",
            "features": ["Bluetooth 5.0", "20hr Battery", "Noise Cancelling", "Quick Charge"],
            "rating": 4.5,
            "reviews": 128,
            "inStock": true,
            "featured": true
        },
        {
            "id": 2,
            "name": "Smart Fitness Watch",
            "price": 199.99,
            "category": "Electronics",
            "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
            "images": [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
                "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400"
            ],
            "description": "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone connectivity. Track your health 24/7.",
            "features": ["Heart Rate Monitor", "GPS Tracking", "Waterproof", "7-day Battery"],
            "rating": 4.3,
            "reviews": 89,
            "inStock": true,
            "featured": true
        },
        {
            "id": 3,
            "name": "Wireless Phone Charger",
            "price": 29.99,
            "category": "Electronics",
            "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400",
            "images": [
                "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400",
                "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400"
            ],
            "description": "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design for home or office.",
            "features": ["Fast Charging", "Qi Compatible", "LED Indicator", "Non-slip Base"],
            "rating": 4.2,
            "reviews": 94,
            "inStock": true,
            "featured": true
        },
        {
            "id": 4,
            "name": "RGB Gaming Mouse Pad",
            "price": 19.99,
            "category": "Electronics",
            "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
            "images": [
                "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
                "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400"
            ],
            "description": "Large gaming mouse pad with RGB lighting, smooth surface, non-slip base and extended size for dual mouse-keyboard setups.",
            "features": ["RGB Lighting", "Extra Large", "Smooth Surface", "Wired Power Cable"],
            "rating": 4.1,
            "reviews": 78,
            "inStock": true,
            "featured": false
        },

        {
            "id": 5,
            "name": "Premium Coffee Maker",
            "price": 149.99,
            "category": "Home & Kitchen",
            "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
            "images": [
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
                "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400"
            ],
            "description": "Programmable coffee maker with built-in grinder and thermal carafe. Wake up to freshly ground coffee every morning.",
            "features": ["Built-in Grinder", "Programmable", "Thermal Carafe", "Auto-shutoff"],
            "rating": 4.7,
            "reviews": 203,
            "inStock": true,
            "featured": true
        },
        {
            "id": 6,
            "name": "Slice Toaster",
            "price": 49.99,
            "category": "Home & Kitchen",
            "image": "https://media.istockphoto.com/id/1326235940/photo/electric-toaster-with-bread-slices-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=YQ5HMHqUD5smsdMJQLCGbVTRPkWn0IoxQWq9loJZ1SA=",
            "images": [
                "https://media.istockphoto.com/id/1326235940/photo/electric-toaster-with-bread-slices-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=YQ5HMHqUD5smsdMJQLCGbVTRPkWn0IoxQWq9loJZ1SA=",
                "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400"
            ],
            "description": "Stainless steel 4-slice toaster with variable browning control, defrost & cancel buttons.",
            "features": ["4 Slices", "Adjustable Browning", "Stainless Steel", "Easy Clean"],
            "rating": 4.3,
            "reviews": 142,
            "inStock": true,
            "featured": false
        },
        {
            "id": 7,
            "name": "Ceramic Non-stick Frying Pan",
            "price": 39.99,
            "category": "Home & Kitchen",
            "image": "https://images.unsplash.com/photo-1592156328757-ae2941276b2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "images": [
                "https://images.unsplash.com/photo-1592156328757-ae2941276b2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1664033881808-12e30d045c20?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
            "description": "12-inch ceramic non-stick frying pan for healthy cooking. Oven safe and easy to clean.",
            "features": ["Ceramic Coated", "Oven Safe", "Even Heat", "Easy Clean"],
            "rating": 4.5,
            "reviews": 88,
            "inStock": true,
            "featured": false
        },
        {
            "id": 8,
            "name": "Blender & Food Processor Combo",
            "price": 129.99,
            "category": "Home & Kitchen",
            "image": "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?q=80&w=655&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "images": [
                "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?q=80&w=655&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
            "description": "Kitchen blender and food processor combo with multiple blades, pulse function and safety lock.",
            "features": ["Multiple Blades", "Pulse Function", "Safety Lock", "Large Capacity"],
            "rating": 4.6,
            "reviews": 110,
            "inStock": true,
            "featured": false
        },

        {
            "id": 9,
            "name": "Leather Laptop Bag",
            "price": 89.99,
            "category": "Fashion",
            "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
            "images": [
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
            ],
            "description": "Genuine leather laptop bag with multiple compartments and adjustable strap. Professional and stylish.",
            "features": ["Genuine Leather", "15-inch Laptop Fit", "Multiple Pockets", "Adjustable Strap"],
            "rating": 4.4,
            "reviews": 67,
            "inStock": true,
            "featured": false
        },
        {
            "id": 10,
            "name": "Cotton Summer Dress",
            "price": 59.99,
            "category": "Fashion",
            "image": "https://images.unsplash.com/photo-1700064990923-b1af57cf58db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "images": [
                "https://images.unsplash.com/photo-1700064990923-b1af57cf58db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            "description": "Lightweight cotton summer dress with adjustable straps and floral print.",
            "features": ["100% Cotton", "Adjustable Straps", "Floral Print", "Machine Washable"],
            "rating": 4.6,
            "reviews": 95,
            "inStock": true,
            "featured": false
        },
        {
            "id": 11,
            "name": "Classic Denim Jacket",
            "price": 89.99,
            "category": "Fashion",
            "image": "https://media.istockphoto.com/id/1349960077/photo/rocking-denim-wear.jpg?s=1024x1024&w=is&k=20&c=5wNlgb9wCjeF9gT0QRPGPI7nkC32C8peXXp8ehnhXvE=",
            "images": [
                "https://media.istockphoto.com/id/1349960077/photo/rocking-denim-wear.jpg?s=1024x1024&w=is&k=20&c=5wNlgb9wCjeF9gT0QRPGPI7nkC32C8peXXp8ehnhXvE="
            ],
            "description": "Classic denim jacket with button front and two chest pockets. Perfect for spring and fall layering.",
            "features": ["Denim", "Button Front", "Chest Pockets", "Unisex Style"],
            "rating": 4.5,
            "reviews": 78,
            "inStock": true,
            "featured": false
        },
        {
            "id": 12,
            "name": "Running Shoes",
            "price": 119.99,
            "category": "Fashion",
            "image": "https://media.istockphoto.com/id/2206241977/photo/classic-black-and-white-sneakers-designed-for-casual-wear-showcasing-side-and-front-views.jpg?s=1024x1024&w=is&k=20&c=gF3zeWzPb65FgJIBo96bc11R-sm8zSx7bVR0duSVzIc=",
            "images": [
               "https://media.istockphoto.com/id/2206241977/photo/classic-black-and-white-sneakers-designed-for-casual-wear-showcasing-side-and-front-views.jpg?s=1024x1024&w=is&k=20&c=gF3zeWzPb65FgJIBo96bc11R-sm8zSx7bVR0duSVzIc="
            ],
            "description": "Lightweight running shoes with breathable mesh and shock-absorbing sole.",
            "features": ["Breathable Mesh", "Shock Absorption", "Lightweight", "Lace-up"],
            "rating": 4.4,
            "reviews": 210,
            "inStock": true,
            "featured": true
        },

        {
            "id": 13,
            "name": "Ergonomic Office Chair",
            "price": 299.99,
            "category": "Furniture",
            "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
            "images": [
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
                "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400"
            ],
            "description": "Professional ergonomic office chair with lumbar support and height adjustment. Comfort for long working hours.",
            "features": ["Lumbar Support", "Height Adjustable", "Mesh Back", "5-year Warranty"],
            "rating": 4.6,
            "reviews": 156,
            "inStock": true,
            "featured": false
        },
        {
            "id": 14,
            "name": "Wooden Dining Table Set",
            "price": 599.99,
            "category": "Furniture",
            "image": "https://images.unsplash.com/photo-1729603369774-23019dbf6c9c?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "images": [
                "https://images.unsplash.com/photo-1729603369774-23019dbf6c9c?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                 "https://images.unsplash.com/photo-1729603369774-23019dbf6c9c?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
            "description": "6-seater solid wood dining table set. Rustic finish with protective coating.",
            "features": ["Solid Wood", "6 Seater", "Rustic Finish", "Protective Coating"],
            "rating": 4.5,
            "reviews": 80,
            "inStock": true,
            "featured": false
        },
        {
            "id": 15,
            "name": "LED Floor Lamp",
            "price": 89.99,
            "category": "Furniture",
            "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400",
            "images": [
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400",
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            ],
            "description": "Modern LED floor lamp with dimmable brightness and flexible arm.",
            "features": ["LED", "Dimmable", "Flexible Arm", "Modern Design"],
            "rating": 4.3,
            "reviews": 70,
            "inStock": true,
            "featured": false
        },

        {
            "id": 17,
            "name": "Stainless Steel Water Bottle",
            "price": 24.99,
            "category": "Sports & Outdoors",
            "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
            "images": [
                "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
                "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400"
            ],
            "description": "Double-wall insulated stainless steel water bottle. Keeps drinks cold for 24hrs, hot for 12hrs.",
            "features": ["Double-wall Insulation", "24oz Capacity", "BPA Free", "Leak Proof"],
            "rating": 4.8,
            "reviews": 312,
            "inStock": true,
            "featured": false
        },
  {
            "id": 18,
            "name": "Cycle Helmet",
            "price": 34.99,
            "category": "Sports & Outdoors",
            "image": "https://images.unsplash.com/photo-1605271998276-db59cb8455bb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "images": [
                "https://images.unsplash.com/photo-1605271998276-db59cb8455bb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400"
            ],
            "description": "Double-wall insulated stainless steel water bottle. Keeps drinks cold for 24hrs, hot for 12hrs.",
            "features": ["Double-wall Insulation", "24oz Capacity", "BPA Free", "Leak Proof"],
            "rating": 4.8,
            "reviews": 312,
            "inStock": true,
            "featured": false
        },
        {
            "id": 22,
            "name": "Science Illustration Book",
            "price": 29.99,
            "category": "Books",
            "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
            "images": [
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            ],
            "description": "Vividly illustrated book of general science topics, suitable for grownups and teens.",
            "features": ["Full Colour", "Large Format", "Hard Cover"],
            "rating": 4.8,
            "reviews": 220,
            "inStock": true,
            "featured": false
        },
        {
            "id": 24,
            "name": "History-of-Art Coffee Table Book",
            "price": 39.99,
            "category": "Books",
            "image": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400",
            "images": [
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400",
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            ],
            "description": "Large format art history book with rich images and essays.",
            "features": ["Large Format", "Illustrated", "Hard Cover", "Gift Quality"],
            "rating": 4.9,
            "reviews": 76,
            "inStock": true,
            "featured": false
        },

        {
            "id": 25,
            "name": "Organic Skincare Set",
            "price": 59.99,
            "category": "Beauty",
            "image": "https://plus.unsplash.com/premium_photo-1661503187612-e0e7a8f50400?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "images": [
                "https://images.unsplash.com/photo-1598511729510-3a29c6f1f7c4?w=400",
                "https://images.unsplash.com/photo-1598511729510-3a29c6f1f7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            ],
            "description": "Natural and organic skincare gift set including cleanser, toner, and moisturizer.",
            "features": ["Organic", "Cruelty-Free", "Dermatologist Tested"],
            "rating": 4.7,
            "reviews": 123,
            "inStock": true,
            "featured": true
        },
        {
            "id": 26,
            "name": "Luxury Perfume Spray",
            "price": 99.99,
            "category": "Beauty",
            "image": "https://media.istockphoto.com/id/2149954181/photo/three-luxury-perfume-bottles.jpg?s=1024x1024&w=is&k=20&c=gGl_M5UnAYcCVds3L8Fyi04iFoPtW6dVTdNGfNNGkWs=",
            "images": [
                "https://media.istockphoto.com/id/2149954181/photo/three-luxury-perfume-bottles.jpg?s=1024x1024&w=is&k=20&c=gGl_M5UnAYcCVds3L8Fyi04iFoPtW6dVTdNGfNNGkWs=",
            ],
            "description": "Elegant perfume spray with 50ml bottle, long-lasting fragrance and sleek packaging.",
            "features": ["50ml", "Long-Lasting", "Designer Bottle"],
            "rating": 4.5,
            "reviews": 131,
            "inStock": true,
            "featured": false
        },
        {
            "id": 27,
            "name": "Natural Lipstick Collection",
            "price": 29.99,
            "category": "Beauty",
            "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
            "images": [
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            ],
            "description": "Set of 6 natural shade lipsticks, with nourishing formula and smooth application.",
            "features": ["6 Shades", "Nourishing", "Matte & Satin", "Long Wear"],
            "rating": 4.6,
            "reviews": 98,
            "inStock": true,
            "featured": false
        },
        {
            "id": 28,
            "name": "Hydrating Face Mask",
            "price": 19.99,
            "category": "Beauty",
            "image": "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400",
            "images": [
                "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400",
                "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            ],
            "description": "Clay hydrating face mask to rejuvenate skin and reduce pores.",
            "features": ["Clay-Based", "Deep Hydration", "Vegan", "Paraben Free"],
            "rating": 4.4,
            "reviews": 76,
            "inStock": true,
            "featured": false
        }
    ],
    "categories": [
        { "name": "Electronics", "count": 4 },
        { "name": "Home & Kitchen", "count": 4 },
        { "name": "Fashion", "count": 4 },
        { "name": "Furniture", "count": 3 },
        { "name": "Sports & Outdoors", "count": 1 },
        { "name": "Books", "count": 2 },
        { "name": "Beauty", "count": 4 }
    ]
};


// Global variables - mixing let/const/var like intermediate dev would
let currentPage = 'home';
var cartItems = [];
let filteredProducts = [];
const TAX_RATE = 0.08; // 8% tax
let currentProduct = null;

// Get cart from localStorage on page load
function initCart() {
    const saved = localStorage.getItem('techmart_cart');
    if (saved) {
        try {
            cartItems = JSON.parse(saved);
            console.log('Cart loaded:', cartItems);
        } catch (e) {
            console.error('Error loading cart:', e);
            cartItems = [];
        }
    }
    updateCartUI();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('techmart_cart', JSON.stringify(cartItems));
    console.log('Cart saved');
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Show loading overlay
function showLoading() {
    document.getElementById('loading-overlay').classList.add('show');
}

// Hide loading overlay  
function hideLoading() {
    document.getElementById('loading-overlay').classList.remove('show');
}

// Show toast notification
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');

    toastMsg.textContent = message;
    toast.className = isError ? 'toast error show' : 'toast show';

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Show modal
function showModal(content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = content;
    modal.classList.remove('hidden');
}

// Hide modal
function hideModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Navigation functionality
function showPage(pageName) {
    console.log('Navigating to:', pageName);

    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;

        // Load page content
        switch (pageName) {
            case 'home':
                loadHomePage();
                break;
            case 'products':
                loadProductsPage();
                break;
            case 'cart':
                loadCartPage();
                break;
            case 'checkout':
                loadCheckoutPage();
                break;
            case 'about':
            case 'contact':
                // These are static pages
                break;
        }

        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }

    if (hasHalfStar) {
        stars += '½';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }

    return stars;
}

// Create product card HTML
function createProductCard(product, showAddToCart = true) {
    // console.log(product)
    return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-name">${product?.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews} reviews)</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                ${showAddToCart ? `<button class="add-to-cart-btn" onclick="addToCart(${product.id}, event)">Add to Cart</button>` : ''}
            </div>
        </div>
    `;
}

// Load home page content
function loadHomePage() {
    console.log('Loading home page...');

    // Load featured products
    const featuredContainer = document.getElementById('featured-products');
    const featuredProducts = productsData?.products?.filter(p => p?.featured);

    if (featuredContainer) {
        featuredContainer.innerHTML = featuredProducts?.map(product =>
            createProductCard(product)
        ).join('');
    }

    // Load categories
    const categoriesContainer = document.getElementById('categories-grid');
    if (categoriesContainer) {
        categoriesContainer.innerHTML = productsData.categories.map(category => `
            <div class="category-card" onclick="filterByCategory('${category.name}')">
                <h3 class="category-name">${category.name}</h3>
                <p class="category-count">${category.count} products</p>
            </div>
        `).join('');
    }
}

// Filter products by category
function filterByCategory(categoryName) {
    showPage('products');

    // Set the filter after a small delay to ensure page is loaded
    setTimeout(() => {
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.value = categoryName;
            filterProducts();
        }
    }, 100);
}

// Load products page
function loadProductsPage() {
    console.log('Loading products page...');

    // Initialize filters
    setupFilters();

    // Load all products initially
    filteredProducts = [...productsData.products];
    displayProducts();
}

// Setup filter functionality
function setupFilters() {
    // Populate category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter && categoryFilter.children.length <= 1) {
        productsData.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = category.name;
            categoryFilter.appendChild(option);
        });
    }

    // Add event listeners
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');

    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }
}

// Filter and sort products
function filterProducts() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const selectedCategory = document.getElementById('category-filter')?.value || '';
    const sortBy = document.getElementById('sort-select')?.value || '';

    console.log('Filtering products:', { searchTerm, selectedCategory, sortBy });

    // Start with all products
    let filtered = [...productsData.products];

    // Apply search filter
    if (searchTerm) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }

    // Apply category filter
    if (selectedCategory) {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply sorting
    switch (sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
    }

    filteredProducts = filtered;
    displayProducts();
}

// Display products in grid
function displayProducts() {
    const container = document.getElementById('all-products');
    if (!container) return;

    if (filteredProducts.length === 0) {
        container.innerHTML = '<div class="empty-cart"><h3>No products found</h3><p>Try adjusting your search or filters</p></div>';
        return;
    }

    container.innerHTML = filteredProducts.map(product =>
        createProductCard(product)
    ).join('');
}

// View individual product
function viewProduct(productId) {
    console.log('Viewing product:', productId);

    const product = productsData.products.find(p => p.id === productId);
    if (!product) {
        showToast('Product not found', true);
        return;
    }

    currentProduct = product;
    showPage('product-detail');
    loadProductDetail(product);
}

// Load product detail page
function loadProductDetail(product) {
    const container = document.getElementById('product-detail-content');
    if (!container) return;

    const images = product.images || [product.image];
    const mainImage = images[0];

    container.innerHTML = `
        <div class="product-images">
            <img src="${mainImage}" alt="${product.name}" class="main-image" id="main-product-image">
            ${images.length > 1 ? `
                <div class="image-thumbnails">
                    ${images.map((img, index) => `
                        <img src="${img}" alt="${product.name}" class="thumbnail ${index === 0 ? 'active' : ''}" 
                             onclick="changeMainImage('${img}', this)">
                    `).join('')}
                </div>
            ` : ''}
        </div>
        <div class="product-details">
            <h1>${product.name}</h1>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-rating">
                <span class="stars">${generateStars(product.rating)}</span>
                <span class="rating-count">(${product.reviews} reviews)</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-features">
                <h4>Features:</h4>
                <ul class="features-list">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="quantity-selector">
                <label>Quantity:</label>
                <div class="quantity-controls">
                    <button type="button" class="qty-btn" onclick="changeQuantity(-1)">-</button>
                    <input type="number" class="qty-input" id="product-quantity" value="1" min="1" max="10">
                    <button type="button" class="qty-btn" onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            <button class="btn-primary" onclick="addToCartFromDetail()">Add to Cart</button>
            <button class="btn-secondary" onclick="showPage('products')" style="margin-left: 1rem;">Back to Products</button>
        </div>
    `;
}

// Change main product image
function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Change quantity in product detail
function changeQuantity(delta) {
    const qtyInput = document.getElementById('product-quantity');
    if (!qtyInput) return;

    let newQty = parseInt(qtyInput.value) + delta;
    newQty = Math.max(1, Math.min(10, newQty)); // Between 1 and 10
    qtyInput.value = newQty;
}

// Add to cart from product detail page
function addToCartFromDetail() {
    if (!currentProduct) return;

    const quantity = parseInt(document.getElementById('product-quantity')?.value || 1);
    addToCart(currentProduct.id, null, quantity);
}

// Add product to cart
function addToCart(productId, event, quantity = 1) {
    if (event) {
        event.stopPropagation(); // Prevent card click
    }

    console.log('Adding to cart:', productId, 'qty:', quantity);

    const product = productsData.products.find(p => p.id === productId);
    if (!product) {
        showToast('Product not found', true);
        return;
    }

    // Check if item already in cart
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

// Load cart page
function loadCartPage() {
    console.log('Loading cart page...');

    const itemsContainer = document.getElementById('cart-items');
    const summaryContainer = document.getElementById('cart-summary');

    if (cartItems.length === 0) {
        if (itemsContainer) {
            itemsContainer.innerHTML = `
                <div class="empty-cart">
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                    <button class="btn-primary" onclick="showPage('products')">Shop Now</button>
                </div>
            `;
        }
        if (summaryContainer) {
            summaryContainer.innerHTML = '';
        }
        return;
    }

    // Render cart items
    if (itemsContainer) {
        itemsContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" class="qty-input" value="${item.quantity}" 
                               onchange="updateCartQuantity(${item.id}, this.value)" min="1">
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `).join('');
    }

    // Render cart summary
    renderCartSummary(summaryContainer);
}

// Update cart item quantity
function updateCartQuantity(productId, newQuantity) {
    newQuantity = parseInt(newQuantity);

    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cartItems.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartUI();
        loadCartPage(); // Refresh the display
    }
}

// Remove item from cart
function removeFromCart(productId) {
    const index = cartItems.findIndex(item => item.id === productId);
    if (index > -1) {
        const removedItem = cartItems[index];
        cartItems.splice(index, 1);
        saveCart();
        updateCartUI();
        showToast(`${removedItem.name} removed from cart`);

        if (currentPage === 'cart') {
            loadCartPage();
        }
    }
}

// Render cart summary
function renderCartSummary(container, isCheckout = false) {
    if (!container) return;

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    container.innerHTML = `
        <h3>${isCheckout ? 'Order Summary' : 'Cart Summary'}</h3>
        <div class="summary-row">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Tax (${(TAX_RATE * 100).toFixed(0)}%):</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div class="summary-row summary-total">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        ${!isCheckout ? `<button class="btn-primary" onclick="showPage('checkout')" style="width: 100%; margin-top: 1rem;">Proceed to Checkout</button>` : ''}
    `;
}

// Load checkout page
function loadCheckoutPage() {
    console.log('Loading checkout page...');

    if (cartItems.length === 0) {
        showPage('cart');
        showToast('Your cart is empty!', true);
        return;
    }

    const summaryContainer = document.getElementById('checkout-summary');
    renderCartSummary(summaryContainer, true);

    // Setup form validation
    setupCheckoutValidation();
}

// Setup checkout form validation
function setupCheckoutValidation() {
    const form = document.getElementById('checkout-form');
    if (!form) return;

    form.addEventListener('submit', handleCheckoutSubmit);

    // Add real-time validation
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

// Validate individual form field
function validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    const errorElement = document.getElementById(`${fieldName}-error`);

    let errorMessage = '';

    switch (fieldName) {
        case 'firstName':
        case 'lastName':
            if (!value) {
                errorMessage = 'This field is required';
            } else if (value.length < 2) {
                errorMessage = 'Must be at least 2 characters';
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                errorMessage = 'Email is required';
            } else if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email';
            }
            break;

        case 'address':
            if (!value) {
                errorMessage = 'Address is required';
            }
            break;

        case 'city':
            if (!value) {
                errorMessage = 'City is required';
            }
            break;

        case 'zipCode':
            const zipRegex = /^\d{5}(-\d{4})?$/;
            if (!value) {
                errorMessage = 'ZIP code is required';
            } else if (!zipRegex.test(value)) {
                errorMessage = 'Please enter a valid ZIP code';
            }
            break;

        case 'cardNumber':
            const cardRegex = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
            if (!value) {
                errorMessage = 'Card number is required';
            } else if (!cardRegex.test(value.replace(/\s/g, ''))) {
                errorMessage = 'Please enter a valid card number';
            }
            break;

        case 'expiryDate':
            const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (!value) {
                errorMessage = 'Expiry date is required';
            } else if (!expiryRegex.test(value)) {
                errorMessage = 'Please enter MM/YY format';
            }
            break;

        case 'cvv':
            const cvvRegex = /^\d{3,4}$/;
            if (!value) {
                errorMessage = 'CVV is required';
            } else if (!cvvRegex.test(value)) {
                errorMessage = 'Please enter a valid CVV';
            }
            break;
    }

    if (errorElement) {
        errorElement.textContent = errorMessage;
    }

    return !errorMessage;
}

// Clear field error
function clearFieldError(field) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

// Handle checkout form submission
function handleCheckoutSubmit(event) {
    event.preventDefault();

    console.log('Processing checkout...');

    const form = event.target;
    const formData = new FormData(form);
    let isValid = true;

    // Validate all fields
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (!isValid) {
        showToast('Please fix the errors above', true);
        return;
    }

    // Show loading
    showLoading();

    // Simulate API call
    setTimeout(() => {
        hideLoading();

        // Clear cart and show success
        cartItems = [];
        saveCart();
        updateCartUI();

        showModal(`
            <h2 style="color: var(--success-color); margin-bottom: 1rem;">Order Placed Successfully!</h2>
            <p>Thank you for your order! You will receive a confirmation email shortly.</p>
            <p><strong>Order Total:</strong> $${calculateCartTotal().toFixed(2)}</p>
            <button class="btn-primary" onclick="hideModal(); showPage('home')" style="margin-top: 1rem;">Continue Shopping</button>
        `);

    }, 2000);
}

// Calculate cart total
function calculateCartTotal() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return subtotal + (subtotal * TAX_RATE);
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();

    showLoading();

    // Simulate sending message
    setTimeout(() => {
        hideLoading();
        showToast('Message sent successfully!');
        event.target.reset();
    }, 1500);
}

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    console.log('TechMart Store initialized');

    // Initialize cart
    initCart();
    // Setup navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if (page) {
                showPage(page);
            }
        });
    });

    // Setup hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Setup modal close
    const closeModal = document.getElementById('close-modal');
    const modal = document.getElementById('modal');

    if (closeModal) {
        closeModal.addEventListener('click', hideModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });
    }

    // Setup contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Load initial page
    loadHomePage();
});

// Export functions for global access (not typical but intermediate dev might do this)
window.showPage = showPage;
window.addToCart = addToCart;
window.viewProduct = viewProduct;
window.filterByCategory = filterByCategory;
window.changeMainImage = changeMainImage;
window.changeQuantity = changeQuantity;
window.addToCartFromDetail = addToCartFromDetail;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;