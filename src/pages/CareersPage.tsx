import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const positions = [
  {
    id: 1,
    title: 'Senior Cloud Engineer',
    type: 'Full-time',
    location: 'San Francisco, CA or Remote',
    department: 'Engineering',
    description: 'Lead and develop cloud infrastructure solutions for enterprise clients.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '5+ years of experience with cloud platforms (AWS, GCP, Azure)',
      'Strong knowledge of containerization and orchestration',
      'Experience with infrastructure as code'
    ]
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    type: 'Full-time',
    location: 'New York, NY or Remote',
    department: 'AI Solutions',
    description: 'Develop and implement AI/ML solutions for our enterprise clients.',
    requirements: [
      "Master's degree in Computer Science, AI, or related field",
      '3+ years of experience in ML/AI development',
      'Strong Python programming skills',
      'Experience with deep learning frameworks'
    ]
  },
  {
    id: 3,
    title: 'Technical Support Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Customer Success',
    description: 'Provide technical support for our cloud and AI solutions.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '3+ years of technical support experience',
      'Strong problem-solving skills',
      'Excellent communication skills'
    ]
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Austin, TX or Remote',
    department: 'Engineering',
    description: 'Build and maintain CI/CD pipelines and infrastructure automation.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '3+ years of DevOps experience',
      'Experience with CI/CD tools',
      'Strong scripting skills'
    ]
  }
];

const perks = [
  {
    name: 'Competitive Salary',
    description: 'We offer top-tier compensation packages to attract the best talent.'
  },
  {
    name: 'Remote Work',
    description: 'Work from anywhere in the world with our flexible remote policy.'
  },
  {
    name: 'Health Benefits',
    description: 'Comprehensive health, dental, and vision coverage for you and your family.'
  },
  {
    name: 'Learning Budget',
    description: 'Annual budget for conferences, courses, and professional development.'
  },
  {
    name: 'Stock Options',
    description: 'Equity in a fast-growing technology company.'
  },
  {
    name: 'Unlimited PTO',
    description: 'Take the time you need to recharge and stay productive.'
  }
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Help us build the future of cloud computing and artificial intelligence.
              We're looking for passionate individuals to join our growing team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Perks Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Benefits</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Work at Polteck?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer competitive compensation and benefits to help you do your best work.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {perk.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{perk.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Open Positions */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Careers</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Open Positions
          </p>
        </div>
        <div className="mt-16 space-y-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                  <div className="mt-2 text-sm text-gray-500">
                    <span>{position.type}</span> · <span>{position.location}</span> ·{' '}
                    <span>{position.department}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <Link
                    to={`/careers/${position.id}`}
                    className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-600">{position.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">Requirements:</h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                    {position.requirements.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 pb-24">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Don't see the right position?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            We're always looking for talented individuals to join our team. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/careers/general"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Submit Resume
            </Link>
            <Link to="/company" className="text-sm font-semibold leading-6 text-white">
              Learn About Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
