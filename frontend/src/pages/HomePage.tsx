

import CarouselComp from '../components/Carousel/carouselcomp'
import HomeDialog from '../components/HomeDialog/HomeDialog'
// import HomeDialog from '@/components/HomeDialog.tsx/HomeDialog'
// import dynamic from 'next/dynamic'


export default function Home() {

//   const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"),{ssr:false})
  return (
    
    <div className='flex gap-48'>
      {/* Title */}
      <div className='flex flex-col gap-8 w-1/2'>
        <h1 className='text-6xl font-bold'>
          Cultivating Tomorrow's Harvest Today.
        </h1>

        <p className='text-lg'>
        Cropify is the future of farming at your fingertips. Using advanced machine learning, we detect plant diseases early, ensuring your crops thrive. Know your soil with our insights, guiding you to the right crops for maximum yield. Cropify isn't just a website; it's a revolution, cultivating tomorrow's harvest today. Smart, precise, and sustainable. Welcome to the future of agriculture.
        </p>
        

        <p className='text-lg'>
          Click below to learn more about the team behind the project !
        </p>

        <div>
          
          
        <div className="inline-block px-4 py-2 text-2xl rounded-full border border-ring hover:bg-crophover duration-300 ease-in-out">
          <HomeDialog/> 

        </div>
        
        </div>
      </div>

      {/* Carousel */}
      <div className='hidden lg:flex relative w-1/2 mb-24  items-center justify-center'>
        <div ><CarouselComp/></div>
        
      </div>
    </div>
    

   
    
  )
}
