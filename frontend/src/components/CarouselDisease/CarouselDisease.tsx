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

const CarouselDisease = () => {
    

    return (
      <div>
        <Carousel className="w-full">
          <CarouselContent>
                
                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      Title
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
                        Description
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      History
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      Medication
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>


                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      Solutions
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
}

export default CarouselDisease
