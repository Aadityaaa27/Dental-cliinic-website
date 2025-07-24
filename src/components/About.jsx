import React from 'react'
import doctor from '../assets/doctor.webp';
import {FaUserMd} from "react-icons/fa"

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 py-20 bg-sky-50">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img src={doctor} alt="Dental Clinic" className="w-80 lg:w-[420px] rounded-full shadow-md" /> 
        </div>
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className='flex items-center justify-center lg:justify-start space-x-2'>
            <FaUserMd className='text-sky-600 w-7 h-7' /> 
            <h2 className="text-3xl font-bold text-sky-900 ml-3">About Our Clinic

            </h2>
            
            
          </div>
          <p className='text-gray-700 text-lg leading-relaxed'>
            Welcome to our dental clinic, where your smile is our priority. With over 2+ years of experience, we provide comprehensive dental care using the latest technology and techniques. Our team of skilled professionals is dedicated to ensuring your comfort and satisfaction with every visit.
          </p>
          <p className='text-gray-700 text-lg leading-relaxed'>
            From routine check-ups to advanced cosmetic procedures, we offer a wide range of services tailored to meet your individual needs. Our state-of-the-art facility is designed to create a welcoming and relaxing environment for all our patients.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About
