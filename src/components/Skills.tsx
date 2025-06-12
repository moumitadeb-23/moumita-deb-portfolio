
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const Skills = () => {
  const skillsData = [
    { category: 'Programming Languages', skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 70 },
    ]},
    { category: 'Web Development', skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
    ]},
    { category: 'Tools & Others', skills: [
      { name: 'Canva', level: 95 },
      { name: 'MySQL', level: 75 },
      { name: 'Communication (TCS iON Certified)', level: 100 },
    ]},
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <Card key={index} className="p-8 hover-scale transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
