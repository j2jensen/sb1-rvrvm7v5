import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [milliseconds, setMilliseconds] = useState<number>(0);
  
  useEffect(() => {
    const startDate = new Date('2025-01-01T00:00:00Z').getTime();
    
    const updateCounter = () => {
      const now = new Date().getTime();
      const diffInMilliseconds = now - startDate;
      setMilliseconds(diffInMilliseconds);
    };
    
    // Initial update
    updateCounter();
    
    // Update every 16ms (approximately 60fps)
    const interval = setInterval(updateCounter, 16);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="animate-float">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-8 animate-pulse" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-red-800 mb-6 leading-relaxed">
          Kate, how do I love thee?
          <br />
          Let me count the ways...
        </h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-200">
          <div className="font-mono text-4xl md:text-5xl lg:text-6xl text-red-600 font-bold tabular-nums">
            {milliseconds.toLocaleString()}
          </div>
          <div className="text-red-800 mt-4 font-serif italic">
            Love, Chris
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;