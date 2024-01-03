import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const PostCard = () => {
  return (
    <div className='flex flex-col gap-10 mb-5'>
      <div className='flex relative'>
        <div className='w-[90%] relative'>
                <img src="./BlogDemo.jpeg" style={{ objectFit: 'cover'}}/>
        </div>
        {/* Date */}
        <div className='font-extralight rotate-[270deg] m-auto'>01.01.2024</div>


      </div>

      <div>
        {/* Title */}

        <h1 className='w-[90%] text-2xl font-medium mb-3'>Title</h1>

        {/* Desc */}
        <p className='w-[90%] mmb-5 font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At eligendi voluptatem eius temporibus neque similique, obcaecati vitae natus nam tempora repudiandae quo ullam porro consequatur nulla eos cumque laboriosam repellat!</p>
        {/* <a href="/Blog/Post" className="font-light hover:underline">READ MORE</a> */}
        <div className='pt-4 pb-4'>
            <Link to="/Blog/pageId">
                <Button>READ MORE</Button>
            </Link>
        </div>
      </div>
    </div>
    
  )
}

export default PostCard
