import { Link } from 'react-router-dom';
import { format } from 'date-fns';

// Types for our blog posts
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

// Sample blog posts (replace with your actual blog posts)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Optimizing Cloud Costs: A Comprehensive Guide',
    excerpt: 'Learn how to effectively reduce your cloud infrastructure costs without compromising performance...',
    date: '2024-12-17',
    author: 'John Doe',
    readTime: '5 min read',
    category: 'Cloud Engineering',
    imageUrl: '/blog/cloud-costs.jpg',
  },
  // Add more blog posts here
];

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Polteck Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights and updates from our team of cloud experts
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={post.imageUrl || `https://picsum.photos/800/400?random=${post.id}`}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random`}
                    alt="" 
                    className="h-10 w-10 rounded-full bg-gray-100" 
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author}
                    </p>
                    <p className="text-gray-600">{post.readTime}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}