import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard/PostCard'
import { VITE_API_URL } from '../setupEnv';
import { Button } from '../components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { MutatingDots } from 'react-loader-spinner';

const BlogPage = () => {
    const [data, setData] = useState<DocumentInterface[]|null>(null);

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
    
    interface DocumentInterface {
          title: string;
          description: string;
          article: string;
          date: string;
          image: string;
          blog_id:number;
      }

      interface PostCardProps {
        document: DocumentInterface;
      }   


    if(!data){
        return (
          <div className="mt-64 flex flex-col items-center justify-center">
          <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="9.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />

        </div>
        );
      }


    if(data){
        return (
            <div>
                <div className='pb-5 text-6xl font-bold text-center'>The Future of Farming. </div>
                <div className='flex flex-wrap pt-10 justify-around'>
                    {data &&
                        data.map((document:DocumentInterface, index:number) => (
                            <div key={index} className='flex flex-col justify-between sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%]'>
                                <PostCard document={document} />
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

export default BlogPage
