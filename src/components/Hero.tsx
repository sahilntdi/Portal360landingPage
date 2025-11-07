import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroDashboard from '@/assets/hero-dashboard.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLImageElement>(null);
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Enhanced staggered text animation with blur and character reveal
      gsap.utils.toArray('.hero-title').forEach((element: any) => {
        const text = element.textContent;
        element.innerHTML = text.split('').map((char: string) => 
          char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`
        ).join('');
      });

      tl.fromTo(
        '.hero-title span',
        { 
          opacity: 0, 
          y: 50, 
          rotationX: -90,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.02,
        }
      )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
        },
        '-=0.6'
      )
      .fromTo(
        '.hero-buttons',
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.4'
      )
      .fromTo(
        '.hero-scroll',
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        '-=0.3'
      );

      // Enhanced floating animation with rotation
      gsap.to(dashboardRef.current, {
        y: -25,
        rotation: 1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Scroll-triggered reveal/collapse effect on dashboard
      gsap.fromTo(
        dashboardRef.current,
        {
          scale: 0.7,
          opacity: 0,
          y: 100,
          rotationX: 25,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotationX: 0,
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1.5,
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Collapse effect when scrolling past
      gsap.to(dashboardRef.current, {
        scale: 0.85,
        opacity: 0.3,
        y: -50,
        scrollTrigger: {
          trigger: dashboardRef.current,
          start: 'bottom 40%',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // Smooth 3D tilt on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        
        if (dashboardRef.current) {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const x = (clientX / innerWidth - 0.5) * 15;
          const y = (clientY / innerHeight - 0.5) * 15;

          gsap.to(dashboardRef.current, {
            rotationY: x,
            rotationX: -y,
            duration: 1,
            ease: 'power2.out',
          });
        }

        // Magnetic button effect
        [button1Ref, button2Ref].forEach((buttonRef) => {
          if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const buttonCenterX = rect.left + rect.width / 2;
            const buttonCenterY = rect.top + rect.height / 2;
            const distance = Math.sqrt(
              Math.pow(e.clientX - buttonCenterX, 2) + 
              Math.pow(e.clientY - buttonCenterY, 2)
            );

            if (distance < 150) {
              const angle = Math.atan2(e.clientY - buttonCenterY, e.clientX - buttonCenterX);
              const pull = Math.max(0, (150 - distance) / 150) * 20;
              const x = Math.cos(angle) * pull;
              const y = Math.sin(angle) * pull;

              gsap.to(buttonRef.current, {
                x,
                y,
                duration: 0.3,
                ease: 'power2.out',
              });
            } else {
              gsap.to(buttonRef.current, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)',
              });
            }
          }
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Parallax layering on scroll
      gsap.to('.gradient-orb', {
        y: (i) => (i + 1) * -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.hero-content', {
        y: -100,
        opacity: 0.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Animate gradient orbs
      gsap.to('.gradient-orb', {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        duration: 'random(8, 15)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 2,
          from: 'random',
        },
      });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-orb absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="gradient-orb absolute bottom-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="gradient-orb absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
      </div>
      
      {/* Enhanced particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'hsl(var(--primary))' 
                : i % 3 === 1 
                ? 'hsl(var(--accent))' 
                : 'hsl(var(--secondary))',
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)',
              boxShadow: i % 2 === 0 ? '0 0 10px currentColor' : 'none',
            }}
          />
        ))}
      </div>

      {/* Spotlight effect following cursor */}
      <div 
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20 hero-content">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="hero-title inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">AI-Powered Workspace Platform</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-tight">
            <span className="inline-block">A Unified Workspace for</span>{' '}
            <span className="inline-block bg-gradient-primary bg-clip-text text-transparent stroke-text">
              Everything
            </span>
            <br />{' '}
            <span className="inline-block">Your Business Runs On</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            From clients to tasks, conversations to billing — manage it all from one 
            intelligent, secure platform.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              ref={button1Ref}
              size="lg" 
              className="group text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 hover:scale-105 hover:shadow-glow transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              ref={button2Ref}
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 hover:scale-105 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              See How It Works
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="hero-scroll flex flex-col items-center gap-2 pt-8 opacity-60">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* 3D Dashboard Mockup */}
          <div className="pt-12">
            <img
              ref={dashboardRef}
              src={heroDashboard}
              alt="Portal 360 Dashboard"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-glow border border-primary/20"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
