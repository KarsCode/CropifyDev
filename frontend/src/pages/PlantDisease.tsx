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
// if (!data || !data["document"]) {
//   return (
//     <div className="mt-64 flex flex-col items-center justify-center">
//     <Button disabled className="bg-destructive">
//     <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//     Loading
//   </Button>
//   </div>
//   )
//   }

  console.log(data);
  //return only if data["document"]
  // if(data["document"])
  // {
  return (
    <>
      <div>
        <CarouselDisease/>
      </div>
      
    </>
  );

  
}
//}
