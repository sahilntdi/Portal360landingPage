import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    
    if (!cursor || !cursorInner) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });

      // Add cursor trail particles
      if (Math.random() > 0.85) {
        const id = Date.now() + Math.random();
        setTrails(prev => [...prev.slice(-8), { x: e.clientX, y: e.clientY, id }]);
        
        setTimeout(() => {
          setTrails(prev => prev.filter(t => t.id !== id));
        }, 800);
      }
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorInner], {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorInner], {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .cursor-hover');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden lg:block fixed w-10 h-10 border-2 border-primary/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ mixBlendMode: 'difference' }}
      />
      <div
        ref={cursorInnerRef}
        className="hidden lg:block fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {trails.map(trail => (
        <div
          key={trail.id}
          className="hidden lg:block fixed w-1 h-1 rounded-full pointer-events-none z-[9998] animate-trail-fade"
          style={{
            left: trail.x,
            top: trail.y,
            background: `hsl(var(--primary) / 0.6)`,
            boxShadow: '0 0 10px hsl(var(--primary) / 0.8)',
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;
