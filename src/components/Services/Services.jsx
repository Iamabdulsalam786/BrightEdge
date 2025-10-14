import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  HiRocketLaunch, 
  HiMegaphone, 
  HiChartBar, 
  HiPencilSquare, 
  HiDevicePhoneMobile,
  HiMagnifyingGlass,
  HiArrowRight,
  HiCheckBadge
} from 'react-icons/hi2';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: <HiMegaphone className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across all major social platforms with data-driven campaigns that convert.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics'],
      color: 'from-blue-500 to-cyan-500',
      process: '01',
      popular: false
    },
    {
      id: 2,
      icon: <HiMagnifyingGlass className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Dominate search rankings and drive qualified organic traffic with comprehensive SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
      color: 'from-purple-500 to-pink-500',
      process: '02',
      popular: true
    },
    {
      id: 3,
      icon: <HiRocketLaunch className="w-8 h-8" />,
      title: 'PPC Campaigns',
      description: 'Maximize ROI with laser-targeted pay-per-click advertising campaigns across all major platforms.',
      features: ['Campaign Setup', 'Ad Copywriting', 'A/B Testing', 'Conversion Tracking'],
      color: 'from-orange-500 to-red-500',
      process: '03',
      popular: false
    },
    {
      id: 4,
      icon: <HiPencilSquare className="w-8 h-8" />,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives meaningful engagement.',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Email Marketing'],
      color: 'from-green-500 to-emerald-500',
      process: '04',
      popular: false
    },
    {
      id: 5,
      icon: <HiDevicePhoneMobile className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Design and develop lightning-fast, responsive websites that convert visitors into customers.',
      features: ['Custom Design', 'E-commerce', 'CMS Integration', 'Mobile First'],
      color: 'from-indigo-500 to-blue-500',
      process: '05',
      popular: true
    },
    {
      id: 6,
      icon: <HiChartBar className="w-8 h-8" />,
      title: 'Analytics & Strategy',
      description: 'Make data-driven decisions with comprehensive analytics and strategic insights.',
      features: ['Data Analysis', 'Market Research', 'Competitor Analysis', 'Growth Strategy'],
      color: 'from-teal-500 to-cyan-500',
      process: '06',
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold mb-4 shadow-lg"
          >
            <HiCheckBadge className="w-4 h-4" />
            <span>Our Services</span>
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight"
          >
            Services That <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Drive Results</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Comprehensive digital marketing solutions designed to transform your brand 
            and deliver measurable ROI across every channel.
          </motion.p>
        </div>

        {/* Services Grid - Clean & Organized */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full bg-white rounded-2xl p-8 border-2 border-slate-100 transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:-translate-y-2">
                
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                    POPULAR
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Process Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {service.icon}
                    </div>
                    <span className="text-4xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors">
                      {service.process}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mr-3 flex-shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn w-full justify-center`}
                  >
                    <span>Get Started</span>
                    <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: '500+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
            { number: '98%', label: 'Client Satisfaction', color: 'from-purple-500 to-pink-500' },
            { number: '150+', label: 'Team Members', color: 'from-orange-500 to-red-500' },
            { number: '24/7', label: 'Support Available', color: 'from-green-500 to-emerald-500' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="text-center p-6 bg-white rounded-xl border-2 border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a custom strategy that drives real results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <span>Get Free Consultation</span>
                <HiArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
