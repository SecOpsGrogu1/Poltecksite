import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

// Sample news article data (replace with your actual news articles)
const newsArticles: Record<string, NewsArticle> = {
  '1': {
    id: '1',
    title: 'Optimizing Cloud Costs: A Comprehensive Guide',
    content: `
      <p>Cloud cost optimization is a critical aspect of managing your infrastructure effectively. In this comprehensive guide, we'll explore various strategies to reduce your cloud spending while maintaining performance.</p>
      
      <h2>Understanding Your Cloud Costs</h2>
      <p>Before implementing any optimization strategies, it's crucial to understand where your money is going. Here are key areas to analyze:</p>
      <ul>
        <li>Compute resources (EC2, Lambda)</li>
        <li>Storage (S3, EBS)</li>
        <li>Data transfer</li>
        <li>Managed services</li>
      </ul>

      <h2>Key Optimization Strategies</h2>
      <p>Here are proven strategies to reduce your cloud costs:</p>
      <ol>
        <li>Right-sizing instances</li>
        <li>Using spot instances</li>
        <li>Implementing auto-scaling</li>
        <li>Cleaning up unused resources</li>
      </ol>
    `,
    date: '2024-12-17',
    author: 'John Doe',
    readTime: '5 min read',
    category: 'Cloud Engineering',
    imageUrl: '/news/cloud-costs.jpg',
  },
  // Add more news articles here
};

export default function NewsArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = id ? newsArticles[id] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Article not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mt-8 flex justify-center gap-x-4 text-xs">
            <time dateTime={article.date} className="text-gray-500">
              {format(new Date(article.date), 'MMMM d, yyyy')}
            </time>
            <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {article.category}
            </span>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {article.title}
          </h1>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="relative w-full">
            <img
              src={article.imageUrl || `https://picsum.photos/800/400?random=${article.id}`}
              alt=""
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>

          <div className="mt-8 flex items-center gap-x-4 border-b border-gray-900/10 pb-8">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&background=random`}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-100"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">{article.author}</p>
              <div className="flex items-center gap-x-4 text-gray-600">
                <span className="flex items-center gap-x-1">
                  <CalendarIcon className="h-4 w-4" />
                  {format(new Date(article.date), 'MMM d, yyyy')}
                </span>
                <span className="flex items-center gap-x-1">
                  <ClockIcon className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          <div 
            className="prose prose-lg prose-indigo mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
    </div>
  );
}
