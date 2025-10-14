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
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-12 shadow-2xl">
                <div className="text-center text-white">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  >
                    <span className="text-6xl">💡</span>
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">Innovation Meets Excellence</h3>
                  <p className="text-white/90 text-lg">
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
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">150+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary">98%</div>
                  <div className="text-slate-600">Satisfaction</div>
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
              className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4"
            >
              About Us
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Choose BrightEdge?
            </h2>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We're not just another agency. We're your strategic partner in digital transformation, 
              committed to delivering measurable results that drive real business growth.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <HiCheckCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
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
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

