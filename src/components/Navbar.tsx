import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = JSON.parse(localStorage.getItem("st-demo-cart") || "[]");

  return (
    <>
      <nav className="w-full z-50 py-3 px-4 md:px-8 flex justify-between items-center bg-white fixed top-0 left-0">
        <Link to="/" className="mr-10">
          <span className="font-grotesk text-3xl tracking-tight font-bold">
            Sri-Shirts
          </span>
        </Link>
        
        <div className="flex-1 flex justify-center items-center">
          <div className="flex items-center gap-8">
            {navLinks.map((lnk) => (
              <Link key={lnk.path}
                to={lnk.path}
                className={`font-inter text-sm transition-colors py-1 ${
                  location.pathname === lnk.path
                    ? "text-black font-semibold border-b-2 border-black"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                {lnk.label}
              </Link>
            ))}
          </div>
        </div>

        <button
          className="relative group"
          aria-label="View cart"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingCart className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </nav>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <div className="h-14" /> {/* Spacer for fixed nav */}
    </>
  );
};

export default Navbar;
