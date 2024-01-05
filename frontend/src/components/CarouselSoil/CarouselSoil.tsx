'use client' 

// import React from 'react';
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const CarouselSoil = () => {
    

    return (
      <div>
        <Carousel className="w-full">
            <div className="h-1/3">
          <CarouselContent>
                
                    <CarouselItem>
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-video items-center justify-center bg-background">
                        {/* Use standard HTML img element */}
                        Type
                        </CardContent>
                    </Card>
                    </div>
                    </CarouselItem>
                

                



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                        Image 1  
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                        Key Characteristics
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      Nutrient Content
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      Water Retention
                      Common Crops
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>


                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      Health Tips
                      Environmental Impact
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>

                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      Local Climate Considerations
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>


                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      Image 2
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>

                
          </CarouselContent>
          </div>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
}

export default CarouselSoil
