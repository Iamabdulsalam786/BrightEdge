import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const MobileMenu = ({ navLinks, onClose, handleNavClick }) => {
  const menuVariants = {
    hidden: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
    visible: {
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut', staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl z-50 overflow-y-auto"
      >
        <div className="flex flex-col h-full p-8">
          <nav className="flex-1 pt-20">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      onClose();
                    }}
                    className="block text-2xl font-semibold text-slate-800 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={itemVariants} className="mt-10">
              <a
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, '#contact');
                  onClose();
                }}
                className="block w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg text-center hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </a>
            </motion.div>
          </nav>

          <motion.div variants={itemVariants} className="border-t border-slate-200 pt-6">
            <p className="text-sm font-medium text-slate-500 mb-4">Follow Us</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;

