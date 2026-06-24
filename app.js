// ===== Product Database =====
const products = [
    {
        id: "whisky-blue-label",        name: "Johnnie Walker Blue Label Blended Scotch Whisky",
        brand: "Johnnie Walker",
        category: "whisky",
        price: 18500,
        oldPrice: 22000,
        discount: 16,
        rating: 4.9,
        reviews: 184,
        image: "images/whisky_blue_label.png",
        description: "Johnnie Walker Blue Label is an unrivaled masterpiece. It is an exquisite blend made from some of Scotland's rarest and most exceptional whiskies. Only one in every ten thousand casks has the elusive quality, character and flavor to deliver the remarkable signature taste of Johnnie Walker Blue Label.",
        details: {
            abv: "40%",
            origin: "Scotland",
            volume: "750ml",
            type: "Blended Scotch"
        },
        badges: ["bestseller", "exclusive"],
        stock: true
    },
    {
        id: "whisky-glenfiddich-12",
        name: "Glenfiddich 12 Year Old Single Malt Whisky",
        brand: "Glenfiddich",
        category: "whisky",
        price: 5800,
        oldPrice: 6800,
        discount: 15,
        rating: 4.7,
        reviews: 142,
        image: "images/whisky_glenfiddich.png",
        description: "Flowing in the Valley of the Deer since 1887, our signature expression is the world's most awarded single malt Scotch whisky. With a unique freshness from the same Highland spring water and a distinctive fruitiness, it is aged in the finest Oloroso sherry and bourbon casks.",
        details: {
            abv: "40%",
            origin: "Scotland",
            volume: "750ml",
            type: "Single Malt"
        },
        badges: ["bestseller"],
        stock: true
    },
    {
        id: "whisky-jack-daniels",
        name: "Jack Daniel's Old No. 7 Tennessee Whiskey",
        brand: "Jack Daniel's",
        category: "whisky",
        price: 3200,
        oldPrice: 3800,
        discount: 16,
        rating: 4.6,
        reviews: 210,
        image: "images/whisky_jack_daniels.png",
        description: "Mellowed drop by drop through 10-feet of sugar maple charcoal, then matured in handcrafted barrels. Our Tennessee Whiskey doesn't follow a calendar. It's only ready when our tasters say it is. We judge it by the way it looks, by its aroma and, of course, by the way it tastes.",
        details: {
            abv: "40%",
            origin: "USA",
            volume: "750ml",
            type: "Tennessee Whiskey"
        },
        badges: ["new"],
        stock: true
    },
    {
        id: "whisky-chivas-12",
        name: "Chivas Regal 12 Year Old Blended Scotch Whisky",
        brand: "Chivas Regal",
        category: "whisky",
        price: 4200,
        oldPrice: 5000,
        discount: 16,
        rating: 4.5,
        reviews: 96,
        image: "images/whisky_chivas.png",
        description: "Chivas 12 is a classic blended Scotch whisky, aged for 12 years. It features a round, rich taste with notes of wild herbs, heather, honey, and orchard fruits. An exceptionally smooth and easy-drinking blend that is internationally acclaimed.",
        details: {
            abv: "40%",
            origin: "Scotland",
            volume: "750ml",
            type: "Blended Scotch"
        },
        badges: ["offer"],
        stock: true
    },
    {
        id: "vodka-absolut-blue",
        name: "Absolut Vodka Blue Label Premium",
        brand: "Absolut",
        category: "vodka",
        price: 2800,
        oldPrice: 3300,
        discount: 15,
        rating: 4.7,
        reviews: 155,
        image: "images/vodka_absolut.png",
        description: "Absolut Vodka is a classic-tasting Swedish vodka crafted from winter wheat harvested in Åhus, Sweden. Known for its smooth flavor with subtle grain notes, it is exceptionally versatile for cocktails or drinking on the rocks.",
        details: {
            abv: "40%",
            origin: "Sweden",
            volume: "750ml",
            type: "Premium Vodka"
        },
        badges: ["bestseller"],
        stock: true
    },
    {
        id: "gin-bombay-sapphire",
        name: "Bombay Sapphire London Dry Gin",
        brand: "Bombay Sapphire",
        category: "gin",
        price: 3400,
        oldPrice: 4000,
        discount: 15,
        rating: 4.8,
        reviews: 122,
        image: "images/gin_bombay.png",
        description: "Bombay Sapphire is a premium London Dry Gin created with a unique combination of 10 hand-selected botanicals from exotic destinations. Vapor-infused for a delicate, bright, and perfectly balanced taste profile.",
        details: {
            abv: "47%",
            origin: "United Kingdom",
            volume: "750ml",
            type: "London Dry Gin"
        },
        badges: ["new"],
        stock: true
    },
    {
        id: "cognac-hennessy-vs",
        name: "Hennessy Very Special V.S Cognac",
        brand: "Hennessy",
        category: "cognac",
        price: 7800,
        oldPrice: 9200,
        discount: 15,
        rating: 4.8,
        reviews: 88,
        image: "images/cognac_hennessy.png",
        description: "Hennessy Very Special (V.S) is the most popular cognac in the world. Aged in new oak barrels, it is bold, rich, and fragrant with notes of toasted oak, fresh grapes, and delicate citrus. Its vibrant character is uniquely Hennessy.",
        details: {
            abv: "40%",
            origin: "France",
            volume: "700ml",
            type: "Cognac V.S"
        },
        badges: ["exclusive"],
        stock: true
    },
    {
        id: "beer-budweiser",
        name: "Budweiser Beer",
        brand: "Budweiser",
        category: "beer",
        price: 160,
        oldPrice: 200,
        discount: 20,
        rating: 4.4,
        reviews: 55,
        image: "images/budweiser.png",
        description: "Budweiser is a classic American lager beer with a crisp, clean taste and a balanced malt profile.",
        details: {
            abv: "5%",
            origin: "USA",
            volume: "330ml",
            type: "Lager Beer"
        },
        badges: ["offer"],
        stock: true
    },
    // {
    //     id: "beer-carlsberg",
    //     name: "Carlsberg Lager Beer",
    //     brand: "Carlsberg",
    //     category: "beer",
    //     price: 160,
    //     oldPrice: 200,
    //     discount: 20,
    //     rating: 4.4,
    //     reviews: 55,
    //     brand: "Carlsberg",
    //     description: "Carlsberg is a classic lager beer with a smooth taste and refreshing finish.",
    //     details: {
    //         abv: "5%",
    //     category: "beer",
    //         volume: "330ml",
    //         type: "Lager Beer"
    //     },
    //     badges: ["offer"],
    //     stock: true
    // },
    {
        id: "beer-rockford",
        name: "Rockford Whiskey",
        brand: "Rockford",
        category: "beer",
        price: 530,
        oldPrice: 650,
        discount: 18,
        rating: 4.2,
        reviews: 44,
        image: "images/rockford.png",
        description: "Rockford Beer is a balanced lager with a crisp finish and a smooth malt profile.",
        details: {
            abv: "4.8%",
            origin: "USA",
            volume: "330ml",
            type: "Lager Beer"
        },
        badges: ["new"],
        stock: true
    },
    {
        id: "beer-carlsberg",
        name: "Carlsberg Beer",
         brand: "Carlsberg",
        price: 160,
        oldPrice: 200,
        discount: 20,
        rating: 4.4,
        reviews: 55,
        image: "images/carlsberg.png",
        description: "Carlsberg is a classic lager beer with a smooth taste and refreshing finish.",
        details: {
            abv: "5%",
            origin: "Denmark",
            volume: "330ml",
            type: "Lager Beer"
        },
        badges: ["offer"],
        stock: true
    },
    {
        id: "beer-blenderspride",
        name: "Blenders Pride",
        brand: "Blenders Pride",
        category: "beer",
        price: 530,
        oldPrice: 650,
        discount: 18,
        rating: 4.1,
        reviews: 35,
        image: "images/blenderspride.png",
        description: "Blenders Pride is a well-balanced blend with a rich profile and smooth finish.",
        details: {
            abv: "5%",
            origin: "India",
            volume: "330ml",
            type: "Blended Beer"
        },
        badges: ["offer"],
        stock: true
    },
    {
        id: "beer-tuborg",
        name: "Tuborg Green Beer",
        brand: "Tuborg",
        category: "beer",
        price: 140,
        oldPrice: 200,
        discount: 30,
        rating: 4.3,
        reviews: 60,
        image: "images/tuborg.png",
        description: "Tuborg Green is a classic pilsner-style beer with a crisp taste, light malt character, and a refreshing finish.",
        details: {
            abv: "4.6%",
            origin: "Denmark",
            volume: "330ml",
            type: "Pilsner Beer"
        },
        badges: ["offer"],
        stock: true
    }
];

