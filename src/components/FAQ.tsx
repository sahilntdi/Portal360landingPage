import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does it take to get started with Portal 360?',
    answer: 'Most teams are up and running in under 30 minutes. Our AI-powered onboarding automatically detects your clients and configures your workspace based on your needs.',
  },
  {
    question: 'Can I migrate my existing data from other tools?',
    answer: 'Yes! Portal 360 integrates with major platforms like Asana, ClickUp, Jira, and many more. We provide migration tools and dedicated support to help you transfer your data seamlessly.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC 2, and other major security standards. Your data is stored in secure, redundant data centers.',
  },
  {
    question: "What's included in the free trial?",
    answer: 'The 15-day free trial includes full access to all features, up to 5 users, and email support. No credit card required to start.',
  },
  {
    question: 'Can I customize Portal 360 for my brand?',
    answer: 'Yes! Scale and Enterprise plans include custom branding options, white-labeling, and the ability to customize workflows to match your business processes.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide email support for all plans, priority support for Starter and Scale, and dedicated account managers for Enterprise customers. Our average response time is under 2 hours.',
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Portal 360
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
