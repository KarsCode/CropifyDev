import * as React from "react"

import { Button } from "../ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"
import ChoroplethMap from "./MapComponent"
// import soilInformation, {StateSoilInformation} from './soilInformation';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";



export function DrawerDemo() {

  const [drawerData, setDrawerData] = React.useState({
    isoCode: '',
    name: 'Title',
    description: 'Description',
  });

  const handleModalStateChange = (isoCode: string, name: string, description: string) => {
    setDrawerData({
      isoCode,
      name,
      description,
    });
  };
 

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="border-primary hover:bg-crophover">View Interactive Map</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col items-center h-[calc(100vh-120px)]">
          <DrawerHeader>
            <div className="flex flex-col items-center">
            <DrawerTitle>Soils of India.</DrawerTitle>
            <DrawerDescription className="text-lg underline">Explore the Dynamic Interactive Soil Map.</DrawerDescription>
            </div>
          </DrawerHeader>

        <div className="flex gap-12 justify-end">
          <div className="w-[800px]">
            
          <ChoroplethMap onModalStateChange={handleModalStateChange} />
        
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="w-2/3">
            <Card>
                <CardHeader>
                  <CardTitle>{drawerData.name || 'Title'}</CardTitle>
                  <CardDescription>{drawerData.description || 'Description'}</CardDescription>
                </CardHeader>
            </Card>
            </div>

          </div>

          </div>



          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="border-primary">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
