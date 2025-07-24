import React, { useState } from 'react';
import { FaCalendarAlt, FaPhone, FaUser, FaCheckCircle } from 'react-icons/fa';

const BookAppointment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    services: 'General Checkup',
  });

  const services = [
    'General Checkup',
    'Teeth Cleaning',
    'Dental Filling',
    'Root Canal',
    'Teeth Whitening',
    'Orthodontic Consultation',
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setActiveStep(prev => prev + 1);
  const prevStep = () => setActiveStep(prev => prev - 1);

  const confirmAppointment = () => {
    // You can send data to backend here if needed
    nextStep(); // Go to success screen
  };

  return (
    <div id='book' className='scroll-mt-20 min-h-screen bg-gradient-to-br from-sky-50 py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-3'>Book Your Perfect Smile</h1>
          <p className='text-lg font-bold text-gray-600'>Your journey to a healthier smile starts here.</p>
        </div>

        {/* Progress Steps */}
        <div className='mb-12'>
          <div className='relative'>
            <div className='absolute top-1/2 left-0 h-2 bg-gray-100 rounded-full z-0 w-full'></div>
            <div
              className='absolute top-1/2 left-0 h-2 bg-gradient-to-r from-sky-500 to-sky-400 rounded-full z-10 transition-all duration-500'
              style={{ width: `${(activeStep - 1) * 33.33}%` }}
            ></div>

            <div className='flex justify-between relative z-20'>
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className='flex flex-col items-center cursor-pointer'
                  onClick={() => activeStep > step && setActiveStep(step)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center
                    ${activeStep >= step
                      ? 'bg-gradient-to-br from-sky-500 to-sky-500 text-white shadow-lg'
                      : 'bg-white text-gray-300 border-2 border-gray-200'}
                    transition-all duration-300 font-bold mb-2`}>
                    {activeStep > step ? (
                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                      </svg>
                    ) : (
                      step
                    )}
                  </div>
                  <span className={`text-xs font-medium ${activeStep >= step ? 'text-sky-600' : 'text-gray-400'} transition-colors`}>
                    {['Your Info', 'Schedule', 'Confirm', 'Done'][step - 1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className='bg-white rounded-3xl shadow-xl overflow-hidden'>
          {activeStep === 1 && (
            <div className='p-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                <FaUser className='mr-3 text-sky-500' />
                Personal Information
              </h2>
              <div className='space-y-6'>
                <div className='relative'>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Full name'
                    className='w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition'
                    required
                  />
                  <FaUser className='absolute left-4 top-4 text-gray-400' />
                </div>
                <div className='relative'>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder='Phone Number'
                    className='w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition'
                    required
                  />
                  <FaPhone className='absolute left-4 top-4 text-gray-400' />
                </div>
              </div>
              <div className='mt-6 text-right'>
                <button onClick={nextStep} className='bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-xl'>Next</button>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className='p-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
                <FaCalendarAlt className='mr-3 text-sky-500' />
                Appointment Details
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='relative'>
                  <input
                    type='date'
                    name='date'
                    value={formData.date}
                    onChange={handleInputChange}
                    className='w-full p-4 pl-12 border-2 border-gray-200 rounded-xl transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none'
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <FaCalendarAlt className='absolute left-4 top-4 text-gray-400' />
                </div>
                <div className='relative'>
                  <select
                    name='time'
                    value={formData.time}
                    onChange={handleInputChange}
                    className='w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-sky-200 outline-none appearance-none transition'
                    required
                  >
                    <option value="">Select Time</option>
                    {availableTimes.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='mt-6 text-right'>
                <button onClick={prevStep} className='mr-4 text-sky-500 font-semibold'>Back</button>
                <button onClick={nextStep} className='bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-xl'>Next</button>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className='p-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>Confirm Your Details</h2>
              <ul className='space-y-4 text-gray-700'>
                <li><strong>Name:</strong> {formData.name}</li>
                <li><strong>Phone:</strong> {formData.phone}</li>
                <li><strong>Date:</strong> {formData.date}</li>
                <li><strong>Time:</strong> {formData.time}</li>
              </ul>
              <div className='mt-6 text-right'>
                <button onClick={prevStep} className='mr-4 text-sky-500 font-semibold'>Back</button>
                <button onClick={confirmAppointment} className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl'>Confirm</button>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className='p-12 text-center'>
              <FaCheckCircle className='text-green-500 text-6xl mx-auto mb-6' />
              <h2 className='text-3xl font-bold text-gray-800 mb-4'>Appointment Booked!</h2>
              <p className='text-lg text-gray-600 mb-2'>Thank you, {formData.name}. We look forward to seeing you on {formData.date} at {formData.time}.</p>
              <p className='text-gray-500'>We’ll contact you shortly for confirmation.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
