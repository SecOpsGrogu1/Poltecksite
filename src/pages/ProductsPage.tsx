import { motion } from 'framer-motion';
import { CloudArrowUpIcon, ServerIcon, ShieldCheckIcon, CpuChipIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Cloud Infrastructure',
    description: 'Enterprise-grade cloud infrastructure with global reach. Scale your applications seamlessly across our network of data centers.',
    icon: CloudArrowUpIcon,
    features: [
      'Global CDN',
      'Auto-scaling',
      'Load balancing',
      'Multi-region deployment',
    ],
    href: '/products/cloud',
  },
  {
    name: 'AI Solutions',
    description: 'Integrate cutting-edge AI capabilities into your applications. From machine learning to natural language processing.',
    icon: CpuChipIcon,
    features: [
      'Machine Learning APIs',
      'Natural Language Processing',
      'Computer Vision',
      'Custom AI Models',
    ],
    href: '/products/ai',
  },
  {
    name: 'Technical Support',
    description: '24/7 expert technical support and consulting. Our team of experts is always ready to help you succeed.',
    icon: ServerIcon,
    features: [
      '24/7 Support',
      'Expert Consulting',
      'Training Programs',
      'Implementation Support',
    ],
    href: '/products/support',
  },
  {
    name: 'Security Services',
    description: 'Advanced security solutions with real-time protection. Keep your data and applications safe with enterprise-grade security.',
    icon: ShieldCheckIcon,
    features: [
      'DDoS Protection',
      'SSL/TLS Certificates',
      'WAF',
      'Identity Management',
    ],
    href: '/products/security',
  },
  {
    name: 'Edge Computing',
    description: 'Distributed computing solutions for faster processing. Bring computation closer to your users with edge locations.',
    icon: CpuChipIcon,
    features: [
      'Edge Locations',
      'Low Latency',
      'Data Processing',
      'IoT Integration',
    ],
    href: '/products/edge',
  },
  {
    name: 'DevOps Tools',
    description: 'Streamline your development and deployment process. Modern tools for modern development workflows.',
    icon: CommandLineIcon,
    features: [
      'CI/CD Pipeline',
      'Container Registry',
      'Monitoring',
      'Log Management',
    ],
    href: '/products/devops',
  },
];

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '/contact',
    price: '$299',
    description: 'Perfect for small teams and startups.',
    features: [
      '5 cloud instances',
      '100GB storage',
      'Basic support',
      'API access',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '/contact',
    price: '$799',
    description: 'Ideal for growing businesses.',
    features: [
      'Unlimited instances',
      '1TB storage',
      '24/7 priority support',
      'Advanced AI features',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contact',
    price: 'Custom',
    description: 'For large organizations.',
    features: [
      'Custom infrastructure',
      'Unlimited storage',
      'Dedicated support team',
      'Custom AI models',
    ],
    featured: false,
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Products Header */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive solutions for modern businesses. From cloud infrastructure to AI integration,
              we provide everything you need to succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-x-4">
                <product.icon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {product.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{product.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={product.href}
                className="mt-8 text-sm font-semibold leading-6 text-primary hover:text-primary/90"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for your business
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tierIdx * 0.1 }}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.featured ? 'lg:z-10 lg:rounded-b-none' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={tier.href}
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-primary text-white shadow-sm hover:bg-primary/90 focus-visible:outline-primary'
                    : 'text-primary ring-1 ring-inset ring-primary/20 hover:ring-primary/30'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 pb-24">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Contact our sales team to find the perfect solution for your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Sales
            </Link>
            <Link to="/docs" className="text-sm font-semibold leading-6 text-white">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
