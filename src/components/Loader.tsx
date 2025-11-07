import { useEffect, useRef } from "react";
import { Zap } from "lucide-react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete,
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    )
      .fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "power2.inOut" },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        <div
          ref={logoRef}
          className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow"
        >
          <Zap className="w-10 h-10 text-white" />
        </div>

        <div ref={textRef} className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Portal 360
          </h2>
          <p className="text-sm text-muted-foreground">
            Think beyond tasks. Think 360°.
          </p>
        </div>

        <div className="w-64 h-1 bg-secondary/30 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-primary origin-left"
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
