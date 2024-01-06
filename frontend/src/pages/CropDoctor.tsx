import ImageProcessing from "../components/ImageProcessing";

export default function CropDoctor(){
    return(

        <div>

        {/* <ImageProcessing endpoint="plantDisease"/>  */}
        <div className='flex gap-48'>
        {/* Title */}
        <div className='flex flex-col gap-8 w-1/2'>
          
          <h1 className='text-7xl font-bold whitespace-wrap'>
              CropDoctor           
          </h1>

          <h2 className="text-4xl font-bold whitespace-wrap "> Prescribing Health To Your Harvest.</h2>
  
          {/* <p className='text-lg'>
          The CropDoctor serves as your vigilant plant health companion, identifying diseases swiftly to safeguard your harvest and ensure bountiful yields. It combines advanced machine learning with image detection to empower farmers with real-time insights, cultivating a healthier, more prosperous future for agriculture.
          </p> */}

          <div className='lg:block md:block hidden'>
            <p className='text-lg'>
              CropDoctor serves as your vigilant plant health companion, identifying diseases swiftly to safeguard your harvest and ensure bountiful yields. With the help of AI enabled computer vision algorithms, CropDoctor empowers farmers with real-time insights, cultivating a healthier, more prosperous future for agriculture.
            </p>
          </div>
          <div className='lg:hidden md:hidden block'>
            {/* Content for small screens */} <ImageProcessing endpoint="plantDisease"/>
          </div>
                    
  
          {/* <p className='text-lg'>
            Click below to learn more about the team behind the project !
          </p> */}
  
          <div>
            
            
          {/* <div className="inline-block px-4 py-2 text-2xl rounded-full border border-ring hover:bg-crophover duration-300 ease-in-out">
            <HomeDialog/> 
  
          </div> */}
          
          </div>
        </div>
  
        {/* Input Area */}
        <div className='hidden lg:flex relative w-1/2 mb-24  items-center justify-center font-bold'>
          <div ><ImageProcessing endpoint="plantDisease"/></div>
          
        </div>
      </div>

      

      </div>
    )
}