import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'Portal 360 helped us consolidate 7 different tools into one secure platform. Our team productivity increased by 40% in just 2 months.',
    author: 'Ava Patel',
    role: 'Operations Director',
    company: 'Buildwise',
  },
  {
    quote: 'The AI-powered onboarding is magical. We had our entire agency set up with clients, tasks, and billing in under 30 minutes.',
    author: 'Marcus Chen',
    role: 'Founder & CEO',
    company: 'Digital Surge',
  },
  {
    quote: 'Finally, a platform that understands enterprise needs. The superadmin controls give us complete visibility across all our organizations.',
    author: 'Sarah Williams',
    role: 'CTO',
    company: 'TechFlow Solutions',
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
              rotateY: -15,
            },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Thousands
            </span>
            {' '}of Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about Portal 360
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-muted-foreground">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
