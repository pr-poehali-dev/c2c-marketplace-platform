import { useState } from "react";
import Icon from "@/components/ui/icon";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  { icon: "Smartphone", label: "Электроника", color: "#005bff" },
  { icon: "Shirt", label: "Одежда", color: "#7b2fff" },
  { icon: "Home", label: "Дом и сад", color: "#00ba88" },
  { icon: "Dumbbell", label: "Спорт", color: "#ff6a00" },
  { icon: "Baby", label: "Детям", color: "#f91155" },
  { icon: "Sparkles", label: "Красота", color: "#e040fb" },
  { icon: "UtensilsCrossed", label: "Продукты", color: "#ff9800" },
  { icon: "Car", label: "Авто", color: "#00acc1" },
  { icon: "BookOpen", label: "Книги", color: "#43a047" },
  { icon: "Gamepad2", label: "Игры", color: "#5c6bc0" },
  { icon: "PawPrint", label: "Животным", color: "#f06292" },
  { icon: "Wrench", label: "Инструменты", color: "#78909c" },
];

const banners = [
  {
    id: 1,
    title: "Суперраспродажа",
    subtitle: "Скидки до 70% на электронику",
    badge: "Только сегодня",
    gradient: "banner-gradient",
    icon: "Zap",
  },
  {
    id: 2,
    title: "Новая коллекция",
    subtitle: "Весна–Лето 2025 уже здесь",
    badge: "New",
    gradient: "banner-gradient-2",
    icon: "Sparkles",
  },
  {
    id: 3,
    title: "Кэшбэк 15%",
    subtitle: "С картой Ozon до 31 апреля",
    badge: "Выгодно",
    gradient: "banner-gradient-3",
    icon: "CreditCard",
  },
];

const products = [
  {
    id: 1,
    name: "Смартфон Samsung Galaxy S24 Ultra 256GB",
    price: 89990,
    oldPrice: 119990,
    rating: 4.8,
    reviews: 2847,
    badge: "Хит продаж",
    badgeColor: "#005bff",
    delivery: "Завтра",
    seller: "Samsung Official",
    image: "📱",
  },
  {
    id: 2,
    name: "Ноутбук Apple MacBook Air M3 13\" 8GB/256GB",
    price: 109990,
    oldPrice: 129990,
    rating: 4.9,
    reviews: 1563,
    badge: "Premium",
    badgeColor: "#7b2fff",
    delivery: "Послезавтра",
    seller: "Apple Store",
    image: "💻",
  },
  {
    id: 3,
    name: "Наушники Sony WH-1000XM5 Wireless",
    price: 24990,
    oldPrice: 34990,
    rating: 4.7,
    reviews: 4201,
    badge: "-28%",
    badgeColor: "#f91155",
    delivery: "Завтра",
    seller: "Sony Electronics",
    image: "🎧",
  },
  {
    id: 4,
    name: "Умные часы Apple Watch Series 9 45mm GPS",
    price: 42990,
    oldPrice: 54990,
    rating: 4.8,
    reviews: 987,
    badge: "Новинка",
    badgeColor: "#00ba88",
    delivery: "Сегодня",
    seller: "Apple Store",
    image: "⌚",
  },
  {
    id: 5,
    name: "Планшет iPad Air 11\" M2 256GB Wi-Fi",
    price: 69990,
    oldPrice: 79990,
    rating: 4.9,
    reviews: 752,
    badge: "-12%",
    badgeColor: "#f91155",
    delivery: "Завтра",
    seller: "iStore",
    image: "📓",
  },
  {
    id: 6,
    name: "Беспроводная зарядка Belkin 15W MagSafe",
    price: 4990,
    oldPrice: 6990,
    rating: 4.6,
    reviews: 3104,
    badge: "Выбор покупателей",
    badgeColor: "#ff6a00",
    delivery: "Сегодня",
    seller: "Belkin Official",
    image: "🔋",
  },
  {
    id: 7,
    name: "Робот-пылесос Xiaomi Mi Robot Vacuum X10+",
    price: 34990,
    oldPrice: 49990,
    rating: 4.7,
    reviews: 1820,
    badge: "-30%",
    badgeColor: "#f91155",
    delivery: "Завтра",
    seller: "Xiaomi Store",
    image: "🤖",
  },
  {
    id: 8,
    name: "Кофемашина DeLonghi Magnifica Start",
    price: 29990,
    oldPrice: 39990,
    rating: 4.8,
    reviews: 631,
    badge: "Топ",
    badgeColor: "#005bff",
    delivery: "2–3 дня",
    seller: "DeLonghi RU",
    image: "☕",
  },
];

