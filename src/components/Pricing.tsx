import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '15 days',
    description: 'Perfect for trying out Portal 360',
    features: [
      'Full platform access',
      'Up to 5 users',
      'Basic integrations',
      'Email support',
      'Task & client management',
    ],
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '$19',
    period: 'per user/month',
    description: 'For small teams getting started',
    features: [
      'Everything in Free',
      'Unlimited users',
      'Advanced integrations',
      'Priority support',
      'Custom workflows',
      'API access',
    ],
    highlighted: false,
  },
  {
    name: 'Scale',
    price: '$25',
    period: 'per user/month',
    description: 'For growing businesses',
    features: [
      'Everything in Starter',
      'Advanced analytics',
      'Custom branding',
      'Dedicated support',
      'SSO authentication',
      'Advanced automation',
      'White-label options',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$2000',
    period: 'per partner/month',
    description: 'For agencies and large organizations',
    features: [
      'Everything in Scale',
      'Unlimited workspaces',
      'Multi-tenant support',
      'Custom development',
      'SLA guarantees',
      'Dedicated account manager',
      'On-premise deployment',
    ],
    highlighted: false,
  },
];

const Pricing = () => {
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
              y: 60,
              rotateX: -15,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.8,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: 'top bottom-=50',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

      // Animate pricing numbers
      const priceElements = document.querySelectorAll('.price-number');
      priceElements.forEach((el) => {
        const price = el.textContent || '0';
        const numericPrice = parseInt(price.replace(/[^0-9]/g, '')) || 0;
        
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: numericPrice,
            duration: 1.5,
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: 'top bottom-=100',
              toggleActions: 'play none none none',
            },
            onUpdate: function() {
              if (el) {
                const currentVal = Math.round(parseFloat(el.textContent || '0'));
                el.textContent = price.includes('$') ? `$${currentVal}` : currentVal.toString();
              }
            }
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple,{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <Card
                className="group relative p-8 bg-card border border-border hover:border-primary/50 h-full flex flex-col transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <div className="space-y-6 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="price-number text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full hover:scale-105 transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