// ===== Application State =====
let cart = JSON.parse(localStorage.getItem('liquor_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('liquor_wishlist')) || [];
const filters = {
    category: "all",
    priceRange: "all",
    searchQuery: "",
    sortBy: "featured",
    view: "grid"
};

let currentQuickViewProduct = null;

// ===== DOM Elements =====
const ageModal = document.getElementById('ageModal');
const ageYes = document.getElementById('ageYes');
const ageNo = document.getElementById('ageNo');

const productsGrid = document.getElementById('productsGrid');
const noProducts = document.getElementById('noProducts');
const productCount = document.getElementById('productCount');
const categoryTitle = document.getElementById('categoryTitle');

const searchInput = document.getElementById('searchInput');
const priceFilter = document.getElementById('priceFilter');
const sortFilter = document.getElementById('sortFilter');
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');

const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const cartItemsContainer = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');

const wishlistCount = document.getElementById('wishlistCount');
const wishlistBtn = document.getElementById('wishlistBtn');

const quickViewOverlay = document.getElementById('quickViewOverlay');
const quickViewModal = document.getElementById('quickViewModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalBadges = document.getElementById('modalBadges');
const modalBrand = document.getElementById('modalBrand');
const modalName = document.getElementById('modalName');
const modalRating = document.getElementById('modalRating');
const modalDetails = document.getElementById('modalDetails');
const modalPrice = document.getElementById('modalPrice');
const modalOldPrice = document.getElementById('modalOldPrice');
const modalDiscount = document.getElementById('modalDiscount');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const qtyInput = document.getElementById('qtyInput');
const modalAddCart = document.getElementById('modalAddCart');
const modalBuyNow = document.getElementById('modalBuyNow');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Mobile navigation
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNavClose = document.getElementById('mobileNavClose');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNav = document.getElementById('mobileNav');
const mobileSearchToggle = document.getElementById('mobileSearchToggle');
const searchBarContainer = document.getElementById('searchBar');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Age gate disabled: hide modal on every load
    ageModal.classList.add('hidden');
    localStorage.setItem('ageVerified', 'true');

    // Set up Contact links with generic message
    setupContactLinks();

    // Load initial states
    updateCartCount();
    updateWishlistCount();
    renderProducts();

    // Register general event listeners
    registerEventListeners();
});

// ===== Event Listeners setup =====
function registerEventListeners() {
    // Age Gate Verification
    ageYes.addEventListener('click', () => {
        localStorage.setItem('ageVerified', 'true');
        ageModal.classList.add('hidden');
        showToast("Access granted. Enjoy shopping!");
    });

    ageNo.addEventListener('click', () => {
        alert("Access Denied: You must be 21 or older to view this website.");
        window.location.href = "https://www.google.com";
    });

    // Mobile Navigation Drawer
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
    });

    const closeMobileNav = () => {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
    };

    mobileNavClose.addEventListener('click', closeMobileNav);
    mobileNavOverlay.addEventListener('click', closeMobileNav);

    // Mobile Search Bar Toggle
    if (mobileSearchToggle) {
        mobileSearchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            searchBarContainer.classList.toggle('mobile-active');
            if (searchBarContainer.classList.contains('mobile-active')) {
                searchInput.focus();
            }
        });
    }

    // Nav Category Filtering (Desktop)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Sync mobile nav list active item
            const category = item.getAttribute('data-category');
            document.querySelectorAll('.mobile-nav-list li').forEach(li => {
                if (li.getAttribute('data-category') === category) {
                    li.classList.add('active');
                } else {
                    li.classList.remove('active');
                }
            });

            filters.category = category;
            categoryTitle.textContent = getCategoryName(category);
            renderProducts();
        });
    });

    // Nav Category Filtering (Mobile Drawer)
    document.querySelectorAll('.mobile-nav-list li').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.mobile-nav-list li').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Sync desktop nav active item
            const category = item.getAttribute('data-category');
            document.querySelectorAll('.nav-item').forEach(nav => {
                if (nav.getAttribute('data-category') === category) {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });

            filters.category = category;
            categoryTitle.textContent = getCategoryName(category);
            renderProducts();
            closeMobileNav();
        });
    });

    // Category click links in footer
    document.querySelectorAll('.footer-col a[data-cat]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.getAttribute('data-cat');
            
            // Set desktop active category
            document.querySelectorAll('.nav-item').forEach(nav => {
                if (nav.getAttribute('data-category') === cat) {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });

            filters.category = cat;
            categoryTitle.textContent = getCategoryName(cat);
            renderProducts();
            
            // Scroll to product display section
            const targetSection = document.getElementById('products');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Wishlist Header Button Click (Shows wishlisted items)
    wishlistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Reset nav menu selections
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.mobile-nav-list li').forEach(i => i.classList.remove('active'));

        filters.category = "wishlist";
        categoryTitle.textContent = "My Wishlist";
        renderProducts();
    });

    // Search bar functionality
    searchInput.addEventListener('input', (e) => {
        filters.searchQuery = e.target.value.trim().toLowerCase();
        renderProducts();
    });

    document.querySelector('.search-btn').addEventListener('click', (e) => {
        e.preventDefault();
        filters.searchQuery = searchInput.value.trim().toLowerCase();
        renderProducts();
    });

    // Dropdown Filters
    priceFilter.addEventListener('change', (e) => {
        filters.priceRange = e.target.value;
        renderProducts();
    });

    sortFilter.addEventListener('change', (e) => {
        filters.sortBy = e.target.value;
        renderProducts();
    });

    // View Toggles
    gridViewBtn.addEventListener('click', () => {
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        filters.view = 'grid';
        productsGrid.classList.remove('list-view');
        renderProducts();
    });

    listViewBtn.addEventListener('click', () => {
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        filters.view = 'list';
        productsGrid.classList.add('list-view');
        renderProducts();
    });

    // Shopping Cart Drawer Toggles
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });

    const closeCart = () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    };

    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Cart Drawer Checkout & Clear Actions
    clearCartBtn.addEventListener('click', clearCart);
    checkoutBtn.addEventListener('click', checkoutCartWhatsApp);

    // Quick View Modal Controls
    modalClose.addEventListener('click', closeQuickView);
    quickViewOverlay.addEventListener('click', closeQuickView);

    qtyMinus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value);
        if (val > 1) {
            qtyInput.value = val - 1;
        }
    });

    qtyPlus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value);
        if (val < 10) {
            qtyInput.value = val + 1;
        }
    });

    modalAddCart.addEventListener('click', () => {
        if (currentQuickViewProduct) {
            const qty = parseInt(qtyInput.value);
            addToCart(currentQuickViewProduct.id, qty);
            closeQuickView();
        }
    });

    modalBuyNow.addEventListener('click', () => {
        if (currentQuickViewProduct) {
            const qty = parseInt(qtyInput.value);
            buyNowWhatsApp(currentQuickViewProduct.id, qty);
            closeQuickView();
        }
    });
}

