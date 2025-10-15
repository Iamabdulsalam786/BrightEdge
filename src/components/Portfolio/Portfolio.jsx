import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-primary text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg"
          >
            <span>✨</span>
            <span>Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-800"
          >
            Our <span className="text-gradient">Latest Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed"
          >
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {[
            {
              title: 'E-Commerce Platform',
              description: 'Complete digital transformation for retail brand with 300% sales increase',
              icon: '🛒',
              gradient: 'from-blue-500 to-purple-500',
              stats: '+300% Sales'
            },
            {
              title: 'SaaS Dashboard',
              description: 'Modern analytics dashboard for B2B SaaS with real-time insights',
              icon: '📊',
              gradient: 'from-green-500 to-blue-500',
              stats: '+500% Users'
            },
            {
              title: 'Healthcare App',
              description: 'Patient management system with telemedicine capabilities',
              icon: '🏥',
              gradient: 'from-pink-500 to-red-500',
              stats: '+200% Engagement'
            },
            {
              title: 'FinTech Solution',
              description: 'Secure payment processing platform with advanced security',
              icon: '💳',
              gradient: 'from-yellow-500 to-orange-500',
              stats: '+400% Transactions'
            },
            {
              title: 'Education Portal',
              description: 'Interactive learning management system for online education',
              icon: '🎓',
              gradient: 'from-indigo-500 to-purple-500',
              stats: '+350% Students'
            },
            {
              title: 'Real Estate Platform',
              description: 'Property listing platform with virtual tour capabilities',
              icon: '🏠',
              gradient: 'from-teal-500 to-green-500',
              stats: '+500% Listings'
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="card-gradient p-4 sm:p-6 group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-full h-32 sm:h-40 lg:h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-3 sm:mb-4 flex items-center justify-center shadow-lg`}>
                <span className="text-2xl sm:text-3xl lg:text-4xl">{project.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-3 leading-relaxed">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary-600">{project.stats}</span>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
