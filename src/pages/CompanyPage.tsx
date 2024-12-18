import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { name: 'Founded', value: '2020' },
  { name: 'Employees', value: '500+' },
  { name: 'Countries', value: '30+' },
  { name: 'Customers', value: '2000+' }
];

const values = [
  {
    name: 'Innovation',
    description:
      'We push the boundaries of what\'s possible in cloud computing and artificial intelligence.'
  },
  {
    name: 'Customer Success',
    description:
      'Our customers\' success is our success. We\'re committed to helping businesses thrive in the digital age.'
  },
  {
    name: 'Collaboration',
    description:
      'We believe in the power of teamwork and foster a collaborative environment where ideas can flourish.'
  },
  {
    name: 'Excellence',
    description:
      'We strive for excellence in everything we do, from our technology to our customer service.'
  }
];

const team = [
  {
    name: 'John Smith',
    role: 'Chief Executive Officer',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'VP of Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  },
  {
    name: 'Emily Davis',
    role: 'VP of Product',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
  }
];

export default function CompanyPage() {
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
              About Polteck
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're on a mission to transform businesses through innovative cloud and AI solutions.
              Founded in 2020, we've grown to become a leading provider of enterprise technology solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Stand For
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {value.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Leadership
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {team.map((person, index) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 pb-24">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join Us in Shaping the Future
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            We're always looking for talented individuals who share our vision and values.
            Explore career opportunities at Polteck.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/careers"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              View Careers
            </Link>
            <Link to="/contact" className="text-sm font-semibold leading-6 text-white">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
