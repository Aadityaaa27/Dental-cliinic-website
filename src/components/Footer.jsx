import React, { useState } from 'react';
import { FaInstagram, FaMapMarkedAlt, FaPhone, FaTelegram, FaTooth, FaWhatsapp, FaRegClock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socialLinks = [
  { icon: <FaInstagram className="text-xl" />, href: '#' },
  { icon: <FaWhatsapp className="text-xl" />, href: '#' },
  { icon: <FaTelegram className="text-xl" />, href: '#' },
];

const clinicHours = [
  { day: 'Sunday-Thursday', time: '9AM-8PM' },
  { day: 'Friday', time: '4AM-9PM' },
  { day: 'Saturday', time: 'Closed' },
];

const contactInfo = [
  {
    icon: <FaPhone className="mr-4 text-white/70" />,
    text: <a href="#" className="hover:text-sky-300 transition-colors">+1(234)567-89</a>,
  },
  {
    icon: <MdOutlineEmail className="mr-4 text-white/70" />,
    text: <a href="#" className="hover:text-sky-300 transition-colors">info234@gmail.com</a>,
  },
  {
    icon: <FaMapMarkedAlt className="mr-4 text-white/70" />,
    text: <span>123 Dental Avenue, Jaipur, Rajasthan</span>,
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }
    setShowPopup(true);
    setEmail('');
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-950 text-white pt-16 pb-12 relative overflow-hidden">
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed bottom-5 right-5 bg-sky-600 text-white px-6 py-4 rounded-xl shadow-lg transition-all duration-500 z-50">
          🎉 Subscribed successfully!
          <button className="ml-4 text-white/70 hover:text-white" onClick={() => setShowPopup(false)}>✖</button>
        </div>
      )}

      <div className="flex flex-col items-center mb-14">
        <div className="flex items-center mb-6">
          <div className="bg-white/20 p-3 rounded-full mr-4">
            <FaTooth className="text-2xl text-sky-300" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-200">
            BrightSmile
          </h2>
        </div>

        <div className="flex space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:translate-y-1"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20">
        {/* Clinic Hours */}
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
          <h3 className="text-xl font-semibold mb-5 flex items-center">
            <FaRegClock className="mr-3 text-sky-300" />
            Clinic Hours
          </h3>
          <ul className="space-y-3">
            {clinicHours.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-white/70">{item.day}</span>
                <span>{item.time}</span>
              </li>
            ))}
            <li className="pt-3 mt-3 border-t border-white/10 text-sky-300 font-medium">
              Emergency services available 24/7
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
          <h3 className="text-xl font-semibold mb-5 flex items-center">
            <FaPhone className="mr-3 text-sky-300" />
            Contact Us
          </h3>
          <ul className="space-y-4">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start">
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
          <h3 className="text-xl font-semibold mb-3">Dental Tips Newsletter</h3>
          <p className="text-white/70 mb-5">
            Subscribe to receive oral health tips and special offers
          </p>
          <form className="flex" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-white/10 border border-white/20 text-white px-5 py-3 rounded-r-none rounded-l-lg focus:outline-none focus:ring-sky-300 w-full placeholder-white/50"
            />
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-400 text-blue-900 font-medium px-5 py-3 rounded-l-none rounded-r-lg transition-colors flex items-center"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="pt-12 px-8 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/50 text-sm mb-3 md:mb-0">
          &copy; {new Date().getFullYear()} Happy Smile Clinic. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-white/50 hover:text-sky-300 text-sm transition-colors">
            Terms of Services
          </a>
          <a href="#" className="text-white/50 hover:text-sky-300 text-sm transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
