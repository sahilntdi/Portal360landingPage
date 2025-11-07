import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Building2, CreditCard, FileText, Mail, Settings } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Building2,
    title: 'Organization Overview',
    description: 'Complete visibility across all organizations',
  },
  {
    icon: CreditCard,
    title: 'Subscriptions & Billing',
    description: 'Centralized billing and subscription management',
  },
  {
    icon: Settings,
    title: 'Add-ons & Coupons',
    description: 'Flexible pricing and discount control',
  },
  {
    icon: FileText,
    title: 'Help Content',
    description: 'Dynamic help article management',
  },
  {
    icon: Mail,
    title: 'Email Triggers',
    description: 'Automated email workflows and triggers',
  },
];

const SuperadminShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.superadmin-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.stats-item',
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Enterprise-Grade{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Superadmin Controls
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete visibility and control for agencies and large organizations
          </p>
        </div>

        {/* Mock Dashboard Stats */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="stats-item p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-primary/20">
            <div className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              247
            </div>
            <div className="text-sm text-muted-foreground">Active Organizations</div>
          </Card>
          <Card className="stats-item p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-accent/20">
            <div className="text-4xl font-bold mb-2 text-accent">
              $127K
            </div>
            <div className="text-sm text-muted-foreground">Monthly Revenue</div>
          </Card>
          <Card className="stats-item p-6 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-primary/20">
            <div className="text-4xl font-bold mb-2 bg-gradient-accent bg-clip-text text-transparent">
              3,492
            </div>
            <div className="text-sm text-muted-foreground">Total Users</div>
          </Card>
          <Card className="stats-item p-6 bg-gradient-to-br from-teal-500/10 to-green-500/10 border-accent/20">
            <div className="text-4xl font-bold mb-2 text-accent">
              98.4%
            </div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </Card>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="superadmin-card p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary p-3 mb-6">
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuperadminShowcase;
