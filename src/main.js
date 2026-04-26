const MENU_DATA = [
  {
    "category_en": "Hot Coffees",
    "category_ar": "مشروبات القهوة الساخنة",
    "items": [
      { "name_en": "Turkish Coffee", "name_ar": "قهوة تركية", "prices": { "S": 30, "M": 40 } },
      { "name_en": "Espresso", "name_ar": "إسبريسو", "prices": { "S": 35, "M": 45 } },
      { "name_en": "Nutella Coffee", "name_ar": "قهوه نوتيلا", "prices": { "S": 40, "M": 50 } },
      { "name_en": "French Coffee", "name_ar": "قهوة فرنسية", "prices": { "M": 45 } },
      { "name_en": "Hazelnut Coffee", "name_ar": "قهوة بالبندق", "prices": { "M": 45 } },
      { "name_en": "Arabic Coffee", "name_ar": "قهوة عربي", "prices": { "S": 35, "M": 45 } },
      { "name_en": "Caffè American", "name_ar": "أمريكان", "prices": { "S": 50, "M": 60 } },
      { "name_en": "Caffè Macchiato", "name_ar": "ماكياتو", "prices": { "S": 55 } },
      { "name_en": "Nescafè", "name_ar": "نسكافيه", "prices": { "M": 45, "L": 55 } },
      { "name_en": "Cappuccino", "name_ar": "كابتشينو", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Caffè Latte", "name_ar": "قهوة لاتيه", "prices": { "M": 60, "L": 70 } },
      { "name_en": "Crème Brulèe Latte", "name_ar": "لاتيه كريم بورليه", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Lotus Latte", "name_ar": "لاتيه لوتس", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Spanish Latte", "name_ar": "سبانيش لاتيه", "prices": { "M": 75, "L": 85 } },
      { "name_en": "Pistachio Latte", "name_ar": "لاتيه بالفستق", "prices": { "M": 80, "L": 90 } },
      { "name_en": "Cortado", "name_ar": "كورتادو", "prices": { "M": 65 } },
      { "name_en": "Flat White", "name_ar": "فلاتوايت", "prices": { "M": 70 } },
      { "name_en": "Caffè con panna", "name_ar": "كونبانا", "prices": { "M": 50 } },
      { "name_en": "Caramel Macchiato", "name_ar": "كراميل ماكياتو", "prices": { "M": 85 } },
      { "name_en": "Avocado", "name_ar": "أفوكادو", "prices": { "S": 50 } },
      { "name_en": "Caffè Mocha", "name_ar": "قهوة موكا", "prices": { "M": 75 } },
      { "name_en": "White Mocha", "name_ar": "موكا بيضاء", "prices": { "M": 75 } },
      { "name_en": "Specialty coffee", "name_ar": "قهوه مختصه", "prices": { "M": 80 } }
    ]
  },
  {
    "category_en": "Cold Coffees",
    "category_ar": "القهوة المثلجة",
    "items": [
      { "name_en": "Iced Coffee", "name_ar": "قهوة مثلجة", "prices": { "M": 75, "L": 85 } },
      { "name_en": "Iced Latte", "name_ar": "لاتيه مثلج", "prices": { "M": 65, "L": 75 } },
      { "name_en": "Matcha Latte", "name_ar": "ماتشا لاتيه", "prices": { "M": 80, "L": 90 } },
      { "name_en": "Iced Spanish Latte", "name_ar": "سبانش لاتيه مثلج", "prices": { "M": 75, "L": 85 } },
      { "name_en": "Iced Caramel Macchiato", "name_ar": "ماكياتو كارميل مثلج", "prices": { "M": 75, "L": 85 } },
      { "name_en": "Iced Mocha", "name_ar": "موكا مثلجة", "prices": { "M": 75, "L": 85 } },
      { "name_en": "Iced Tea", "name_ar": "شاي مثلج", "prices": { "M": 60, "L": 70 } }
    ]
  },
  {
    "category_en": "Hot Drinks",
    "category_ar": "مشروبات ساخنة",
    "items": [
      { "name_en": "Tea", "name_ar": "شاي", "prices": { "M": 20 } },
      { "name_en": "Tea with Mint", "name_ar": "شاي بالنعناع", "prices": { "M": 25 } },
      { "name_en": "Green Tea", "name_ar": "شاي أخضر", "prices": { "M": 25 } },
      { "name_en": "Flavoured Tea", "name_ar": "شاي بالنكهات", "prices": { "M": 25 } },
      { "name_en": "Karak Tea", "name_ar": "شاي كراك", "prices": { "M": 45 } },
      { "name_en": "Tea Latte", "name_ar": "شاي بالحليب", "prices": { "M": 35 } },
      { "name_en": "Herbs", "name_ar": "أعشاب", "prices": { "M": 25 } },
      { "name_en": "Herbs Cocktail", "name_ar": "كوكتيل أعشاب", "prices": { "M": 65 } },
      { "name_en": "Apple Cider", "name_ar": "سيدر", "prices": { "M": 65 } },
      { "name_en": "Hot Chocolate", "name_ar": "شوكولاتة ساخنة", "prices": { "M": 75 } },
      { "name_en": "White Hot Chocolate", "name_ar": "شوكولاتة بيضاء ساخنة", "prices": { "M": 75 } }
    ]
  },
  {
    "category_en": "Fresh Juices",
    "category_ar": "عصائر طازجة",
    "items": [
      { "name_en": "Lemon", "name_ar": "ليمون", "prices": { "M": 40 } },
      { "name_en": "Lemon Mint", "name_ar": "ليمون نعناع", "prices": { "M": 50 } },
      { "name_en": "Mango", "name_ar": "مانجو", "prices": { "M": 50 } },
      { "name_en": "Strawberry", "name_ar": "فراولة", "prices": { "M": 40 } },
      { "name_en": "Watermelon", "name_ar": "بطيخ", "prices": { "M": 50 } },
      { "name_en": "Guava", "name_ar": "جوافة", "prices": { "M": 40 } },
      { "name_en": "Orange", "name_ar": "برتقال", "prices": { "M": 40 } },
      { "name_en": "Kiwi", "name_ar": "كيوي", "prices": { "M": 60 } },
      { "name_en": "Avocado", "name_ar": "افوكادو", "prices": { "M": 75 } },
      { "name_en": "Date juice", "name_ar": "بلح", "prices": { "M": 50 } },
      { "name_en": "Yogurt", "name_ar": "زبادي", "prices": { "M": 50 } },
      { "name_en": "Yogurt Honey", "name_ar": "زبادى عسل", "prices": { "M": 60 } },
      { "name_en": "Strawberry Yogurt", "name_ar": "زبادى فراولة", "prices": { "M": 65 } }
    ]
  },
  {
    "category_en": "Milkshakes",
    "category_ar": "ميلك شيك",
    "items": [
      { "name_en": "Chocolate Milkshake", "name_ar": "ميلك شيك شوكولاتة", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Strawberry Milkshake", "name_ar": "ميلك شيك فراولة", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Mango Milkshake", "name_ar": "ميلك شيك مانجو", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Caramel Milkshake", "name_ar": "ميلك شيك كراميل", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Oreo Milkshake", "name_ar": "ميلك شيك أوريو", "prices": { "M": 75, "L": 85 } },
      { "name_en": "Hazelnut Milkshake", "name_ar": "ميلك شيك بندق", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Milkshake (Lotus - Pistachio - Matcha - Cookies - Cotton Candy)", "name_ar": "ميلك شيك (لوتس – فسدق – ماتشا – كوكيز – غزل بنات)", "prices": { "M": 90, "L": 100 } }
    ]
  },
  {
    "category_en": "Frappe",
    "category_ar": "فرابيه",
    "items": [
      { "name_en": "Coffee Frappe", "name_ar": "فرابيه القهوة", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Mocha Frappe", "name_ar": "فرابيه موكا", "prices": { "M": 80, "L": 90 } },
      { "name_en": "Chocolate Frappe", "name_ar": "فرابيه شوكولاتة", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Passion Fruit Frappe", "name_ar": "فرابيه بشن فروت", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Caramel Frappe", "name_ar": "فرابيه كراميل", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Mango Frappe", "name_ar": "فرابيه مانجا", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Peach Frappe", "name_ar": "فرابيه خوخ", "prices": { "M": 70, "L": 80 } },
      { "name_en": "Cookies Frappe", "name_ar": "فرابيه كوكيز", "prices": { "M": 70, "L": 80 } }
    ]
  },
  {
    "category_en": "Smoothies",
    "category_ar": "سموزي",
    "items": [
      { "name_en": "Mango Smoothie", "name_ar": "سموزي مانجو", "prices": { "M": 65, "L": 75 } },
      { "name_en": "Strawberry Smoothie", "name_ar": "سموزي فراولة", "prices": { "M": 65, "L": 75 } },
      { "name_en": "Apple Smoothie", "name_ar": "سموزي تفاح", "prices": { "M": 65, "L": 75 } },
      { "name_en": "Kiwi Smoothie", "name_ar": "سموزي كيوي", "prices": { "M": 65, "L": 75 } },
      { "name_en": "Cola Smoothie", "name_ar": "سموزي كولا", "prices": { "M": 65, "L": 75 } },
      { "name_en": "Peach Smoothie", "name_ar": "سموزي خوخ", "prices": { "M": 65, "L": 75 } },
      { "name_en": "Passion Fruit Smoothie", "name_ar": "سموزي باشن فروت", "prices": { "M": 65, "L": 75 } },
      { "name_en": "Blueberry Smoothie", "name_ar": "سموزي توت أزرق", "prices": { "M": 65, "L": 75 } },
      { "name_en": "Mixed Berry Smoothie", "name_ar": "سموزي ميكس توت", "prices": { "M": 70, "L": 80 } }
    ]
  },
  {
    "category_en": "Cocktails & Mixed",
    "category_ar": "الكوكتيلات",
    "items": [
      { "name_en": "Florida (Mango - Strawberry - Orange)", "name_ar": "فلوريدا (مانجو- فراولة - برتقال)", "prices": { "M": 65 } },
      { "name_en": "Summer Drink (Mixed Berry - Soda)", "name_ar": "مشروب صيفي (ميكسبيري - صودا)", "prices": { "M": 70 } },
      { "name_en": "Cherry Cola (cherry - Cola)", "name_ar": "شيري كولا (كريز - كولا)", "prices": { "M": 70 } },
      { "name_en": "Piña Colada (Pineapple - Coconut - Vanilla)", "name_ar": "بيناكولادا (اناناس - جوزهند - فانيليا)", "prices": { "M": 70 } },
      { "name_en": "Sunshine (Mint - Soda - Lemon)", "name_ar": "صن شاين (نعناع - صودا - ليمون)", "prices": { "M": 70 } },
      { "name_en": "Sunset (Pomegranate - Soda -Lemon)", "name_ar": "صن سيت (رمان -صودا - ليمون)", "prices": { "M": 70 } },
      { "name_en": "Blue Sky (Blue Orange Drink - Soda)", "name_ar": "بلو سكاى (برتقال ازرق - صودا)", "prices": { "M": 70 } },
      { "name_en": "Orange Iced Black (Orange - Espresso)", "name_ar": "أورانج أيسد بلاك (برتقال - اسبريسو)", "prices": { "M": 75 } },
      { "name_en": "Lemon Ice Cream Soda (Vanilla Ice Cream - Lemon - Soda)", "name_ar": "ليمون آيس كريم صودا (ايس فانيليا - ليمون - صودا)", "prices": { "M": 75 } },
      { "name_en": "Soda Flavor (Red Berry - Lavender - Soda)", "name_ar": "نكهة الصودا (توت احمر - لافاندر - صودا)", "prices": { "M": 75 } },
      { "name_en": "Hulk (Lavender - Blue Orange Drink - Soda)", "name_ar": "هالك (لافاندر – برتقال ازرق - صودا)", "prices": { "M": 75 } },
      { "name_en": "Mango Mojito (White Mint - Soda - Lemon - Orange - Mango)", "name_ar": "موهيتو مانجو (نعناع ابيض - صودا - ليمون -برتقال - مانجو)", "prices": { "M": 80 } },
      { "name_en": "Strawberry Mojito (White Mint - Soda - Lemon - Orange - Strawberry)", "name_ar": "موهيتو فراولة (نعناع ابيض - صودا - ليمون - برتقال - فراولة)", "prices": { "M": 80 } },
      { "name_en": "Passion Fruit Mojito (White Mint - Soda - Lemon - Orange - Passion Fruit)", "name_ar": "موهيتو باشن فروت (نعناع ابيض- صودا -ليمون -برتقال- باشنفروت)", "prices": { "M": 80 } }
    ]
  },
  {
    "category_en": "Cold Drinks",
    "category_ar": "المشروبات الباردة",
    "items": [
      { "name_en": "Water", "name_ar": "مياه", "prices": { "M": 10 } },
      { "name_en": "Soft Drinks", "name_ar": "المشروبات الغازية", "prices": { "M": 30 } },
      { "name_en": "Red Bull", "name_ar": "ريدبول", "prices": { "M": 70 } },
      { "name_en": "Power Horse", "name_ar": "بورهورس", "prices": { "M": 75 } }
    ]
  },
  {
    "category_en": "Boba",
    "category_ar": "البوبا",
    "items": [
      { "name_en": "Boba mango", "name_ar": "بوبا مانجا", "prices": { "M": 75 } },
      { "name_en": "Boba Strawberry", "name_ar": "بوبا فراوله", "prices": { "M": 75 } },
      { "name_en": "Boba passion fruit", "name_ar": "بوبا بشن فروت", "prices": { "M": 75 } },
      { "name_en": "Bobablue berry", "name_ar": "بوبا توت ازرق", "prices": { "M": 75 } },
      { "name_en": "Boba orang", "name_ar": "بوبا برتقال", "prices": { "M": 75 } }
    ]
  },
  {
    "category_en": "Desserts",
    "category_ar": "الحلوى",
    "items": [
      { "name_en": "Chocolate Cake", "name_ar": "كيك الشوكولاتة", "prices": { "M": 70 } },
      { "name_en": "Brownies", "name_ar": "براونيز", "prices": { "M": 60 } },
      { "name_en": "Cheesecake", "name_ar": "تشيز كيك", "prices": { "M": 70 } },
      { "name_en": "Molten Cake", "name_ar": "مولتن كيك", "prices": { "M": 75 } },
      { "name_en": "Tiramisu", "name_ar": "ترامسيو", "prices": { "M": 75 } },
      { "name_en": "Cupcake", "name_ar": "كب كيك", "prices": { "M": 60 } },
      { "name_en": "San Sebastian", "name_ar": "سان سبيستيان", "prices": { "M": 90 } },
      { "name_en": "Red Velvet", "name_ar": "ريد فيلفت", "prices": { "M": 75 } },
      { "name_en": "Eclair", "name_ar": "اكلير", "prices": { "M": 70 } },
      { "name_en": "Waffle Nutella", "name_ar": "وافل نوتيلا", "prices": { "M": 100 } },
      { "name_en": "Waffle ice cream", "name_ar": "وافل آيس كريم", "prices": { "M": 120 } },
      { "name_en": "Waffle chocolate", "name_ar": "وافل شوكلت", "prices": { "M": 90 } },
      { "name_en": "Waffle white Chocolate", "name_ar": "وافل وايت شوكلت", "prices": { "M": 90 } },
      { "name_en": "Waffle Lotus", "name_ar": "وافل لوتس", "prices": { "M": 100 } },
      { "name_en": "Waffle Pistachio", "name_ar": "وافل فسدق", "prices": { "M": 110 } }
    ]
  },
  {
    "category_en": "Ice Cream",
    "category_ar": "الآيس كريم",
    "items": [
      { "name_en": "Ice Cream (1 Scoop)", "name_ar": "آيس كريم 1 بوله", "prices": { "S": 30 } },
      { "name_en": "Ice Cream (2 Scoops)", "name_ar": "آيس كريم 2 بوله", "prices": { "M": 50 } },
      { "name_en": "Ice Cream (3 Scoops)", "name_ar": "آيس كريم 3 بوله", "prices": { "L": 75 } }
    ]
  },
  {
    "category_en": "Additions",
    "category_ar": "الإضافات",
    "items": [
      { "name_en": "Milk", "name_ar": "حليب", "prices": { "S": 10 } },
      { "name_en": "Espresso Shot", "name_ar": "شوت إسبريسو", "prices": { "S": 30 } },
      { "name_en": "Flavors", "name_ar": "نكهات", "prices": { "S": 10 } },
      { "name_en": "Sauce", "name_ar": "صوص", "prices": { "S": 15 } },
      { "name_en": "Whipped Cream", "name_ar": "كريمة مخفوقة", "prices": { "S": 15 } },
      { "name_en": "Fruits", "name_ar": "فاكهة", "prices": { "S": 20 } }
    ]
  }
];

let currentLang = 'en';
let activeCategory = MENU_DATA[0].category_en;
let searchQuery = '';

function renderTrending() {
  const container = document.getElementById('trending-items-container');
  if (!container) return;
  
  const trendingItems = MENU_DATA[0].items.slice(0, 4);
  container.innerHTML = trendingItems.map(item => `
     <div class="min-w-[140px] bg-white/5 border border-white/5 p-4 rounded-2xl flex flex-col items-center text-center gap-3 group hover:border-accent-gold/30 transition-all">
        <div class="p-3 bg-accent-gold/10 rounded-full group-hover:scale-110 transition-transform text-accent-gold">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
        </div>
        <div class="space-y-1">
           <div class="text-[10px] font-bold uppercase tracking-widest">${currentLang === 'en' ? item.name_en : item.name_ar}</div>
           <div class="text-[10px] font-mono text-accent-gold">${item.prices.M || item.prices.S} EGP</div>
        </div>
     </div>
  `).join('');
}

function init() {
  updateStaticText();
  renderTrending();
  renderCategories();
  renderMenu();
  setupEventListeners();
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.body.classList.toggle('arabic', currentLang === 'ar');
  
  updateStaticText();
  renderCategories();
  renderMenu();
}

function updateStaticText() {
  const translations = {
    en: {
      title: 'COFFEE STRAW',
      subtitle: 'Boutique Roastery',
      searchPl: 'FIND YOUR FAVORITE...',
      langText: 'Arabic',
      trending: 'Trending Selection',
      footerPrices: 'ALL PRICES ARE IN EGYPTIAN POUNDS (EGP)',
      footerReserved: `All Rights Reserved ${new Date().getFullYear()} © COFFEE STRAW`,
      footerTerms: 'Terms & Conditions apply. Prices include tax.'
    },
    ar: {
      title: 'كوفي سترو',
      subtitle: 'محمصة بوتيك',
      searchPl: 'ابحث في القائمة...',
      langText: 'English',
      trending: 'قائمة الرائج لدينا',
      footerPrices: 'جميع الأسعار بالجنيه المصري (EGP)',
      footerReserved: `جميع الحقوق محفوظة {new Date().getFullYear()} © كوفي سترو`,
      footerTerms: 'تطبق الشروط والأحكام و الأسعار شاملة الضريبة'
    }
  };

  const t = translations[currentLang];
  document.getElementById('app-title').textContent = t.title;
  document.getElementById('app-subtitle').textContent = t.subtitle;
  document.getElementById('menu-search').placeholder = t.searchPl;
  document.getElementById('lang-text').textContent = t.langText;
  document.getElementById('trending-label').textContent = t.trending;
  document.getElementById('footer-prices').textContent = t.footerPrices;
  document.getElementById('footer-reserved').textContent = t.footerReserved;
  document.getElementById('footer-terms').textContent = t.footerTerms;
}

function renderCategories() {
  const container = document.getElementById('category-nav');
  container.innerHTML = MENU_DATA.map(cat => {
    const label = currentLang === 'en' ? cat.category_en : cat.category_ar;
    const isActive = activeCategory === cat.category_en;
    return `
      <button 
        onclick="scrollToCategory('${cat.category_en}')"
        id="nav-${cat.category_en}"
        class="whitespace-nowrap px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative category-btn ${isActive ? 'active' : ''}"
      >
        ${label}
      </button>
    `;
  }).join('');
}

function scrollToCategory(id) {
  activeCategory = id;
  renderCategories();
  const element = document.getElementById(`section-${id}`);
  if (element) {
    const headerHeight = document.getElementById('main-header').offsetHeight;
    window.scrollTo({
      top: element.offsetTop - headerHeight - 20,
      behavior: 'smooth'
    });
  }
}

function renderMenu() {
  const container = document.getElementById('menu-content');
  const filtered = MENU_DATA.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name_ar.includes(searchQuery)
    )
  })).filter(cat => cat.items.length > 0);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="py-24 text-center space-y-6">
        <div class="inline-flex p-8 bg-white/5 rounded-full border border-white/5 animate-pulse text-accent-gold/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <p class="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
          ${currentLang === 'en' ? "NO ITEMS DISCOVERED" : "لم يتم العثور على نتائج"}
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(cat => `
    <section id="section-${cat.category_en}" class="space-y-10">
      <div class="flex items-end justify-between border-b border-white/5 pb-6">
        <div class="space-y-2">
          <h3 class="text-3xl font-serif italic text-white">
            ${currentLang === 'en' ? cat.category_en : cat.category_ar}
          </h3>
          <p class="text-[9px] font-bold tracking-[0.4em] text-accent-gold uppercase opacity-60">
            ${currentLang === 'en' ? cat.category_ar : cat.category_en}
          </p>
        </div>
        <div class="flex gap-8 text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] pb-1">
          <span>S</span><span>M</span><span>L</span>
        </div>
      </div>
      <div class="grid gap-10">
        ${cat.items.map(item => renderMenuItem(item)).join('')}
      </div>
    </section>
  `).join('');
}

