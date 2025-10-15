import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const About = () => {
  const features = [
    {
      title: 'Experienced Team',
      description: '5+ years of expertise in digital marketing and development',
    },
    {
      title: 'Data-Driven Approach',
      description: 'Every decision backed by analytics and proven strategies',
    },
    {
      title: 'Transparent Communication',
      description: 'Regular updates and clear reporting throughout the project',
    },
    {
      title: 'Proven Results',
      description: '98% client satisfaction rate with measurable outcomes',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-animated rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-center text-white relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 glass rounded-full flex items-center justify-center backdrop-blur-sm"
                  >
                    <span className="text-3xl sm:text-4xl lg:text-6xl">💡</span>
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Innovation Meets Excellence</h3>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg">
                    We combine creativity with data to deliver exceptional results
                  </p>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 card-gradient p-3 sm:p-4 lg:p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-primary">150+</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Projects Completed</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 card-gradient p-3 sm:p-4 lg:p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-secondary">98%</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gradient-accent text-white rounded-full text-sm font-semibold mb-4 shadow-lg"
            >
              About Us
            </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-800">
              Why Choose <span className="text-gradient">BrightEdge?</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              We're not just another agency. We're your strategic partner in digital transformation, 
              committed to delivering measurable results that drive real business growth.
            </p>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3 sm:gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                      <HiCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 sm:mt-8 lg:mt-10"
            >
              <a
                href="#contact"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto inline-block text-center"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

