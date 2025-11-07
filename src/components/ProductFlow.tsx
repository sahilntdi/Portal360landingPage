import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Sign Up Seamlessly',
    description: 'Connect with Google, Microsoft, or IMAP in seconds',
  },
  {
    number: '02',
    title: 'AI Detection',
    description: 'Our AI automatically reads and detects client information',
  },
  {
    number: '03',
    title: 'Quick Onboarding',
    description: 'Answer a few smart questions to personalize your workspace',
  },
  {
    number: '04',
    title: 'Auto-Configuration',
    description: 'Your workspace is intelligently configured based on your needs',
  },
  {
    number: '05',
    title: 'Ready to Launch',
    description: 'Dashboard ready with clients, tasks, and integrations all set up',
  },
];

const ProductFlow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Enhanced step animations
        stepsRef.current.forEach((step, index) => {
          if (step) {
            gsap.fromTo(
              step,
              {
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
                scale: 0.85,
                filter: 'blur(10px)',
              },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                filter: 'blur(0px)',
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: step,
                  start: 'top bottom-=50',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });

        // Smooth line draw animation
        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { scaleY: 0, opacity: 0.5 },
            {
              scaleY: 1,
              opacity: 1,
              duration: 2,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center+=100',
                end: 'bottom center-=100',
                scrub: 1.5,
              },
            }
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 px-4 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              it works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get up and running in minutes with our intelligent process
          </p>
        </div>

        {/* Card-based flow - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) stepsRef.current[index] = el;
              }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {step.description}
                </p>
                
                {/* Connection line indicator */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-primary opacity-30" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFlow;
