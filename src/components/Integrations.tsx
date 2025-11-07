const integrations = [
  'Xero',
  'MYOB',
  'QuickBooks',
  'Asana',
  'ClickUp',
  'Jira',
  'Google Ads',
  'Meta',
  'LinkedIn',
  'Metricool',
  'Mailchimp',
  'Slack',
  'Microsoft Teams',
  'Zapier',
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Seamlessly{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Integrates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with your favorite tools and services in one click
          </p>
        </div>

        {/* Marquee slider for integrations */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of integrations */}
            {integrations.map((integration, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg mx-3 min-w-[200px] group"
              >
                <span className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors whitespace-nowrap">
                  {integration}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {integrations.map((integration, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg mx-3 min-w-[200px] group"
              >
                <span className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors whitespace-nowrap">
                  {integration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
