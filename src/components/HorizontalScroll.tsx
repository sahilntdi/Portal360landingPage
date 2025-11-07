import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Users, BarChart3, Shield, Zap, Workflow } from 'lucide-react';

const HorizontalScroll = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const technologies = [
    { title: 'AI-Powered Automation', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80', icon: Brain },
    { title: 'Real-Time Collaboration', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', icon: Users },
    { title: 'Advanced Analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', icon: BarChart3 },
    { title: 'Secure Cloud Storage', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80', icon: Shield },
    { title: 'Seamless Integrations', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', icon: Zap },
    { title: 'Smart Workflows', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80', icon: Workflow },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mt-4">
            Everything you need to scale your business
          </p>
        </div>

        {/* Responsive Grid - Monday.com style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl min-h-[280px]"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${tech.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/98" />
              
              <CardHeader className="relative z-10 pb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary/20 transition-all duration-300">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {tech.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  Enhance your workflow with powerful {tech.title.toLowerCase()} capabilities designed for modern teams.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
