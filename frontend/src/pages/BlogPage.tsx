import React from 'react'
import PostCard from '../components/PostCard/PostCard'

const BlogPage = () => {
  return (
    <div>
        <div className='pb-5 text-6xl font-bold text-center'>The Future of Farming. </div>
        <div className='flex flex-wrap pt-5'>
            <div className='sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%]'>
                <PostCard/>
            </div>
            <div className='sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%]'>
                <PostCard/>
            </div>
            <div className='sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%]'>
                <PostCard/>
            </div>
            <div className='sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%]'>
                <PostCard/>
            </div>
            <div className='sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%]'>
                <PostCard/>
            </div>
            <div className='sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%]'>
                <PostCard/>
            </div>   
        
        </div>
    </div>
  )
}

export default BlogPage