const flashDeals = [
  { name: "Кроссовки Nike Air Max 270", price: 6990, oldPrice: 12990, discount: 46, image: "👟", timer: "02:14:33" },
  { name: "Рюкзак Samsonite 40L", price: 5490, oldPrice: 8990, discount: 39, image: "🎒", timer: "02:14:33" },
  { name: "Фен Dyson Supersonic", price: 19990, oldPrice: 31990, discount: 37, image: "💇", timer: "02:14:33" },
  { name: "Кофемолка Bosch", price: 2490, oldPrice: 3990, discount: 37, image: "🫘", timer: "02:14:33" },
  { name: "Игра PS5 Spider-Man 2", price: 3990, oldPrice: 5990, discount: 33, image: "🕷️", timer: "02:14:33" },
];

const features = [
  { icon: "Truck", title: "Быстрая доставка", desc: "В день заказа или на следующий день" },
  { icon: "RotateCcw", title: "Возврат 30 дней", desc: "Без вопросов и объяснений" },
  { icon: "Shield", title: "Защита покупателя", desc: "Гарантируем подлинность товаров" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Всегда на связи, всегда поможем" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function formatPrice(price: number) {
  return price.toLocaleString("ru-RU") + " ₽";
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-3 h-3" fill={star <= Math.floor(rating) ? "#ffa500" : star - 0.5 <= rating ? "#ffa500" : "#e0e0e0"} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: typeof products[0] }) {
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const discount = Math.round((1 - product.price / product.oldPrice) * 100);

  return (
    <div className="product-card bg-white rounded-xl overflow-hidden flex flex-col cursor-pointer relative group">
      {/* Wishlist button */}
      <button
        className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
        onClick={(e) => { e.stopPropagation(); setInWishlist(!inWishlist); }}
      >
        <Icon name="Heart" size={16} className={inWishlist ? "text-red-500 fill-red-500" : "text-gray-400"} />
      </button>

      {/* Badge */}
      <div className="absolute top-2 left-2 z-10">
        <span
          className="text-white text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ background: product.badgeColor, fontSize: "11px" }}
        >
          {product.badge}
        </span>
      </div>

      {/* Image area */}
      <div className="h-44 flex items-center justify-center text-6xl bg-gray-50 relative">
        <span>{product.image}</span>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1 gap-1.5">
        <p className="text-xs text-gray-400 font-medium">{product.seller}</p>
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-400">{product.reviews.toLocaleString("ru-RU")}</span>
        </div>

        {/* Prices */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          <span className="text-xs text-red-500 font-semibold">−{discount}%</span>
        </div>
        <div className="text-xs text-gray-400 line-through">{formatPrice(product.oldPrice)}</div>

        {/* Delivery */}
        <div className="flex items-center gap-1 text-xs">
          <Icon name="Truck" size={12} className="text-green-500" />
          <span className="text-green-600 font-medium">{product.delivery}</span>
        </div>

        {/* Add to cart button */}
        <button
          className={`add-to-cart-btn w-full mt-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            inCart
              ? "bg-green-500 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          onClick={(e) => { e.stopPropagation(); setInCart(!inCart); }}
        >
          {inCart ? (
            <span className="flex items-center justify-center gap-1.5">
              <Icon name="Check" size={14} />
              В корзине
            </span>
          ) : (
            <span className="flex items-center justify-center gap-1.5">
              <Icon name="ShoppingCart" size={14} />
              В корзину
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function FlashDealCard({ deal }: { deal: typeof flashDeals[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden flex-shrink-0 w-44 cursor-pointer hover:shadow-lg transition-all duration-200">
      <div className="h-32 flex items-center justify-center text-5xl bg-gradient-to-br from-red-50 to-orange-50 relative">
        <span>{deal.image}</span>
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          −{deal.discount}%
        </span>
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-600 line-clamp-2 mb-1.5">{deal.name}</p>
        <p className="text-base font-bold text-gray-900">{formatPrice(deal.price)}</p>
        <p className="text-xs text-gray-400 line-through">{formatPrice(deal.oldPrice)}</p>
        <div className="flex items-center gap-1 mt-2">
          <Icon name="Clock" size={12} className="text-red-500" />
          <span className="text-xs text-red-500 font-semibold font-mono">{deal.timer}</span>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBanner, setActiveBanner] = useState(0);
  const [cartCount, setCartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen font-inter" style={{ background: "#f4f4f8" }}>

      {/* ── TOP BAR (Mobile only) ── */}
      <div className="md:hidden bg-white px-4 py-2 flex items-center gap-3 shadow-sm sticky top-0 z-50">
        <a href="/" className="flex-shrink-0">
          <span className="text-2xl font-black" style={{ color: "#005bff" }}>ozon</span>
        </a>
        <form onSubmit={handleSearch} className="flex-1 flex items-center bg-gray-100 rounded-xl px-3 py-2 gap-2">
          <Icon name="Search" size={16} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Поиск по Ozon"
            className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <button className="relative flex-shrink-0">
          <Icon name="ShoppingCart" size={22} className="text-gray-600" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* ── HEADER (Desktop) ── */}
      <header className="hidden md:block sticky top-0 z-50 shadow-sm" style={{ background: "#005bff" }}>
        {/* Top row */}
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 mr-2">
            <span className="text-3xl font-black text-white tracking-tight">ozon</span>
          </a>

          {/* City picker */}
          <button className="flex items-center gap-1 text-white/80 hover:text-white text-sm whitespace-nowrap transition-colors">
            <Icon name="MapPin" size={14} />
            <span>Москва</span>
          </button>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 flex items-center bg-white rounded-xl overflow-hidden">
            <input
              type="text"
              placeholder="Искать на Ozon"
              className="flex-1 px-4 py-2.5 text-sm outline-none text-gray-700 placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="px-5 py-2.5 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Icon name="Search" size={18} />
            </button>
          </form>

          {/* Right icons */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <button className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl hover:bg-blue-600/40 transition-colors text-white">
              <Icon name="User" size={20} />
              <span className="text-xs">Войти</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl hover:bg-blue-600/40 transition-colors text-white">
              <Icon name="Heart" size={20} />
              <span className="text-xs">Избранное</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl hover:bg-blue-600/40 transition-colors text-white relative">
              <div className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center w-5 h-5">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs">Корзина</span>
            </button>
          </div>
        </div>

        {/* Bottom nav row */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-0 overflow-x-auto scroll-x">
            <button
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors rounded-xl whitespace-nowrap"
            >
              <Icon name="Menu" size={16} />
              Каталог
            </button>
            {["Акции", "Ozon Premium", "Ozon Fresh", "Бренды", "Электроника", "Одежда", "Дом", "Детям", "Красота"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-xl whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-7xl mx-auto px-3 md:px-6 py-4 md:py-6 space-y-6">

        {/* ── HERO BANNERS ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Main banner */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl h-52 md:h-64 cursor-pointer group">
            <div className={`absolute inset-0 ${banners[activeBanner].gradient}`} />
            <div className="relative z-10 h-full flex flex-col justify-center px-8 py-6">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                {banners[activeBanner].badge}
              </span>
              <h2 className="text-white text-3xl md:text-4xl font-black leading-tight mb-2">
                {banners[activeBanner].title}
              </h2>
              <p className="text-white/85 text-base mb-4">{banners[activeBanner].subtitle}</p>
              <button className="bg-white text-blue-600 font-semibold text-sm px-5 py-2.5 rounded-xl w-fit hover:bg-blue-50 transition-colors">
                Смотреть все
              </button>
            </div>
            {/* Decorative element */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
              <Icon name={banners[activeBanner].icon} size={120} className="text-white" />
            </div>
            {/* Dots */}
            <div className="absolute bottom-4 left-8 flex gap-1.5">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBanner(i)}
                  className={`rounded-full transition-all ${activeBanner === i ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/40"}`}
                />
              ))}
            </div>
          </div>

          {/* Side banners */}
          <div className="flex flex-row md:flex-col gap-3">
            <div className="flex-1 rounded-2xl overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow" style={{ background: "linear-gradient(135deg, #e8f4f8, #c8e6f7)" }}>
              <div className="p-4 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Акция</span>
                  <h3 className="text-gray-800 font-bold mt-2 text-base leading-tight">Ozon Premium</h3>
                  <p className="text-gray-500 text-xs mt-1">Бесплатная доставка на всё</p>
                </div>
                <div className="text-5xl">💎</div>
              </div>
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow" style={{ background: "linear-gradient(135deg, #fef3e2, #ffe0b2)" }}>
              <div className="p-4 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">Fresh</span>
                  <h3 className="text-gray-800 font-bold mt-2 text-base leading-tight">Ozon Fresh</h3>
                  <p className="text-gray-500 text-xs mt-1">Доставка за 30 минут</p>
                </div>
                <div className="text-5xl">🛒</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="bg-white rounded-2xl p-4 md:p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Категории</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                  style={{ background: cat.color + "18" }}
                >
                  <Icon name={cat.icon} size={22} style={{ color: cat.color }} />
                </div>
                <span className="text-xs text-gray-600 text-center leading-tight font-medium">{cat.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* ── FLASH DEALS ── */}
        <section className="bg-white rounded-2xl p-4 md:p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-gray-900">Акции дня</h2>
              <div className="flex items-center gap-1.5 bg-red-50 px-3 py-1 rounded-full">
                <Icon name="Clock" size={14} className="text-red-500" />
                <span className="text-sm font-bold text-red-500 font-mono">02:14:33</span>
              </div>
            </div>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Все акции <Icon name="ChevronRight" size={14} />
            </a>
          </div>
          <div className="flex gap-3 overflow-x-auto scroll-x pb-2">
            {flashDeals.map((deal, i) => (
              <FlashDealCard key={i} deal={deal} />
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name={f.icon} size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{f.title}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── PRODUCTS GRID ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Популярное сегодня</h2>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Смотреть все <Icon name="ChevronRight" size={14} />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ── PROMO BANNER ── */}
        <section className="relative overflow-hidden rounded-2xl" style={{ background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" }}>
          <div className="px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Ozon Premium
              </div>
              <h2 className="text-white text-2xl md:text-3xl font-black mb-2">
                Бесплатная доставка<br />на все товары
              </h2>
              <p className="text-white/70 text-sm mb-5">
                Подпишитесь на Premium и получите кэшбэк 5% на каждую покупку, приоритетную поддержку и эксклюзивные скидки.
              </p>
              <button className="bg-white text-blue-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Попробовать бесплатно — 3 месяца
              </button>
            </div>
            <div className="text-9xl opacity-20 hidden md:block">💎</div>
          </div>
        </section>

        {/* ── MORE PRODUCTS ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Скоро закончатся</h2>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Все товары <Icon name="ChevronRight" size={14} />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[...products].reverse().map((product) => (
              <ProductCard key={product.id + "-rev"} product={product} />
            ))}
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="mt-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-2xl font-black text-blue-600">ozon</span>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                Ваш надёжный маркетплейс с миллионами товаров
              </p>
              <div className="flex gap-3 mt-4">
                {["vk", "telegram", "youtube"].map((s) => (
                  <a key={s} href="#" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors text-gray-500 text-xs font-bold uppercase">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Покупателям", links: ["Как сделать заказ", "Доставка", "Возврат", "Оплата", "Промокоды"] },
              { title: "Продавцам", links: ["Стать продавцом", "Кабинет продавца", "Реклама", "Аналитика", "Поддержка"] },
              { title: "Компания", links: ["О нас", "Карьера", "Пресс-центр", "Инвесторам", "Контакты"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold text-gray-800 mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-400 hover:text-blue-600 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">© 2025 Ozon. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Пользовательское соглашение</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: "Home", label: "Главная", active: true },
            { icon: "Grid3x3", label: "Каталог", active: false },
            { icon: "ShoppingCart", label: "Корзина", active: false, badge: cartCount },
            { icon: "Heart", label: "Избранное", active: false },
            { icon: "User", label: "Профиль", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 relative ${item.active ? "text-blue-600" : "text-gray-400"}`}
            >
              <div className="relative">
                <Icon name={item.icon} size={22} />
                {item.badge ? (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-xs">{item.label}</span>
              {item.active && <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-blue-600 rounded-full" />}
            </button>
          ))}
        </div>
      </nav>
      <div className="md:hidden h-16" />
    </div>
  );
};

export default Index;