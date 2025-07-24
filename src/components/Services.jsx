import { FaSmileBeam, FaTooth, FaXRay } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaTooth className="w-10 h-10 text-sky-500" />,
    title: "Tooth Restoration",
    description: "Repair damaged or decayed teeth with advanced restoration techniques for a healthier smile.",
  },
  {
    icon: <GiToothbrush className="w-10 h-10 text-green-500" />,
    title: "Oral Hygiene Counseling",
    description: "Personalized guidance on brushing, flossing, and oral care to maintain long-term dental health.",
  },
  {
    icon: <FaSmileBeam className="w-10 h-10 text-yellow-500" />,
    title: "Smile Makeover",
    description: "Enhance your smile’s appearance with cosmetic treatments like whitening, veneers, and contouring.",
  },
  {
    icon: <FaXRay className="w-10 h-10 text-purple-500" />,
    title: "Digital X-Ray Diagnosis",
    description: "High-resolution dental imaging to detect hidden issues and plan precise treatments.",
  },
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-20 py-24 bg-gradient-to-br from-white-50 to-sky-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-900 mb-4">Our Dental Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto"></p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-sky-100 hover:border-sky-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-sky-800 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
