import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const docs = {
  'Getting Started': [
    { title: 'Quick Start Guide', href: '#quick-start' },
    { title: 'Installation', href: '#installation' },
    { title: 'Authentication', href: '#authentication' },
  ],
  'Cloud Services': [
    { title: 'Cloud Storage', href: '#cloud-storage' },
    { title: 'Compute Instances', href: '#compute' },
    { title: 'Load Balancing', href: '#load-balancing' },
  ],
  'AI Solutions': [
    { title: 'AI Integration', href: '#ai-integration' },
    { title: 'Machine Learning', href: '#ml' },
    { title: 'Natural Language Processing', href: '#nlp' },
  ],
  'API Reference': [
    { title: 'REST API', href: '#rest-api' },
    { title: 'SDKs', href: '#sdks' },
    { title: 'WebSocket API', href: '#websocket' },
  ],
};

const codeExamples = {
  python: `import polteck

# Initialize the client
client = polteck.Client(api_key="your-api-key")

# Create a new cloud instance
instance = client.compute.create_instance(
    name="my-instance",
    size="medium",
    region="us-west"
)

# Deploy your application
deployment = client.apps.deploy(
    instance_id=instance.id,
    github_repo="username/repo",
    branch="main"
)`,
  javascript: `import { PolteckClient } from '@polteck/sdk';

// Initialize the client
const client = new PolteckClient({
  apiKey: 'your-api-key'
});

// Create a new cloud instance
const instance = await client.compute.createInstance({
  name: 'my-instance',
  size: 'medium',
  region: 'us-west'
});

// Deploy your application
const deployment = await client.apps.deploy({
  instanceId: instance.id,
  githubRepo: 'username/repo',
  branch: 'main'
});`,
};

export default function DocumentationPage() {
  const [activeTab, setActiveTab] = useState('python');

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden">
        {/* Documentation Header */}
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Documentation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to know about Polteck's cloud and AI services.
            </p>
          </motion.div>
        </div>

        {/* Documentation Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-4">
                {Object.entries(docs).map(([category, items]) => (
                  <div key={category} className="mb-8">
                    <h3 className="font-semibold text-gray-900">{category}</h3>
                    <ul className="mt-2 space-y-2">
                      {items.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.href}
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <h2 id="quick-start">Quick Start Guide</h2>
                <p>
                  Get started with Polteck's cloud services in minutes. Follow this guide to create
                  your first cloud instance and deploy your application.
                </p>

                {/* Code Examples */}
                <div className="mt-6">
                  <div className="flex border-b">
                    <button
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === 'python'
                          ? 'border-b-2 border-primary text-primary'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('python')}
                    >
                      Python
                    </button>
                    <button
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === 'javascript'
                          ? 'border-b-2 border-primary text-primary'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('javascript')}
                    >
                      JavaScript
                    </button>
                  </div>
                  <div className="mt-4">
                    <SyntaxHighlighter
                      language={activeTab}
                      style={tomorrow}
                      className="rounded-lg"
                    >
                      {codeExamples[activeTab as keyof typeof codeExamples]}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <h2 id="installation" className="mt-16">Installation</h2>
                <p>
                  Install the Polteck SDK using your preferred package manager:
                </p>
                <SyntaxHighlighter language="bash" style={tomorrow} className="rounded-lg">
                  {`# Python
pip install polteck

# JavaScript
npm install @polteck/sdk`}
                </SyntaxHighlighter>

                <h2 id="authentication" className="mt-16">Authentication</h2>
                <p>
                  To use Polteck services, you'll need to authenticate your requests using an API key.
                  You can generate an API key from your dashboard.
                </p>

                <div className="mt-16">
                  <Link
                    to="/docs/api"
                    className="text-primary hover:text-primary/90"
                  >
                    View Full API Reference →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
