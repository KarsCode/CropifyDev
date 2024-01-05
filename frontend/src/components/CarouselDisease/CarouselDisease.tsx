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




interface CarouselProps {
  title:string;
  image1:string;
  description:string;
  history:string;
  medication:string;
  solutions:string;
  image2:string;
}



const CarouselDisease: React.FC<CarouselProps> = ( {title , image1, description , history, medication , solutions , image2} ) => {
    

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
                        {title}
                        </CardContent>
                    </Card>
                    </div>
                    </CarouselItem>
                

                



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                        <img src={image1}></img>
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                        {description}
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      {history}
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>



                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      {medication}
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>


                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      {solutions}
                    </CardContent>
                  </Card>
                </div>
                </CarouselItem>


                <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      <img src={image2}></img>
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

export default CarouselDisease
