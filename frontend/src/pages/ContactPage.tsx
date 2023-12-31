import React from 'react'
import { ProfileForm } from '../components/ContactForm/ContactForm'

const ContactPage = () => {
  return (
    <div className='flex gap-48'>
    {/* Title */}
    <div className='flex flex-col gap-8 w-1/2'>
      <h1 className='text-6xl font-bold'>
        Contact Us.
      </h1>

      <p className='text-lg'>
      
            At Cropify, we value your feedback, inquiries, and collaborations. Whether you're a farmer looking to optimize your yield or a business interested in leveraging our agricultural insights, we welcome you to get in touch. Our dedicated team at RAMPage is here to assist you with any questions you may have about our platform, its features, or potential partnerships. Your thoughts matter, and we believe in fostering connections that contribute to the growth and success of agriculture. Drop us a message, and let's cultivate a brighter future together.
      </p>



      <div>
        
        
      
      </div>
    </div>

    {/* Carousel */}
    <div className='hidden lg:flex relative w-1/2 mb-24  items-center justify-center border-2 border-border p-6'>
      <div className='w-3/5 font-bold text-4xl  '>
      <ProfileForm/>
      </div>
    </div>
  </div>
  )
}

export default ContactPage
