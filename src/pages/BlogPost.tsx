import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPostsData = [
  {
    id: '1',
    title: 'The Future of Unified Workspace Management',
    content: `The landscape of business operations is rapidly evolving. Companies are no longer satisfied with juggling multiple disconnected tools. The future belongs to unified platforms that seamlessly integrate all aspects of workspace management.

## The Problem with Fragmented Tools

Traditional approaches to business management involve using separate tools for project management, client communications, billing, and support. This fragmentation leads to:

- Data silos that prevent holistic insights
- Time wasted switching between applications
- Increased costs from multiple subscriptions
- Training overhead for each new tool
- Integration headaches and data inconsistencies

## The Unified Platform Advantage

Portal 360 represents the next generation of business management platforms. By bringing everything under one roof, businesses can:

### Streamlined Workflows
With all your tools in one place, your team can focus on what matters most. No more context switching or hunting for information across different platforms.

### Better Insights
Unified data means better analytics. Make informed decisions based on complete information about your projects, clients, and business performance.

### Cost Efficiency
One platform means one subscription, one training process, and one support contact. This translates to significant savings in both time and money.

## Looking Ahead

The future of workspace management is integrated, intelligent, and intuitive. As businesses continue to evolve, having a unified platform isn't just nice to have—it's essential for staying competitive.`,
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: '2',
    title: 'Maximizing Productivity with AI-Powered Automation',
    content: `Artificial Intelligence is no longer a futuristic concept—it's a practical tool that's transforming how businesses operate today. Portal 360 leverages cutting-edge AI to automate repetitive tasks and enhance decision-making.

## Smart Task Management

Our AI analyzes your workflow patterns and suggests optimizations:

- Automatic task prioritization based on deadlines and dependencies
- Smart scheduling that considers team capacity and availability
- Predictive analytics for project completion times
- Intelligent resource allocation

## Natural Language Processing

Communicate with your system naturally:

- Create tasks using conversational language
- Search through documents and conversations intuitively
- Generate reports with simple text commands
- Get instant answers to business questions

## Automated Workflows

Set up complex automation without coding:

- Trigger actions based on specific events
- Auto-assign tasks to team members
- Send notifications and reminders automatically
- Generate recurring tasks and reports

## The Bottom Line

AI-powered automation isn't about replacing human workers—it's about freeing them to focus on creative, strategic work that truly matters. By handling routine tasks automatically, Portal 360 lets your team operate at peak productivity.`,
    date: '2024-03-10',
    readTime: '7 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  // Add more blog posts as needed
];

const BlogPost = () => {
  useSmoothScroll();
  const { id } = useParams();
  
  const post = blogPostsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto max-w-4xl px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <article className="container mx-auto max-w-4xl px-4 -mt-32 relative z-10">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Post Header */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          {/* Content with proper formatting */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-12 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-semibold mt-8 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              // Handle list items
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              // Regular paragraphs
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Related Posts */}
        <div className="py-12">
          <h2 className="text-2xl font-bold mb-6">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPostsData
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedPost.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
