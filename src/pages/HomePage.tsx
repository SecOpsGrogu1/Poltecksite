import { motion } from 'framer-motion';
import { BanknotesIcon, ChatBubbleLeftRightIcon, CogIcon, CommandLineIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    name: 'Cost Reduction',
    description: 'Cut cloud engineering costs by up to 70% while maintaining enterprise-grade expertise',
    icon: BanknotesIcon,
  },
  {
    name: 'Instant Cloud Support',
    description: 'Access expert cloud engineers 24/7 through Slack/Teams - no hiring needed',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Cloud Engineering',
    description: 'On-demand cloud architecture, implementation, and optimization services',
    icon: CogIcon,
  },
  {
    name: 'Security Operations',
    description: 'Enterprise-grade security monitoring and incident response team at your service',
    icon: ShieldCheckIcon,
  },
  {
    name: 'SRE as a Service',
    description: 'Full Site Reliability Engineering team without the overhead of hiring',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'DevOps Automation',
    description: 'Streamline your operations with our expert DevOps practices and tools',
    icon: CommandLineIcon,
  },
];

const stats = [
  { name: 'Cost Savings', value: '70%' },
  { name: 'Response Time', value: '< 5 min' },
  { name: 'Client Satisfaction', value: '99.9%' },
  { name: 'Cloud Experts', value: '200+' },
];

const integrations = [
  { 
    name: 'Slack', 
    logo: '/slack-logo.svg',
    color: '#E01E5A',
    description: 'Instant support via Slack channels'
  },
  { 
    name: 'Microsoft Teams', 
    logo: '/teams-logo.svg',
    color: '#5059C9',
    description: 'Seamless Teams integration'
  },
  { 
    name: 'Outlook', 
    logo: '/outlook-logo.svg',
    color: '#0078D4',
    description: 'Email-based support option'
  }
];