// ===== Helper Functions =====
function getCategoryName(category) {
    switch(category) {
        case 'all': return "All Products";
        case 'whisky': return "Whisky Collection";
        case 'vodka': return "Premium Vodka";
        case 'gin': return "Luxury Gin";
        case 'rum': return "Fine Rum";
        case 'cognac': return "Cognac & Brandy";
        case 'tequila': return "Tequila Selection";
        case 'wine': return "Wine & Champagne";
        case 'wishlist': return "My Wishlist";
        default: return "Products";
    }
}

function generateStarsHTML(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalf) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    return starsHTML;
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function setupContactLinks() {
    const defaultMsg = encodeURIComponent("Hello! I would like to inquire about your Night Rider spirits collection.");
    const waBaseUrl = `https://wa.me/918178532075?text=${defaultMsg}`;

    // Set href values
    const topWA = document.getElementById('topWhatsApp');
    const headerWA = document.getElementById('headerWhatsApp');
    const heroWA = document.getElementById('heroWhatsApp');
    const floatWA = document.getElementById('whatsappFloat');
    const footerWA = document.getElementById('footerWhatsApp');

    if (topWA) topWA.href = waBaseUrl;
    if (headerWA) headerWA.href = waBaseUrl;
    if (heroWA) heroWA.href = waBaseUrl;
    if (floatWA) floatWA.href = waBaseUrl;
    if (footerWA) footerWA.href = waBaseUrl;
    
    // Add target="_blank"
    [topWA, headerWA, heroWA, floatWA, footerWA].forEach(el => {
        if (el) el.setAttribute('target', '_blank');
    });
}

