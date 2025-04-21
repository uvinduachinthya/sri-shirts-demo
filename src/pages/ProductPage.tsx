
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { toast } = useToast();
  
  const images = [
    "/lovable-uploads/c4f2ac77-64e4-42b1-8366-80e28827e3c3.png",
    "/lovable-uploads/c9648331-76a6-43d9-85b7-8e36192649eb.png",
    "/lovable-uploads/04c3b83a-d95c-4c98-877c-3f28f0621e46.png"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Added to cart",
      description: `Size ${selectedSize} added to your cart`
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={images[currentImage]}
              alt="Product image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  currentImage === index ? 'border-black' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`Product thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Abstract Pattern T-Shirt</h1>
            <p className="text-xl mt-2">$295.00</p>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="font-semibold mb-2">Size</h2>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              Add to Cart
            </Button>

            <div className="space-y-4 pt-6">
              <div>
                <h3 className="font-semibold">Description</h3>
                <p className="mt-2 text-gray-600">
                  Luxurious cotton t-shirt featuring a unique abstract black pattern on a heather grey base. 
                  Made in Italy with premium materials and expert craftsmanship. The oversized fit and 
                  artistic design make this piece a statement addition to any wardrobe.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Details</h3>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>100% Premium Cotton</li>
                  <li>Made in Italy</li>
                  <li>Abstract pattern print</li>
                  <li>Oversized fit</li>
                  <li>Machine wash cold</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
