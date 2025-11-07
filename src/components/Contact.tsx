import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sendIconRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isAnimating) return;
    
    setIsAnimating(true);

    // Rocket launch animation on the icon
    if (sendIconRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowSuccess(true);
          setIsAnimating(false);
          
          // Reset form
          const form = e.currentTarget as HTMLFormElement;
          form.reset();
          
          // Hide success message after 3 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        }
      });

      // Rocket launch effect: shake, scale up, blast off
      tl.to(sendIconRef.current, {
        rotation: -5,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
      })
      .to(sendIconRef.current, {
        scale: 1.5,
        duration: 0.2,
      })
      .to(sendIconRef.current, {
        y: -500,
        x: 200,
        rotation: 45,
        scale: 2,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.in',
      })
      // Reset position
      .set(sendIconRef.current, {
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    if (showSuccess) {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
      });
    }
  }, [showSuccess, toast]);

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-background border-border focus:border-primary transition-all duration-300 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                />
              </div>
              <div className="space-y-2 group">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background border-border focus:border-primary transition-all duration-300 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={6}
                className="bg-background border-border focus:border-primary resize-none transition-all duration-300 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
              />
            </div>

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                size="lg"
                disabled={isAnimating}
                className="w-full md:w-auto bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 relative overflow-hidden group disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isAnimating ? 'Launching...' : 'Send Message'}
                  <div ref={sendIconRef} style={{ willChange: 'transform' }}>
                    <Rocket className="w-5 h-5" />
                  </div>
                </span>
                {/* Ripple effect container */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
              </Button>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg animate-fade-in">
                <CheckCircle className="w-5 h-5 text-primary" />
                <p className="text-primary font-medium">
                  Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
