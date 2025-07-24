import React, { useState } from 'react';
import { Hospital, PhoneCall, Menu, X } from 'lucide-react';

const navList = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#tips', label: 'Tips' },
  
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    question: '',
    type: 'General',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    
    setIsModalOpen(false);
    setShowToast(true);

    
    setFormData({ name: '', question: '', type: 'General' });

   
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      
      <header className='scroll-mt-20 bg-white shadow-md sticky top-0 z-50'>
        <div className='container mx-auto flex items-center justify-between p-4 lg:p-8'>
          <div className='flex items-center space-x-2'>
            <Hospital className="w-8 h-8 text-sky-600" />
            <span className='text-xl font-bold text-sky-600'>Happy Dental Clinic</span>
          </div>

          
          <nav className='hidden md:flex space-x-6 text-gray-700 font-medium'>
            {navList.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className='hover:text-sky-600 transition-colors duration-200'
              >
                {link.label}
              </a>
            ))}
          </nav>

          
          <div className='hidden md:flex items-center space-x-6'>
            {/* <PhoneCall className="text-sky-600" /> */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sky-600 px-4 py-2 rounded-xl hover:bg-sky-700 hover:text-white transition text-sm"
            >
              Ask Any Doubt
            </button>
          </div>

          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-gray-700" /> : <Menu className="text-gray-700" />}
            </button>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className='md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium'>
            {navList.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="block hover:text-sky-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-semibold text-sky-600 mb-4">Ask Your Doubt</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="General">General</option>
                <option value="Appointment">Appointment</option>
                <option value="Treatment">Treatment</option>
              </select>
              <textarea
                name="question"
                placeholder="Type your question here..."
                value={formData.question}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md"
                rows={4}
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-sky-600 text-white hover:bg-sky-700 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

     
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg z-50">
          
        </div>
      )}
    </>
  );
};

export default Header;
