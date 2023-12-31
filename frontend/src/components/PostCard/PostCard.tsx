import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface DocumentInterface {
  title: string;
  description: string;
  article: string;
  date: string;
  image: string;
  blog_id: number;
}

interface PostCardProps {
  document: DocumentInterface;
}

const PostCard: React.FC<PostCardProps> = ({ document }) => {
  const link = '/Blog/' + document.blog_id.toString();

  return (
    <div className='flex flex-col gap-10 mb-5 justify-between'>
      <div className='flex relative'>
        <div className='w-[90%] relative shadow-md' style={{ width: '400px', height: '280px' }}>
          <img
            src={document.image}
            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px'}}
            alt='Blog Post'
          />
        </div>
        {/* Date */}
        <div className='font-extralight rotate-[90deg] m-auto'>{document.date}</div>
      </div>

      <div>
        {/* Title */}
        <h1 className='w-[90%] text-2xl font-medium mb-3'>{document.title}</h1>

        {/* Desc */}
        <p className='w-[90%] mb-5 font-light'>{document.description}</p>
        </div>

        <div className='pt-4 pb-4'>
          <Link to={link} className='shadow-md'>
            <Button>READ MORE</Button>
          </Link>
        </div>
        </div>
  );
};

export default PostCard;
