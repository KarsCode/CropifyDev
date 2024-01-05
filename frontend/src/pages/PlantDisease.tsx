import { useParams } from "react-router-dom";
import { VITE_API_URL } from "../setupEnv";
import { useEffect, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons"
 
import { Button } from "../components/ui/button"
import CarouselDisease from "../components/CarouselDisease/CarouselDisease";

export default function PlantDisease() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${VITE_API_URL}/plantDisease/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Only fetch data if id is present
    if (id) {
      fetchData();
    }
  }, [id]);

  // Render loading state if data is still fetching
if (!data || !data["document"]) {
  return (
    <div className="mt-64 flex flex-col items-center justify-center">
    <Button disabled className="bg-destructive">
    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
    Loading
  </Button>
  </div>
  )
  }

  //return only if data["document"]
  if(data["document"])
  {
    const document=data["document"];
    console.log(document);
  return (
    <>
       {id}
      <div className='flex gap-48'>
      {/* Title */}
      <div className='flex flex-col gap-8 w-1/2'>
        <h1 className='text-6xl font-bold'>
          {document.disease_name}
        </h1>

        <p className='p-2 text-xl border -4 border-primary'>
        {document.history}
        </p>
        

        <p className='p-2 text-xl border -4 border-primary'>
          History: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ullam, molestias facilis nemo voluptatibus voluptatum eius labore placeat laborum deserunt in, consequatur tempora suscipit ex, nam quisquam impedit! Error, blanditiis.
        </p>

        <p className='p-2 text-xl border -4 border-primary'>
          Medication: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ullam, molestias facilis nemo voluptatibus voluptatum eius labore placeat laborum deserunt in, consequatur tempora suscipit ex, nam quisquam impedit! Error, blanditiis.
        </p>

        <div>
          
          
        
        </div>
      </div>

      {/* Carousel */}
      <div className='hidden lg:flex relative w-1/2 mb-24 flex-col gap-2  items-center justify-center'>
        <div ><CarouselDisease/></div>

        <p className='p-2 text-xl border -4 border-primary'>
          Solutions: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis magnam id reiciendis non voluptatem corporis facere voluptas, earum ipsum veritatis? Dolorem, id eveniet. Odio fugiat sequi autem cupiditate nobis!


          Check
        </p>
        
      </div>
    </div>
      
    </>
  );

  
}
}