function renderMenuItem(item) {
  const name = currentLang === 'en' ? item.name_en : item.name_ar;
  const secondary = currentLang === 'en' ? item.name_ar : item.name_en;
  
  return `
    <div class="group flex justify-between items-center relative py-1">
      <div class="flex flex-col gap-1.5 relative z-10">
        <h4 class="text-[15px] font-medium text-white/90 group-hover:text-accent-gold transition-all duration-300 tracking-tight">
          ${name}
        </h4>
        <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 transition-opacity duration-500 group-hover:opacity-60">
          ${secondary}
        </span>
      </div>
      <div class="flex gap-8 text-[11px] font-mono items-center relative z-10 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}">
        ${renderPrice(item.prices.S)}
        ${renderPrice(item.prices.M, true)}
        ${renderPrice(item.prices.L)}
      </div>
      <div class="absolute bottom-[-1rem] left-0 right-0 h-[1px] bg-white/5 group-hover:bg-accent-gold/20 transition-colors"></div>
    </div>
  `;
}

function renderPrice(val, featured) {
  if (!val) return `<span class="w-8 text-center text-white/5 italic">—</span>`;
  return `<span class="w-8 text-center transition-all duration-300 ${featured ? 'text-accent-gold font-bold scale-110' : 'text-white/60'} group-hover:text-accent-gold">${val}</span>`;
}

function setupEventListeners() {
  document.getElementById('lang-toggle').addEventListener('click', toggleLang);
  document.getElementById('menu-search').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderMenu();
  });

  window.addEventListener('scroll', () => {
    let current = activeCategory;
    MENU_DATA.forEach(cat => {
      const el = document.getElementById(`section-${cat.category_en}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) current = cat.category_en;
      }
    });

    if (current !== activeCategory) {
      activeCategory = current;
      renderCategories();
      // Sync nav scroll
      const btn = document.getElementById(`nav-${current}`);
      const nav = document.getElementById('category-nav');
      if (btn && nav) {
        nav.scrollTo({
          left: btn.offsetLeft - (nav.offsetWidth / 2) + (btn.offsetWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