function sendWhatsAppMessage(messageText) {
    const waUrl = `https://wa.me/918178532075?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
}

// ===== Rendering Products =====
function renderProducts() {
    // Filter items
    let filteredProducts = products.filter(product => {
        // Category Filter
        if (filters.category === "wishlist") {
            if (!wishlist.includes(product.id)) return false;
        } else if (filters.category !== "all" && product.category !== filters.category) {
            return false;
        }

        // Search Filter
        if (filters.searchQuery) {
            const nameMatch = product.name.toLowerCase().includes(filters.searchQuery);
            const brandMatch = product.brand.toLowerCase().includes(filters.searchQuery);
            if (!nameMatch && !brandMatch) return false;
        }

        // Price Filter
        if (filters.priceRange !== "all") {
            const [min, max] = filters.priceRange.split('-').map(Number);
            if (product.price < min || product.price > max) return false;
        }

        return true;
    });

    // Sort items
    filteredProducts.sort((a, b) => {
        switch (filters.sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'rating':
                return b.rating - a.rating;
            case 'featured':
            default:
                // Featured keeps original db order, or prioritize bestseller badges
                const aFeatured = a.badges.includes('bestseller') ? 1 : 0;
                const bFeatured = b.badges.includes('bestseller') ? 1 : 0;
                return bFeatured - aFeatured;
        }
    });

    // Update product counter
    productCount.textContent = `${filteredProducts.length} Product${filteredProducts.length !== 1 ? 's' : ''}`;

    // Clear grid
    productsGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        noProducts.style.display = 'block';
        return;
    }

    noProducts.style.display = 'none';

    // Rerender cards
    filteredProducts.forEach(product => {
        const isWishlisted = wishlist.includes(product.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Define badges HTML
        let badgesHTML = '';
        product.badges.forEach(badge => {
            badgesHTML += `<span class="badge-tag badge-${badge}">${badge}</span>`;
        });

        // Current & Old Price displays
        const oldPriceHTML = product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toLocaleString('en-IN')}</span>` : '';
        const discountHTML = product.discount ? `<span class="discount-tag">-${product.discount}%</span>` : '';

        // Layout mapping depending on grid/list view selection
        if (filters.view === 'list') {
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-badges">${badgesHTML}</div>
                    <div class="product-actions-overlay">
                        <button class="overlay-btn btn-quick-view" onclick="openQuickView('${product.id}')">
                            <i class="fas fa-eye"></i> Quick View
                        </button>
                        <button class="overlay-btn btn-wishlist-overlay ${isWishlisted ? 'wishlisted' : ''}" onclick="toggleWishlist('${product.id}', event)">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-brand">${product.brand}</span>
                    <h3 class="product-name" onclick="openQuickView('${product.id}')" style="cursor:pointer;">${product.name}</h3>
                    <div class="product-rating">
                        <div class="stars">${generateStarsHTML(product.rating)}</div>
                        <span class="rating-count">(${product.reviews} reviews)</span>
                    </div>
                    <div class="product-details">
                        <div class="product-detail"><i class="fas fa-percentage"></i> ABV: ${product.details.abv}</div>
                        <div class="product-detail"><i class="fas fa-globe"></i> ${product.details.origin}</div>
                        <div class="product-detail"><i class="fas fa-flask"></i> ${product.details.volume}</div>
                        <div class="product-detail"><i class="fas fa-tag"></i> ${product.details.type}</div>
                    </div>
                    <p style="font-size:13px; color:var(--text-secondary); margin-top:8px;">${product.description}</p>
                    <div class="product-price">
                        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                        ${oldPriceHTML}
                        ${discountHTML}
                    </div>
                </div>
                <div class="product-card-actions" style="flex-direction:column; justify-content:center; gap:12px; width:200px; padding:20px; border-left:1px solid var(--border-color);">
                    <button class="btn-add-cart" onclick="addToCart('${product.id}')" style="width:100%;">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                    <button class="btn-buy-whatsapp" onclick="buyNowWhatsApp('${product.id}')" style="width:100%;">
                        <i class="fab fa-whatsapp"></i> Buy Now
                    </button>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-badges">${badgesHTML}</div>
                    <div class="product-actions-overlay">
                        <button class="overlay-btn btn-quick-view" onclick="openQuickView('${product.id}')">
                            <i class="fas fa-eye"></i> Quick View
                        </button>
                        <button class="overlay-btn btn-wishlist-overlay ${isWishlisted ? 'wishlisted' : ''}" onclick="toggleWishlist('${product.id}', event)">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-brand">${product.brand}</span>
                    <h3 class="product-name" onclick="openQuickView('${product.id}')" style="cursor:pointer;">${product.name}</h3>
                    <div class="product-rating">
                        <div class="stars">${generateStarsHTML(product.rating)}</div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <div class="product-details">
                        <div class="product-detail"><i class="fas fa-percentage"></i> ABV: ${product.details.abv}</div>
                        <div class="product-detail"><i class="fas fa-globe"></i> ${product.details.origin}</div>
                        <div class="product-detail"><i class="fas fa-flask"></i> ${product.details.volume}</div>
                    </div>
                    <div class="product-price">
                        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                        ${oldPriceHTML}
                        ${discountHTML}
                    </div>
                </div>
                <div class="product-card-actions">
                    <button class="btn-add-cart" onclick="addToCart('${product.id}')">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                    <button class="btn-buy-whatsapp" onclick="buyNowWhatsApp('${product.id}')">
                        <i class="fab fa-whatsapp"></i> Buy
                    </button>
                </div>
            `;
        }

        productsGrid.appendChild(card);
    });
}

// ===== Wishlist Handlers =====
function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();
    
    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
        showToast("Item added to wishlist");
    } else {
        wishlist.splice(index, 1);
        showToast("Item removed from wishlist");
    }

    localStorage.setItem('liquor_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();

    // Rerender products grid to update icon colors (and remove cards if in wishlist view)
    renderProducts();
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

// ===== Cart Handlers =====
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    localStorage.setItem('liquor_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showToast(`${quantity} x ${product.brand} added to cart!`);
}

function updateCartQty(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        localStorage.setItem('liquor_cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('liquor_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showToast("Item removed from cart");
}

function clearCart() {
    cart = [];
    localStorage.setItem('liquor_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showToast("Cart cleared");
}

function updateCartCount() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQty;
}

function renderCart() {
    // Clear display
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        return;
    }

    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';

    let totalVal = 0;

    cart.forEach(item => {
        totalVal += item.price * item.quantity;
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)"><i class="fas fa-minus"></i></button>
                    <span class="cart-qty">${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    cartTotal.textContent = `₹${totalVal.toLocaleString('en-IN')}`;
}

// ===== Quick View Modal handlers =====
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentQuickViewProduct = product;
    qtyInput.value = 1;

    // Set modal elements
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalBrand.textContent = product.brand;
    modalName.textContent = product.name;
    
    // Set badges
    modalBadges.innerHTML = '';
    product.badges.forEach(badge => {
        modalBadges.innerHTML += `<span class="badge-tag badge-${badge}">${badge}</span>`;
    });

    // Rating
    modalRating.innerHTML = `
        <div class="stars">${generateStarsHTML(product.rating)}</div>
        <span class="rating-count">(${product.reviews} customer reviews)</span>
    `;

    // Price
    modalPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
    if (product.oldPrice) {
        modalOldPrice.textContent = `₹${product.oldPrice.toLocaleString('en-IN')}`;
        modalOldPrice.style.display = 'inline-block';
    } else {
        modalOldPrice.style.display = 'none';
    }

    if (product.discount) {
        modalDiscount.textContent = `-${product.discount}%`;
        modalDiscount.style.display = 'inline-block';
    } else {
        modalDiscount.style.display = 'none';
    }

    // Details tags
    modalDetails.innerHTML = `
        <div class="modal-detail"><i class="fas fa-percentage"></i> ABV: ${product.details.abv}</div>
        <div class="modal-detail"><i class="fas fa-globe"></i> Origin: ${product.details.origin}</div>
        <div class="modal-detail"><i class="fas fa-flask"></i> Size: ${product.details.volume}</div>
        <div class="modal-detail"><i class="fas fa-tag"></i> Type: ${product.details.type}</div>
    `;

    // Description text
    let descEl = modalDetails.nextElementSibling;
    if (descEl && descEl.tagName !== 'P') {
        descEl = document.createElement('p');
        descEl.style.fontSize = '14px';
        descEl.style.color = 'var(--text-secondary)';
        descEl.style.marginTop = '12px';
        descEl.style.lineHeight = '1.6';
        modalDetails.parentNode.insertBefore(descEl, modalPrice);
    }
    descEl.textContent = product.description;

    // Show modal
    quickViewModal.classList.add('active');
    quickViewOverlay.classList.add('active');
}

function closeQuickView() {
    quickViewModal.classList.remove('active');
    quickViewOverlay.classList.remove('active');
    currentQuickViewProduct = null;
}

// ===== WhatsApp Redirections =====
function buyNowWhatsApp(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const subtotal = product.price * quantity;
    let message = `Hello! I would like to order this premium spirit:\n\n`;
    message += `- ${quantity}x ${product.name} (${product.brand}) - ₹${product.price.toLocaleString('en-IN')} each\n`;
    message += `Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n\n`;
    message += `Please confirm availability.\n\nDelivery Details:\n- Name: \n- Address: `;

    sendWhatsAppMessage(message);
}

function checkoutCartWhatsApp() {
    if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
    }

    let message = `Hello! I would like to order the following premium spirits:\n\n`;
    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        message += `${index + 1}. ${item.quantity}x ${item.name} (${item.brand}) - ₹${item.price.toLocaleString('en-IN')} each (Subtotal: ₹${subtotal.toLocaleString('en-IN')})\n`;
    });

    const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal Value: ₹${grandTotal.toLocaleString('en-IN')}\n`;
    if (grandTotal >= 5000) {
        message += "Free Shipping Applied!\n";
    } else {
        message += "Shipping: Standard Delivery Charges Apply.\n";
    }
    message += `\nDelivery Details:\n- Name: \n- Address: \n- Contact No: \n\nPlease confirm availability and payment details. Thank you!`;

    sendWhatsAppMessage(message);
}