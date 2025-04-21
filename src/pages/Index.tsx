import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Demo product data with t-shirt model images
const PRODUCTS = [{
  id: "basic-white",
  name: "Classic White Tee",
  price: "Rs 2,900",
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
  shortDesc: "Essential white t-shirt with premium cotton blend."
}, {
  id: "heritage-black",
  name: "Heritage Black",
  price: "Rs 3,100",
  image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80",
  shortDesc: "Signature black tee with minimalist design."
}, {
  id: "summer-breeze",
  name: "Summer Breeze",
  price: "Rs 2,800",
  image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80",
  shortDesc: "Light and airy tee perfect for summer days."
}];

const Index = () => {
  const handleAddToCart = useCallback((product: any) => {
    window.dispatchEvent(new CustomEvent("addToCartDemo", {
      detail: product
    }));
  }, []);
  
  return <div className="bg-white min-h-screen w-full">
      <Navbar />
      <HeroSection />
      
      {/* This Month's Drop */}
      <section id="drop" className="container mx-auto py-20 px-4 md:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-black tracking-tight">
            THIS MONTH'S DROP
          </h2>
          <Link to="/all-products" className="flex items-center text-black font-grotesk font-medium">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {PRODUCTS.map(prod => <ProductCard key={prod.id} product={prod} onAddToCart={handleAddToCart} />)}
        </div>
        
        <div className="mt-10 text-center text-neutral-600 font-inter">
          <span>Limited stock — when they're gone, they're gone.</span>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="w-full bg-black py-20 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="font-grotesk text-3xl md:text-4xl text-white font-bold mb-8">
            MONTHLY EXCLUSIVES
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-8 font-inter">
            Each month, we drop 3 new Sri Lankan-inspired designs. No reprints. No repeats. Only authenticity and exclusivity in every thread.
          </p>
          <Link to="/about" className="px-8 py-3 bg-white text-black font-grotesk font-semibold text-lg inline-block">
            Learn More
          </Link>
        </div>
      </section>
      
      <footer className="pt-20 pb-8 bg-white border-t border-black px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-grotesk font-bold text-lg mb-4">Featured</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link to="#" className="hover:underline">New Arrivals</Link></li>
              <li><Link to="#" className="hover:underline">Best Sellers</Link></li>
              <li><Link to="#" className="hover:underline">Collections</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-grotesk font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link to="#" className="hover:underline">All Products</Link></li>
              <li><Link to="#" className="hover:underline">Tees</Link></li>
              <li><Link to="#" className="hover:underline">Limited Editions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-grotesk font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link to="#" className="hover:underline">Contact Us</Link></li>
              <li><Link to="#" className="hover:underline">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-grotesk font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link to="/about" className="hover:underline">Our Story</Link></li>
              <li><Link to="#" className="hover:underline">Sustainability</Link></li>
              <li><Link to="#" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-neutral-600 font-inter">
          &copy; {new Date().getFullYear()} SariThreads Sri Lanka. All rights reserved.
        </div>
      </footer>
    </div>;
};

export default Index;
