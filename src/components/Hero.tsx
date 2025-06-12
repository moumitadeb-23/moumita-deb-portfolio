
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Aspiring Front-End Developer | Python Enthusiast | Creative Learner";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10"></div>
      
      <div className="text-center z-10 animate-fade-in">
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover-scale">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b372?w=400&h=400&fit=crop&crop=face"
              alt="Moumita Deb"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-blue-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-primary rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Moumita Deb
        </h1>
        
        <div className="h-16 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="mt-12">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};
