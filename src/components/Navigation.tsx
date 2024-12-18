import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, CogIcon, ShieldCheckIcon, CloudIcon, ServerIcon, BanknotesIcon, SparklesIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const navigation = [
  {
    name: 'Solutions',
    href: '/solutions',
    children: [
      {
        name: 'Cloud Engineering',
        description: 'Expert cloud infrastructure design and implementation',
        href: '/solutions/cloud-engineering',
        icon: CloudIcon,
      },
      {
        name: 'Security Operations',
        description: 'Comprehensive security monitoring and management',
        href: '/solutions/security-operations',
        icon: ShieldCheckIcon,
      },
      {
        name: 'SRE as a Service',
        description: 'Reliable site reliability engineering support',
        href: '/solutions/sre-service',
        icon: ServerIcon,
      },
      {
        name: 'DevOps Automation',
        description: 'Streamline your development and operations',
        href: '/solutions/devops-automation',
        icon: CogIcon,
      },
      {
        name: 'Cost Reduction',
        description: 'Optimize your cloud spending effectively',
        href: '/solutions/cost-reduction',
        icon: BanknotesIcon,
      },
    ],
  },
  {
    name: 'Products',
    href: '/products',
    children: [
      {
        name: 'CloudTrim IA',
        description: 'AI-powered cloud cost optimization',
        href: '/products/cloudtrim-ia',
        icon: SparklesIcon,
        badge: 'Coming Soon',
      },
    ],
  },
  { 
    name: 'News',
    href: '/news',
    icon: DocumentTextIcon,
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl border-b border-gray-100">
            <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center flex-shrink-0">
                <Link
                  to="/"
                  className="group flex items-center space-x-2"
                >
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center transform transition duration-200 group-hover:scale-105">
                      <span className="text-2xl font-bold text-white">P</span>
                    </div>
                    <h1 className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      Polteck
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-10">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className="inline-flex items-center text-[15px] font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                      {item.children && (
                        <ChevronDownIcon className="ml-1 h-4 w-4 text-gray-500 group-hover:text-primary transition-colors duration-200" />
                      )}
                    </Link>
                    
                    {item.children && (
                      <div className="absolute left-1/2 z-50 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative bg-white">
                            <div className="p-6">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="group/item flex items-start rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200"
                                >
                                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 group-hover/item:bg-primary/10 transition-colors duration-200">
                                    <child.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-[15px] font-medium text-gray-900 group-hover/item:text-primary transition-colors duration-200">
                                      {child.name}
                                      {child.badge && (
                                        <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                          {child.badge}
                                        </span>
                                      )}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">{child.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-[15px] font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>

              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-4 pb-3 pt-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Disclosure.Button
                      as={Link}
                      to={item.href}
                      className="block w-full rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Disclosure.Button>
                    {item.children && (
                      <div className="ml-3 space-y-1">
                        {item.children.map((child) => (
                          <Disclosure.Button
                            key={child.name}
                            as={Link}
                            to={child.href}
                            className="group flex items-center rounded-lg p-2 text-[15px] font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          >
                            <child.icon
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            {child.name}
                            {child.badge && (
                              <span className="ml-auto inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                {child.badge}
                              </span>
                            )}
                          </Disclosure.Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-6 px-3">
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-[15px] font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
