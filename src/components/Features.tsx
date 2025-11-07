import { useEffect, useRef, useState } from 'react';
import { 
  LayoutGrid, 
  Users, 
  Shield 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: LayoutGrid,
    title: 'Task Management',
    description: 'Plan, track, and visualize tasks in Kanban, Gantt, Calendar, or Table view.',
    color: 'from-purple-500 to-blue-500',
  },
  {
    icon: Users,
    title: 'Client Management',
    description: 'Manage all client data, permissions, and roles in one dashboard.',
    color: 'from-blue-500 to-cyan-500',
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered fade-in animation with smooth reveal masks
      gsap.fromTo(
        cardsRef.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95,
          clipPath: 'inset(50% 0% 50% 0%)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Parallax effect on cards
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          y: (i % 2 === 0 ? -30 : -20),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Number counter animation
      gsap.to({}, {
        scrollTrigger: {
          trigger: cardsRef.current[1],
          start: 'top 80%',
          onEnter: () => {
            const duration = 2000;
            const start = 0;
            const end = 300;
            const startTime = Date.now();
            
            const animate = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              const current = Math.floor(start + (end - start) * eased);
              
              setCounterValue(current);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            animate();
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Solutions for{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              every team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by one platform
          </p>
        </div>

        {/* Asymmetric Grid Layout - Monday.com style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Purple Card - Spans full width on mobile, 8 cols on desktop */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            className="lg:col-span-8 rounded-3xl overflow-hidden relative min-h-[400px] md:min-h-[500px] p-8 md:p-12 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, hsl(265, 70%, 55%), hsl(265, 60%, 45%))' }}
          >
            <div className="space-y-4 text-white">
              <div className="flex items-center gap-2 mb-4">
                <LayoutGrid className="w-6 h-6" />
                <span className="text-sm font-medium opacity-90">Task Management</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Amplify project impact
              </h3>
              <p className="text-lg md:text-xl opacity-90 max-w-md">
                Plan, track, and visualize tasks with AI that streamlines workflows and drives productivity
              </p>
              <button className="mt-6 px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all">
                Get Started →
              </button>
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-20">
              <div className="w-full h-full bg-white/10 rounded-tl-3xl" />
            </div>
          </div>

          {/* Testimonial Card - Spans 4 cols */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[1] = el;
            }}
            className="lg:col-span-4 rounded-3xl bg-secondary/50 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[400px] md:min-h-[500px] relative overflow-hidden border-gradient-animated"
          >
            <div className="absolute inset-0 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 animate-border-flow" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="text-6xl font-bold text-primary">{counterValue}%</div>
              <p className="text-xl font-semibold">increase in creative output</p>
              <p className="text-muted-foreground leading-relaxed">
                "Portal 360 isn't just another tool in the mix, but a work operating system that supports our need for efficiency at scale."
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-12 rounded-full bg-primary/20" />
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Creative Director</div>
              </div>
            </div>
          </div>

          {/* Icon Card - Small */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[2] = el;
            }}
            className="lg:col-span-4 rounded-3xl overflow-hidden p-8 flex items-center justify-center min-h-[300px]"
            style={{ background: 'linear-gradient(135deg, hsl(160, 80%, 90%), hsl(160, 60%, 80%))' }}
          >
            <Users className="w-32 h-32" style={{ color: 'hsl(160, 60%, 40%)' }} />
          </div>

          {/* Green Card - Large */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[3] = el;
            }}
            className="lg:col-span-8 rounded-3xl p-8 md:p-12 min-h-[300px] flex items-center"
            style={{ background: 'linear-gradient(135deg, hsl(160, 70%, 50%), hsl(160, 70%, 40%))' }}
          >
            <div className="grid md:grid-cols-2 gap-8 w-full">
              <div className="space-y-4 text-white">
                <h3 className="text-3xl md:text-4xl font-bold">Flexible yet standardized</h3>
              </div>
              <div className="text-white/90">
                <p className="text-lg leading-relaxed">
                  Build custom workflows with a no-code interface, while defining admin controls to maintain cross-org consistency
                </p>
              </div>
            </div>
          </div>

          {/* Blue Card - Large */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[4] = el;
            }}
            className="lg:col-span-8 rounded-3xl p-8 md:p-12 min-h-[300px]"
            style={{ background: 'linear-gradient(135deg, hsl(230, 70%, 60%), hsl(230, 70%, 50%))' }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center h-full">
              <div className="space-y-4 text-white">
                <h3 className="text-3xl md:text-4xl font-bold">Products teams love to use</h3>
              </div>
              <div className="text-white/90">
                <p className="text-lg leading-relaxed">
                  Onboard your entire organization with intuitive products they'll love to use
                </p>
              </div>
            </div>
          </div>

          {/* Heart Icon Card */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[5] = el;
            }}
            className="lg:col-span-4 rounded-3xl overflow-hidden p-8 flex items-center justify-center min-h-[300px]"
            style={{ background: 'linear-gradient(135deg, hsl(230, 70%, 90%), hsl(230, 60%, 85%))' }}
          >
            <Shield className="w-32 h-32" style={{ color: 'hsl(230, 70%, 50%)' }} />
          </div>

          {/* Red/Coral Card - Large */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[6] = el;
            }}
            className="lg:col-span-12 rounded-3xl p-8 md:p-12 min-h-[300px]"
            style={{ background: 'linear-gradient(135deg, hsl(10, 85%, 65%), hsl(10, 85%, 60%))' }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-white">
                <h3 className="text-3xl md:text-4xl font-bold">Fast time to value</h3>
              </div>
              <div className="text-white/90">
                <p className="text-lg leading-relaxed">
                  See value fast with products that are quick to implement and even easier to learn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
