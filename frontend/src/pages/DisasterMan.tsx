import ImageProcessing from "../components/ImageProcessing";

export default function DisasterMan() {

   
      return (
        
        <div>

        {/* <ImageProcessing endpoint="plantDisease"/>  */}
        <div className='flex gap-48'>
        {/* Title */}
        <div className='flex flex-col gap-8 w-1/2 items-center'>
          
          <h1 className='text-7xl font-bold whitespace-wrap'>
              Wildfire Detection           
          </h1>

          <div className='lg:block md:block'>
            <p className='text-lg text-center'>
            Our wildfire detection algorithm is crucial for farmers as it swiftly identifies potential fire outbreaks by monitoring areas for signs like heat and smoke. This proactive system aids quick responses, deploying resources to contain fires and protect crops, soil, and equipment, ensuring safety for livestock and personnel.
            </p>
          </div>


          <div className='hidden lg:flex relative w-1/2 mb-24  items-center justify-center font-bold'>
          <div ><ImageProcessing endpoint="plantDisease"/></div>
          
        </div>

        </div>
  
        {/* Input Area */}
        <div className='flex flex-col gap-8 w-1/2 items-center'>
          
          <h1 className='text-7xl font-bold whitespace-wrap'>
              Pest Detection           
          </h1>

          <div className='lg:block md:block flex items-center'>
            <p className='text-lg'>
            Our image-based pest detection algorithm is a critical tool for farmers, employing advanced image recognition technology to identify and alert against potential pest infestations in agriculture. By analyzing images, this algorithm swiftly detects visual cues indicative of infestations. This enables farmers to take rapid and targeted actions.
            </p>
          </div>


          <div className='hidden lg:flex relative w-1/2 mb-24  items-center justify-center font-bold'>
          <div ><ImageProcessing endpoint="plantDisease"/></div>
          
        </div>

        </div>
      </div>

      

      </div>
        
    
       
        
      )
    }
    