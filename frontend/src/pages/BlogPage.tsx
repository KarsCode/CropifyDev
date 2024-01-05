import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard/PostCard'
import { VITE_API_URL } from '../setupEnv';

const BlogPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${VITE_API_URL}/Blogs`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []); 

    console.log(data);
    






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
