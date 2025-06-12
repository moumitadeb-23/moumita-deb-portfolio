
import { Card } from '@/components/ui/card';
import { Target, Lightbulb, Rocket } from 'lucide-react';

export const Goals = () => {
  return (
    <section id="goals" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Future Goals
        </h2>
        
        <Card className="p-8 md:p-12 hover-scale transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center justify-center mb-8">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-blue-500" />
              </div>
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Vision & Aspirations</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Currently focused on learning and exploring new technologies in the ever-evolving world of web development. 
              My future goals include working professionally in front-end development and UI/UX design, where I can combine 
              my technical skills with creative problem-solving to build meaningful digital experiences that make a difference.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Master Front-End</h4>
                <p className="text-sm text-muted-foreground">Deepen expertise in React, TypeScript, and modern frameworks</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-500 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">Develop skills in user experience and interface design</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Professional Growth</h4>
                <p className="text-sm text-muted-foreground">Join a dynamic team and contribute to impactful projects</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
