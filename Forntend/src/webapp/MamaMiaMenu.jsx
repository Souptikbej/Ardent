import React, { useEffect, useRef, useState } from "react";

// MamaMiaMenu.jsx
// Default export: a self-contained React component (TailwindCSS required in the project)

export default function MamaMiaMenu() {
  // --- Mock menu data (kept same structure as original) ---
  const initialMenu = [
    {
      category: "Appetizers",
      id: "appetizers",
      items: [
        {
          id: 1,
          name: "Garlic Knots",
          desc: "Warm, buttery knots served with a side of house-made marinara sauce.",
          price: 6.99,
          isVegan: true,
          isGlutenFree: false,
          img: "https://placehold.co/800x600/fcd34d/000000?text=Garlic+Knots",
        },
        {
          id: 2,
          name: "Caprese Skewers",
          desc: "Fresh mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze.",
          price: 8.5,
          isVegan: false,
          isGlutenFree: true,
          img: "https://placehold.co/800x600/6b7280/ffffff?text=Caprese+Skewers",
        },
      ],
    },
    {
      category: "Main Courses",
      id: "maincourses",
      items: [
        {
          id: 3,
          name: "Spaghetti Bolognese",
          desc: "Classic beef and pork ragu slow-cooked with tomatoes and herbs.",
          price: 17.99,
          isVegan: false,
          isGlutenFree: false,
          img: "https://placehold.co/800x600/ef4444/ffffff?text=Spaghetti",
        },
        {
          id: 4,
          name: "Chicken Alfredo",
          desc: "Fettuccine pasta tossed in a creamy parmesan sauce with grilled chicken.",
          price: 18.5,
          isVegan: false,
          isGlutenFree: false,
          img: "https://placehold.co/800x600/9ca3af/ffffff?text=Alfredo",
        },
        {
          id: 5,
          name: "Mushroom Risotto",
          desc: "Arborio rice slowly simmered with wild mushrooms and truffle oil.",
          price: 16.99,
          isVegan: true,
          isGlutenFree: true,
          img: "https://placehold.co/800x600/34d399/ffffff?text=Risotto",
        },
      ],
    },
    {
      category: "Desserts",
      id: "desserts",
      items: [
        {
          id: 6,
          name: "Tiramisu",
          desc: "Layers of coffee-soaked ladyfingers and mascarpone cream.",
          price: 7.5,
          isVegan: false,
          isGlutenFree: false,
          img: "https://placehold.co/800x600/f87171/ffffff?text=Tiramisu",
        },
      ],
    },
  ];

  // --- Component state ---
  const [menuData] = useState(initialMenu);
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("mm_cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [modalSize, setModalSize] = useState("regular");
  const [modalAddons, setModalAddons] = useState({
    cheese: false,
    ranch: false,
  });
  const [modalNotes, setModalNotes] = useState("");

  // mobile cart overlay
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  const deliveryFee = 0.0;

  // refs for scrollspy
  const sectionRefs = useRef({});

  useEffect(() => {
    localStorage.setItem("mm_cart_v1", JSON.stringify(cart));
  }, [cart]);

  // Scroll spy to highlight active category in tabs
  useEffect(() => {
    const observers = [];
    Object.keys(sectionRefs.current).forEach((key) => {
      const el = sectionRefs.current[key];
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCategory(key);
            }
          });
        },
        { root: null, threshold: 0.45 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [menuData]);

  // --- Utility functions ---
  function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }

  function calculateSubtotal() {
    return cart.reduce((sum, it) => sum + it.price * it.quantity, 0);
  }

  // --- Cart operations ---
  function handleAddToCartFromModal() {
    if (!modalItem) return;
    let basePrice = modalItem.price + (modalSize === "large" ? 3 : 0);
    if (modalAddons.cheese) basePrice += 1.5;
    if (modalAddons.ranch) basePrice += 0.75;

    const customization = [];
    customization.push(modalSize === "large" ? "Large" : "Regular");
    if (modalAddons.cheese) customization.push("Extra Cheese");
    if (modalAddons.ranch) customization.push("Side of Ranch");
    if (modalNotes.trim()) customization.push(`Notes: ${modalNotes.trim()}`);

    // simple dedupe based on name + customization text
    const customizationText = customization.join(", ");

    setCart((prev) => {
      // if an identical customization exists, increase quantity
      const index = prev.findIndex(
        (p) =>
          p.name === modalItem.name &&
          p.customization === customizationText &&
          Math.abs(p.price - basePrice) < 0.001
      );
      if (index > -1) {
        const copy = [...prev];
        copy[index].quantity += modalQuantity;
        return copy;
      }
      return [
        ...prev,
        {
          id: Date.now() + Math.random(),
          name: modalItem.name,
          price: Number(basePrice.toFixed(2)),
          quantity: modalQuantity,
          customization: customizationText,
        },
      ];
    });

    closeModal();
  }

  function updateCartItemQuantity(cartId, delta) {
    setCart((prev) =>
      prev.map((it) =>
        it.id === cartId
          ? { ...it, quantity: Math.max(1, it.quantity + delta) }
          : it
      )
    );
  }

  function removeCartItem(cartId) {
    setCart((prev) => prev.filter((it) => it.id !== cartId));
  }

  function clearCart() {
    setCart([]);
  }

  // --- Modal open/close ---
  function openModal(itemId) {
    // find the item
    for (const cat of menuData) {
      const it = cat.items.find((i) => i.id === itemId);
      if (it) {
        setModalItem(it);
        setModalQuantity(1);
        setModalSize("regular");
        setModalAddons({ cheese: false, ranch: false });
        setModalNotes("");
        setIsModalOpen(true);
        // prevent body scroll
        document.body.style.overflow = "hidden";
        return;
      }
    }
  }

  function closeModal() {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalItem(null);
      document.body.style.overflow = "";
    }, 250);
  }

  function changeModalQuantity(delta) {
    setModalQuantity((q) => Math.max(1, q + delta));
  }

  // Small helpers for responsive behavior
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setIsMobileCartOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // --- Render helpers (JSX fragments) ---
  function DietaryTags({ item }) {
    return (
      <div className="flex flex-wrap gap-2">
        {item.isVegan && (
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
            🌱 Vegan
          </span>
        )}
        {item.isGlutenFree && (
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
            🌾 Gluten-Free
          </span>
        )}
      </div>
    );
  }

  // --- Small Checkout demo action ---
  function handleCheckout() {
    if (cart.length === 0) return;
    alert(
      `Proceeding to checkout. Total: ${formatPrice(
        calculateSubtotal() + deliveryFee
      )}\n(Checkout flow not implemented in this demo)`
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => alert("Go back to listings...")}
              className="text-gray-500 hover:text-green-600"
            >
              {/* back icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Mama Mia's Pasta House
            </h1>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1 text-gray-700 bg-yellow-100 p-2 rounded-full font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>4.7 (1.2K Reviews)</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-1 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 .153.435l3.5 4a.75.75 0 0 0 1.217-.92l-3.25-3.876V5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-bold">25 min</span>
            </div>
            <div className="font-bold text-green-600">FREE Delivery</div>
          </div>
        </div>
      </header>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto p-4 lg:flex lg:space-x-8 mt-6">
        {/* Category tabs (desktop) */}
        <aside className="hidden lg:block lg:w-1/4">
          <nav className="space-y-2 p-4 bg-white rounded-xl shadow sticky top-28">
            {menuData.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(cat.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`block p-3 rounded-lg font-medium ${
                  activeCategory === cat.id
                    ? "bg-green-50 text-green-600"
                    : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                {cat.category}
              </a>
            ))}
          </nav>
        </aside>

        <main className="w-full lg:w-3/4 space-y-8">
          {menuData.map((cat) => (
            <section
              id={cat.id}
              key={cat.id}
              ref={(el) => (sectionRefs.current[cat.id] = el)}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                  >
                    <div className="w-full md:w-1/3 h-44 md:h-48 flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        onError={(e) =>
                          (e.currentTarget.src =
                            "https://placehold.co/800x600/4f46e5/ffffff?text=Food+Item")
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 w-full md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                          {item.desc}
                        </p>
                        <div className="mb-2">
                          <DietaryTags item={item} />
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xl font-extrabold text-green-600">
                          {formatPrice(item.price)}
                        </span>
                        <button
                          onClick={() => openModal(item.id)}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-150 shadow-md text-sm md:text-base"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Cart Sidebar */}
        <aside id="cart-sidebar" className="lg:w-1/4 mt-8 lg:mt-0">
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-28">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">
              Your Order
            </h2>

            <div className="space-y-4 mb-6 min-h-24">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Your cart is empty. Add some delicious food!
                </p>
              ) : (
                <div className="space-y-3">
                  {cart.map((it) => (
                    <div
                      key={it.id}
                      className="flex justify-between items-start gap-4"
                    >
                      <div className="w-3/4">
                        <p className="text-sm font-semibold text-gray-800 truncate">
                          {it.quantity}x {it.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {it.customization}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateCartItemQuantity(it.id, -1)}
                            className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                          >
                            -
                          </button>
                          <span className="font-medium">{it.quantity}</span>
                          <button
                            onClick={() => updateCartItemQuantity(it.id, 1)}
                            className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeCartItem(it.id)}
                            className="ml-2 text-xs text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {formatPrice(it.price * it.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between font-medium text-gray-700">
                <span>Subtotal:</span>
                <span>{formatPrice(calculateSubtotal())}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Delivery Fee:</span>
                <span>{formatPrice(deliveryFee)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-3 text-green-600">
                <span>Total:</span>
                <span>{formatPrice(calculateSubtotal() + deliveryFee)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="w-full bg-green-600 text-white p-3 rounded-xl font-semibold hover:bg-green-700 transition duration-150 mt-6 shadow-md disabled:opacity-50"
            >
              Proceed to Checkout
            </button>

            {cart.length > 0 && (
              <div className="mt-3 flex justify-between text-xs text-gray-500">
                <button onClick={() => clearCart()}>Clear Cart</button>
                <button
                  onClick={() =>
                    alert("Open order summary or notes (not implemented)")
                  }
                >
                  Add Order Note
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Mobile floating cart button */}
        <div
          id="mobile-cart-toggle"
          className="fixed bottom-4 right-4 z-30 lg:hidden"
        >
          <button
            onClick={() => setIsMobileCartOpen(true)}
            className="bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.809 3.424v2.25a.75.75 0 0 0 1.5 0v-2.25A2.25 2.25 0 0 1 9 17.25h1.25a2.25 2.25 0 0 1 2.25 2.25v2.25a.75.75 0 0 0 1.5 0v-2.25a2.25 2.25 0 0 1 2.25-2.25h.25v-.278c-.035-.126-.062-.254-.087-.382l-2.094-7.854A.75.75 0 0 0 16.5 6.75h-10.74l-.93-3.483A1.5 1.5 0 0 0 3.75 2.25H2.25Z" />
            </svg>
            <span className="font-bold">
              {cart.reduce((c, it) => c + it.quantity, 0)}
            </span>
          </button>
        </div>

        {/* Mobile Cart Overlay */}
        {isMobileCartOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black opacity-40"
              onClick={() => setIsMobileCartOpen(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-4 max-h-[70vh] overflow-y-auto">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Your Order</h3>
                <button
                  onClick={() => setIsMobileCartOpen(false)}
                  className="text-gray-600"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {cart.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  cart.map((it) => (
                    <div
                      key={it.id}
                      className="flex justify-between items-center"
                    >
                      <div className="w-3/4">
                        <p className="text-sm font-semibold">
                          {it.quantity}x {it.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {it.customization}
                        </p>
                      </div>
                      <div className="text-sm font-medium">
                        {formatPrice(it.price * it.quantity)}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-medium text-gray-700">
                  <span>Subtotal:</span>
                  <span>{formatPrice(calculateSubtotal())}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Delivery Fee:</span>
                  <span>{formatPrice(deliveryFee)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-3 text-green-600">
                  <span>Total:</span>
                  <span>{formatPrice(calculateSubtotal() + deliveryFee)}</span>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => {
                    handleCheckout();
                    setIsMobileCartOpen(false);
                  }}
                  disabled={cart.length === 0}
                  className="w-full bg-green-600 text-white p-3 rounded-xl font-semibold hover:bg-green-700 transition duration-150 shadow-md disabled:opacity-50"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Item Modal (centered) */}
      {isModalOpen && modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-60"
            onClick={closeModal}
          ></div>

          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden mx-4">
            <div className="relative h-56 md:h-72">
              <img
                src={modalItem.img}
                alt={modalItem.name}
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://placehold.co/800x600/4f46e5/ffffff?text=Food+Item")
                }
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {modalItem.name}
              </h3>
              <p className="text-gray-600 mb-4">{modalItem.desc}</p>
              <div className="text-lg font-semibold text-green-600 mb-4">
                Price: <span>{formatPrice(modalItem.price)}</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Choose Size (Required)
                  </h4>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="size-modal"
                        checked={modalSize === "regular"}
                        onChange={() => setModalSize("regular")}
                        className="form-radio"
                      />
                      <span className="ml-2">Regular</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="size-modal"
                        checked={modalSize === "large"}
                        onChange={() => setModalSize("large")}
                        className="form-radio"
                      />
                      <span className="ml-2">Large (+$3.00)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Add-ons (Optional)
                  </h4>
                  <div className="space-y-1">
                    <label className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-gray-700">Extra Cheese</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500 font-medium">
                          +$1.50
                        </span>
                        <input
                          type="checkbox"
                          checked={modalAddons.cheese}
                          onChange={(e) =>
                            setModalAddons((a) => ({
                              ...a,
                              cheese: e.target.checked,
                            }))
                          }
                          className="form-checkbox"
                        />
                      </div>
                    </label>
                    <label className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <span className="text-gray-700">Side of Ranch</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500 font-medium">
                          +$0.75
                        </span>
                        <input
                          type="checkbox"
                          checked={modalAddons.ranch}
                          onChange={(e) =>
                            setModalAddons((a) => ({
                              ...a,
                              ranch: e.target.checked,
                            }))
                          }
                          className="form-checkbox"
                        />
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Special Instructions
                  </h4>
                  <textarea
                    value={modalNotes}
                    onChange={(e) => setModalNotes(e.target.value)}
                    placeholder="e.g., No onions, extra crispy..."
                    className="w-full p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 flex justify-between items-center border-t">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => changeModalQuantity(-1)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  disabled={modalQuantity <= 1}
                >
                  -
                </button>
                <span id="item-quantity" className="font-bold text-xl">
                  {modalQuantity}
                </span>
                <button
                  onClick={() => changeModalQuantity(1)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-700">
                  {modalQuantity} ×{" "}
                  {formatPrice(
                    (
                      modalItem.price +
                      (modalSize === "large" ? 3 : 0) +
                      (modalAddons.cheese ? 1.5 : 0) +
                      (modalAddons.ranch ? 0.75 : 0)
                    ).toFixed(2)
                  )}
                </div>
                <button
                  onClick={handleAddToCartFromModal}
                  className="bg-green-600 text-white p-3 rounded-xl font-bold hover:bg-green-700 transition duration-150 shadow-lg flex items-center space-x-2"
                >
                  <span>
                    Add <span className="font-bold">{modalQuantity}</span> to
                    Cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
