import { useEffect, useRef } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Unified Workspace Management',
    excerpt: 'Discover how integrated platforms are transforming how businesses operate, from task management to client communications.',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 2,
    title: 'Maximizing Productivity with AI-Powered Automation',
    excerpt: 'Learn how Portal 360 uses artificial intelligence to streamline your workflows and reduce manual tasks.',
    date: '2024-03-10',
    readTime: '7 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    id: 3,
    title: 'Client Management Best Practices for 2024',
    excerpt: 'Essential strategies for maintaining strong client relationships while scaling your business operations.',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    id: 4,
    title: 'Security First: How We Protect Your Data',
    excerpt: 'An in-depth look at our enterprise-grade security measures and compliance standards.',
    date: '2024-02-28',
    readTime: '8 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  },
  {
    id: 5,
    title: 'Integration Ecosystem: Connect Everything',
    excerpt: 'How Portal 360 seamlessly integrates with your existing tools for a unified workflow experience.',
    date: '2024-02-20',
    readTime: '5 min read',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 6,
    title: 'Scaling Your Agency with Portal 360',
    excerpt: 'Real stories from agencies that transformed their operations and scaled to new heights.',
    date: '2024-02-15',
    readTime: '10 min read',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
  },
];

const categories = ['All', 'Product', 'Technology', 'Business', 'Security', 'Case Study'];

const Blog = () => {
  useSmoothScroll();
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
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold">
              Insights &{' '}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest trends, best practices, and product updates from Portal 360
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border hover:border-primary/50 bg-card hover:bg-card/80 transition-all duration-300 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section ref={sectionRef} className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              >
                <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <a
                      href={`/blog/${post.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/blog/${post.id}`;
                      }}
                      className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