const solutions = [
  {
    name: 'Cost Reduction',
    description: 'Cut cloud engineering costs by up to 70% while maintaining enterprise-grade expertise',
    icon: BanknotesIcon,
  },
  {
    name: 'Instant Cloud Support',
    description: 'Access expert cloud engineers 24/7 through Slack/Teams - no hiring needed',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Cloud Engineering',
    description: 'On-demand cloud architecture, implementation, and optimization services',
    icon: CogIcon,
  },
  {
    name: 'Security Operations',
    description: 'Enterprise-grade security monitoring and incident response team at your service',
    icon: ShieldCheckIcon,
  },
  {
    name: 'SRE as a Service',
    description: 'Full Site Reliability Engineering team without the overhead of hiring',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'DevOps Automation',
    description: 'Streamline your operations with our expert DevOps practices and tools',
    icon: CommandLineIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        >
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 leading-tight mb-8"
            >
              Your Cloud Team, One Message Away
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-6"
            >
              Expert cloud engineering at 70% less cost than in-house teams
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto"
            >
              Access our expert cloud team through Slack or Teams at a fraction of the cost
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-lg bg-primary px-8 py-4 text-lg sm:text-xl font-semibold text-white shadow-lg hover:bg-primary/90 focus-visible:outline-primary transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Calculate Your Savings
              </Link>
              <Link 
                to="/docs/integration" 
                className="w-full sm:w-auto text-lg sm:text-xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300 flex items-center justify-center"
              >
                View Integration Guide <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Integration Platforms */}
      <div className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Seamless Integration with Your Workflow
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Add Polteck to your workspace in under 5 minutes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {integrations.map((integration) => (
                <motion.div
                  key={integration.name}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${integration.color}15` }}
                    >
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="h-10 w-10"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: integration.color }}>
                      {integration.name}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {integration.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Providers Section */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted Cloud Providers
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Deep expertise across major cloud platforms
            </p>
            <div className="mt-8 flex justify-center items-center space-x-12">
              {[
                { name: 'AWS', logo: '/aws-logo.svg', color: '#FF9900' },
                { name: 'Google Cloud', logo: '/gcp-logo.svg', color: '#4285F4' },
                { name: 'Azure', logo: '/azure-logo.svg', color: '#0089D6' }
              ].map((provider) => (
                <motion.div
                  key={provider.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center"
                >
                  <div 
                    className="w-24 h-24 mb-3 flex items-center justify-center rounded-xl shadow-lg"
                    style={{ backgroundColor: `${provider.color}10` }}
                  >
                    <img
                      src={provider.logo}
                      alt={provider.name}
                      className="h-14 w-14"
                    />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{provider.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cloud expertise for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
                className="relative flex flex-col bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold text-gray-900 mb-4">
                  <solution.icon
                    className="h-8 w-8 text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  {solution.name}
                </dt>
                <dd className="text-gray-600 text-lg flex-grow mb-4">
                  {solution.description}
                </dd>
                <Link
                  to={`/solutions/${solution.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Calculator Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Calculate Your Cloud Team Savings
              </h2>
              <p className="text-xl text-gray-600">
                See how much you can save by switching to Polteck
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={(e) => {
                e.preventDefault();
                const engineers = Number(e.target.engineers.value);
                const salary = Number(e.target.salary.value);
                const benefits = Number(e.target.benefits.value);
                const totalCost = engineers * (salary + benefits);
                const savings = totalCost * 0.7;
                document.getElementById('totalCost').textContent = totalCost.toLocaleString();
                document.getElementById('savings').textContent = savings.toLocaleString();
              }} className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Cloud Engineers
                  </label>
                  <input 
                    name="engineers"
                    type="number" 
                    min="1"
                    required
                    placeholder="Enter number of engineers"
                    className="w-full rounded-md border border-gray-300 py-2 px-3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Annual Salary per Engineer ($)
                  </label>
                  <input 
                    name="salary"
                    type="number" 
                    min="0"
                    step="1000"
                    required
                    placeholder="e.g., 150000"
                    className="w-full rounded-md border border-gray-300 py-2 px-3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Annual Costs per Engineer ($)
                  </label>
                  <input 
                    name="benefits"
                    type="number" 
                    min="0"
                    step="1000"
                    required
                    placeholder="Benefits, tools, training, etc."
                    className="w-full rounded-md border border-gray-300 py-2 px-3"
                  />
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Total Current Annual Cost</div>
                      <div className="text-2xl font-bold text-gray-900">$<span id="totalCost">0</span></div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Estimated Annual Savings with Polteck</div>
                      <div className="text-2xl font-bold text-primary">$<span id="savings">0</span></div>
                      <div className="text-sm text-gray-600 mt-1">70% average cost reduction</div>
                    </div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-primary/90 transition-all duration-300"
                >
                  Calculate Savings
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Products
            </h2>
            <div className="max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl p-8 shadow-lg border border-primary/10"
              >
                <div className="flex items-center justify-center mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  CloudTrim IA
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Revolutionary AI-powered cloud cost optimization platform
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                    AI-Powered Optimization
                  </span>
                  <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                    Automated Cost Savings
                  </span>
                  <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
                    Intelligent Monitoring
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16 sm:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-base sm:text-lg font-semibold text-primary">
              Complete Cloud Solution
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Everything your cloud team does, for less
            </p>
            <p className="mt-4 sm:mt-6 text-xl text-gray-600">
              Get instant access to cloud expertise without the overhead of hiring and managing a team
            </p>
          </motion.div>
          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex flex-col bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  <dt className="flex items-center gap-x-3 text-xl font-semibold text-gray-900 mb-4">
                    <feature.icon
                      className="h-8 w-8 text-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="text-gray-600 text-lg flex-grow">
                    {feature.description}
                  </dd>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-gray-900 to-primary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Companies Choose Polteck
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Reduce costs and improve cloud operations with our expert team
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
                >
                  <dt className="text-lg font-semibold text-gray-300 mb-2">
                    {stat.name}
                  </dt>
                  <dd className="text-4xl font-bold text-white">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 rounded-2xl sm:rounded-3xl px-8 py-16 sm:py-20 sm:px-12 text-center"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to reduce your cloud costs?
              </h2>
              <p className="text-xl text-gray-100 mb-10">
                Join companies saving up to 70% on cloud engineering costs with Polteck
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto rounded-lg bg-white px-8 py-4 text-xl font-semibold text-gray-900 shadow-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Saving Today
                  </Link>
                </motion.div>
                <Link 
                  to="/case-studies" 
                  className="text-xl font-semibold text-white hover:text-gray-200 transition-colors duration-300"
                >
                  View Success Stories <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 backdrop-blur-3xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
