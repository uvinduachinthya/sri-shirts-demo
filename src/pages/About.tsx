
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="w-full h-[60vh] relative">
        <img 
          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1500&q=80" 
          alt="Sri Lankan Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-grotesk font-bold text-white">OUR STORY</h1>
        </div>
      </div>
      
      <div className="container mx-auto py-20 px-4 md:px-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-grotesk font-bold mb-6">OUR MISSION</h2>
            <p className="text-neutral-700 font-inter leading-relaxed">
              SariThreads stands for bold individuality, authentic stories, and celebrating the 
              colorful tapestry of Sri Lankan identity. Everything is conceptualized and printed locally. 
              We believe in quality over quantity and in the timeless confidence of standing out.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=600&q=80" 
              alt="Sri Lankan Culture" 
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80" 
              alt="Sri Lankan Craftsmanship" 
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-grotesk font-bold mb-6">THE CONCEPT</h2>
            <p className="text-neutral-700 font-inter leading-relaxed">
              One drop a month, three never-before-seen T-shirts, no repeats, no second chances. Our mission 
              is to take the vibrancy and diversity of Sri Lankan creativity and wrap it into wearable art—each 
              design fusing heritage motifs, urban energy, and the unfiltered pulse of modern island life.
            </p>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-grotesk font-bold mb-6">JOIN THE MOVEMENT</h2>
          <p className="text-neutral-700 font-inter leading-relaxed mb-8">
            With ultra-limited runs, owning one means you're part of an insider tribe: no restocks, 
            and once they're gone, they're gone. Experience the exclusivity of Sri Lankan design.
          </p>
          <a 
            href="#subscribe" 
            className="px-8 py-3 bg-black text-white font-grotesk font-semibold text-lg inline-block"
          >
            Subscribe to Drops
          </a>
        </div>
      </div>
      
      <footer className="pt-20 pb-8 bg-white border-t border-black px-4">
        <div className="container mx-auto text-center">
          <span className="font-grotesk text-xl font-bold mb-6 inline-block">SariThreads</span>
          <div className="text-sm text-neutral-600 font-inter mt-4">
            &copy; {new Date().getFullYear()} SariThreads Sri Lanka. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
