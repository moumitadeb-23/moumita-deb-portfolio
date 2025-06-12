
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mamaimoumita23092004@gmail.com',
      href: 'mailto:mamaimoumita23092004@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/moumitadeb23',
      href: 'https://linkedin.com/in/moumitadeb23'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'instagram.com/moumitadeb_official',
      href: 'https://instagram.com/moumitadeb_official'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 hover-scale transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full hover-scale">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-8">Get In Touch</h3>
            
            {contactInfo.map((contact, index) => (
              <Card key={index} className="p-6 hover-scale transition-all duration-300 hover:shadow-lg">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {contact.label}
                    </h4>
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  </div>
                </a>
              </Card>
            ))}

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-semibold text-primary mb-3">Let's Build Something Amazing Together!</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow developers and designers. Don't hesitate to reach out!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
