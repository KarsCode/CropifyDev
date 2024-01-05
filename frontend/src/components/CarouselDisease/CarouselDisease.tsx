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
    const imgPaths = ['/C3.jpg', '/C1.jpg', '/C2.jpg', '/C5.jpeg', '/C4.jpg'];

    return (
      <div>
        <Carousel className="w-full">
          <CarouselContent>
            {imgPaths.map((path, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center bg-background">
                      {/* Use standard HTML img element */}
                      <img src={path} alt={`Image ${index + 1}`} width={500} height={100} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
}

export default CarouselDisease
