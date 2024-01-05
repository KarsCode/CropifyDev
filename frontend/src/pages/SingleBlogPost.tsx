
import React, { useEffect, useState } from 'react'
import { ScrollArea } from '../components/ui/scroll-area'
import { useParams } from 'react-router-dom';
import { VITE_API_URL } from '../setupEnv';


const SingleBlogPost = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${VITE_API_URL}/Blogs/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);
  
  console.log(data);
  return (
    <div className='flex gap-24 h-[calc(100vh-200px)] pb-5'>
      {/* ImageContainer */}
      <div className='w-[20%] hidden sm:hidden md:hidden lg:block'>
        <img src ="/BlogDemo.jpeg" alt ="" className='object-cover w-[100%] h-[100%]'/>
      </div>



      {/* TextContainer */}
      <div className='flex flex-col gap-12 w-[90%]'>
        <h1 className='text-6xl font-semibold'>Title</h1>
        <div className='flex gap-5'>
          <div className='flex flex-col gap-2 text-xl'>
              <span className='text-crophover font-bold underline'>Author</span>
              <span>CropifyTimes</span>
          </div>
          <div className='flex flex-col gap-2 text-xl'>
              <span className='text-crophover font-bold underline'>Published</span>
              <span>01.01.2024</span>
          </div>
        </div>
        <div className='text-xl overflow-auto'>
          <ScrollArea>
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nostrum architecto eum saepe, debitis dolores magnam neque exercitationem ad earum maxime nobis, maiores, asperiores esse natus ipsa doloremque iusto voluptate!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, temporibus explicabo, eaque atque a odio placeat ratione sit molestias minus quo amet assumenda quibusdam eum ut libero quas sed error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur quam necessitatibus id fuga odit doloribus adipisci iusto facere accusamus! Architecto, quam sunt impedit iure id recusandae odio reprehenderit dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aliquid illo nisi voluptatem corrupti! A, doloremque sit consequuntur eos odit, numquam ad porro ipsum minus nobis eaque adipisci, amet quos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, nesciunt! Sequi aut natus vero sunt accusantium quas modi sint doloribus distinctio, cum voluptas omnis molestias, hic, autem corporis ipsam laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quasi molestiae aut nulla quae! Ipsam, distinctio? Esse quia quas eius neque? A possimus numquam atque quibusdam, nam quasi dolores. Ullam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nostrum architecto eum saepe, debitis dolores magnam neque exercitationem ad earum maxime nobis, maiores, asperiores esse natus ipsa doloremque iusto voluptate!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, temporibus explicabo, eaque atque a odio placeat ratione sit molestias minus quo amet assumenda quibusdam eum ut libero quas sed error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur quam necessitatibus id fuga odit doloribus adipisci iusto facere accusamus! Architecto, quam sunt impedit iure id recusandae odio reprehenderit dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aliquid illo nisi voluptatem corrupti! A, doloremque sit consequuntur eos odit, numquam ad porro ipsum minus nobis eaque adipisci, amet quos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, nesciunt! Sequi aut natus vero sunt accusantium quas modi sint doloribus distinctio, cum voluptas omnis molestias, hic, autem corporis ipsam laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quasi molestiae aut nulla quae! Ipsam, distinctio? Esse quia quas eius neque? A possimus numquam atque quibusdam, nam quasi dolores. Ullam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nostrum architecto eum saepe, debitis dolores magnam neque exercitationem ad earum maxime nobis, maiores, asperiores esse natus ipsa doloremque iusto voluptate!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, temporibus explicabo, eaque atque a odio placeat ratione sit molestias minus quo amet assumenda quibusdam eum ut libero quas sed error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur quam necessitatibus id fuga odit doloribus adipisci iusto facere accusamus! Architecto, quam sunt impedit iure id recusandae odio reprehenderit dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aliquid illo nisi voluptatem corrupti! A, doloremque sit consequuntur eos odit, numquam ad porro ipsum minus nobis eaque adipisci, amet quos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, nesciunt! Sequi aut natus vero sunt accusantium quas modi sint doloribus distinctio, cum voluptas omnis molestias, hic, autem corporis ipsam laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quasi molestiae aut nulla quae! Ipsam, distinctio? Esse quia quas eius neque? A possimus numquam atque quibusdam, nam quasi dolores. Ullam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nostrum architecto eum saepe, debitis dolores magnam neque exercitationem ad earum maxime nobis, maiores, asperiores esse natus ipsa doloremque iusto voluptate!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, temporibus explicabo, eaque atque a odio placeat ratione sit molestias minus quo amet assumenda quibusdam eum ut libero quas sed error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur quam necessitatibus id fuga odit doloribus adipisci iusto facere accusamus! Architecto, quam sunt impedit iure id recusandae odio reprehenderit dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aliquid illo nisi voluptatem corrupti! A, doloremque sit consequuntur eos odit, numquam ad porro ipsum minus nobis eaque adipisci, amet quos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, nesciunt! Sequi aut natus vero sunt accusantium quas modi sint doloribus distinctio, cum voluptas omnis molestias, hic, autem corporis ipsam laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quasi molestiae aut nulla quae! Ipsam, distinctio? Esse quia quas eius neque? A possimus numquam atque quibusdam, nam quasi dolores. Ullam. */}
  
          </ScrollArea>
        </div>

      </div>

      
    </div>
  )
}

export default SingleBlogPost
