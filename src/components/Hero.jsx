import { CalendarCheck } from 'lucide-react';
import clinic from '../assets/clinic.webp';
import React from 'react';

const Hero = () => {
  return (
    <section id='home' className='scroll-m-20 bg-sky-50 py-16'>
      <div className='container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
        <div className='max-w-xl text-center lg:text-left space-y-6'>
          <h1 className='text-xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'>
            Creating Confident Smiles 🤩<br />Every Single Day
          </h1>
          <p className='text-gray-600 text-sm lg:text-lg'>
            Your smile is our priority. We bring expertise, care, and confidence together for a brighter tomorrow.
          </p>
          <a
            href="#book"
            className='inline-flex items-center bg-fuchsia-300 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-sky-500 transition text-base font-medium mt-10'>
            <CalendarCheck className='w-5 h-6 mr-2' />
            Book Appointment
          </a>
        </div>
        <div className='flex justify-center'>
          <img src={clinic} alt="Dental" className='w-80 lg:w-[429px] rounded-4xl' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
