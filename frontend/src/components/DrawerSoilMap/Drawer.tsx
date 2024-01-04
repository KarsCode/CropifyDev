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



export function DrawerDemo() {
 

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

        {/* Map Render Here */}
          <div className="w-[800px]">
            <div></div>
            <ChoroplethMap/>
        
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
