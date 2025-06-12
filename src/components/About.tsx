
import { GraduationCap, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const About = () => {
  const education = [
    {
      year: '2021',
      title: 'Secondary Examination',
      institution: 'Hindmotor High School (WBBSE)',
      grade: '93%'
    },
    {
      year: '2023',
      title: 'Higher Secondary',
      institution: 'Hindmotor Education Centre (CBSE, Science)',
      grade: '72%'
    },
    {
      year: '2024–2027',
      title: 'BCA',
      institution: 'Techno College Hooghly (WBUT)',
      grade: 'Pursuing'
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-slide-in-left">
            <Card className="p-8 hover-scale">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Motivated Bachelor of Computer Applications (BCA) student with exceptional communication skills and a strong work ethic. Passionate about programming, designing, and effective communication. Dedicated to delivering high-quality results and exceeding expectations.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />
              Education Timeline
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover-scale transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-semibold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-primary">{edu.year}</span>
                      <span className="text-sm font-semibold text-foreground">{edu.grade}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
