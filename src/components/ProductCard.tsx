
import { Link } from "react-router-dom";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  shortDesc: string;
};

interface Props {
  product: Product;
  onAddToCart: (prod: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: Props) => {
  const [adding, setAdding] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    onAddToCart(product);
    setTimeout(() => setAdding(false), 700); // simulate effect
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-grotesk text-sm font-semibold
            transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'} ${adding ? 'bg-white text-black' : ''}`}
          disabled={adding}
        >
          {adding ? 'Added to Bag' : 'Add to Bag'}
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-grotesk text-lg font-semibold">{product.name}</h3>
        <p className="text-neutral-600 text-sm font-inter mt-1">{product.shortDesc}</p>
        <p className="font-grotesk mt-2 font-medium">{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
