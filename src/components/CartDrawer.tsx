
import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

// Cart state lifted up in a real app. We'll make a local working demo.
const getInitialCart = () => {
  let cart = localStorage.getItem("st-demo-cart");
  if (cart) return JSON.parse(cart);
  return [];
};

const CartDrawer = ({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [cart, setCart] = useState<Product[]>(getInitialCart());

  // Listen for add events dispatched by product add buttons
  React.useEffect(() => {
    function onAdd(e: Event) {
      // @ts-ignore
      const detail = e.detail;
      setCart((prev) => {
        const newCart = [...prev, detail];
        localStorage.setItem("st-demo-cart", JSON.stringify(newCart));
        return newCart;
      });
    }
    window.addEventListener("addToCartDemo", onAdd as EventListener);
    return () => window.removeEventListener("addToCartDemo", onAdd as EventListener);
  }, []);

  const checkout = () => {
    window.alert("This is a demo—the checkout flow is not implemented.");
  };

  return (
    <div
      className={`fixed inset-0 z-[100] transition pointer-events-none ${open ? "visible" : "invisible"}`}
      aria-modal="true"
      tabIndex={-1}
      role="dialog"
    >
      <div
        className={`absolute transition-opacity duration-300 inset-0 bg-black/40 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-2xl transition-transform duration-300 ease-in-out pointer-events-auto
        flex flex-col z-50 ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between py-4 px-6 border-b border-neutral-200">
          <span className="font-grotesk text-xl">Your Bag</span>
          <button onClick={onClose} aria-label="Close cart" className="p-2 hover:bg-neutral-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col gap-6 items-center py-12 text-neutral-500">
              <span>Your bag is empty.</span>
              <span className="opacity-30">¯\_(ツ)_/¯</span>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((prod, idx) => (
                <li key={prod.id + idx} className="flex items-center gap-4 border-b pb-4 last:border-b-0 animate-fade-in">
                  <img src={prod.image} alt={prod.name} className="w-14 h-14 object-cover border" />
                  <div>
                    <div className="font-grotesk text-sm font-semibold">{prod.name}</div>
                    <div className="font-inter text-sm text-neutral-600">{prod.price}</div>
                  </div>
                  <button
                    className="ml-auto px-2 text-xs text-black hover:underline"
                    onClick={() => {
                      const newCart = cart.filter((_, i) => i !== idx);
                      setCart(newCart);
                      localStorage.setItem("st-demo-cart", JSON.stringify(newCart));
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-6 border-t bg-neutral-50">
          <button
            className="w-full py-3 text-white bg-black font-grotesk font-semibold text-base flex items-center justify-center gap-2 hover:bg-neutral-800 transition"
            onClick={checkout}
            disabled={!cart.length}
          >
            Checkout <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
