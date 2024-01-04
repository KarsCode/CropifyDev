import React from 'react'
import { LoginForm } from '../components/ContactForm/LoginForm'

const LoginPage = () => {
  return (
    <div className='flex justify-center'>
    {/* Carousel */}
    <div className='flex lg:w-1/2 relative mb-24  items-center justify-center border-2 border-border p-6'>
      <div className='w-3/5 font-bold text-4xl  '>
      <LoginForm/>
      </div>
    </div>
  </div>
  )
}

export default LoginPage
