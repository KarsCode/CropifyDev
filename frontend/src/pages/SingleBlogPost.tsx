import React from 'react'

const SingleBlogPost = () => {
  return (
    <div className='flex gap-24'>
      {/* ImageContainer */}
      <div className='relative h-[calc(100vh-200px)] hidden sm:hidden md:hidden lg:block'>
        <img src ="/BlogDemo.jpeg" alt ="" className='object-cover w-[100%] h-[100%]'/>
      </div>



      {/* TextContainer */}
      <div className='flex flex-col gap-12'>
        <h1 className='text-6xl font-semibold'>Title</h1>
        <div className='flex gap-5'>
          <div className='flex flex-col gap-2'>
              <span className='text-crophover font-bold underline'>Author</span>
              <span>CropifyTimes</span>
          </div>
          <div className='flex flex-col gap-2'>
              <span className='text-crophover font-bold underline'>Published</span>
              <span>01.01.2024</span>
          </div>
        </div>
        <div className='text-lg'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut beatae nostrum, assumenda eveniet omnis modi neque culpa a dolorem voluptate, praesentium expedita! Dolorum at est voluptate, obcaecati voluptatibus ullam!
        </div>

      </div>

      
    </div>
  )
}

export default SingleBlogPost
