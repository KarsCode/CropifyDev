import { DrawerDemo } from "../components/DrawerSoilMap/Drawer";
import ImageProcessing from "../components/ImageProcessing";

export default function CropDoctor(){
    return(

        <div>

        {/* <ImageProcessing endpoint="plantDisease"/>  */}
        <div className='flex gap-48'>
        {/* Title */}
        <div className='flex flex-col gap-8 w-1/2'>
          
          <h1 className='text-7xl font-bold whitespace-wrap'>
              SoilCheck           
          </h1>

          <h2 className="text-4xl font-bold whitespace-wrap "> 
Cultivating Wealth From the Ground Up.</h2>
  

          <div className='lg:block md:block hidden'>
            <p className='text-lg'>
            SoilCheck is your essential companion for optimal crop selection and increased yields. Through advanced machine learning and image recognition algorithms, Soil Check delivers precise assessments of soil types, empowering farmers with crucial insights. This tool aids in informed decision-making for cultivating the most suitable crops, promoting sustainable and prosperous agricultural practices. Soil Check ensures farmers have the knowledge to enhance soil fertility, boost productivity, and secure a thriving future in agriculture.
            </p>
          </div>
          <div className='lg:hidden md:hidden block'>
            {/* Content for small screens */} <ImageProcessing endpoint="soilType"/>
          </div>
                    
  
          {/* <p className='text-lg'>
            Click below to learn more about the team behind the project !
          </p> */}
  
          <div>
            
            
          <div className="hidden lg:block md:block">
            <DrawerDemo/>
          </div>
          
          </div>
        </div>
  
        {/* Input Area */}
        <div className='hidden lg:flex relative w-1/2 mb-24  items-center justify-center font-bold'>
          <div ><ImageProcessing endpoint="soilType"/></div>
          
        </div>
      </div>

      

      </div>
    )
}