import { useParams } from "react-router-dom";
import { VITE_API_URL } from "../setupEnv";
import { useEffect, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons"
import {MutatingDots} from 'react-loader-spinner'
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "../components/ui/card"

export default function SoilType() {
  const { id } = useParams();
  const [data, setData] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${VITE_API_URL}/soilType/${id}`);
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
if (!data || !data["document"]) {
  
    return (
      <div className="mt-64 flex flex-col items-center justify-center">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="9.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
        </div>
    )
  }

if(data["document"]){
  const document=data["document"];
  console.log(document);
  return (
    <>
            <div>
        {/* <CarouselDisease image1={document['Image1']} image2={document['Image2']} history={document['history']} description={document['description']} medication={document['medication']} solutions={document['solutions']} title={document['disease_name']}/> */}

        <div className="text-8xl font-bold pb-20">
          Soil Type 
        </div>

        <div className="flex flex-col gap-10 items-center ">

        <div className="text-xl ">
          <Card className="hover:bg-crophover">
            <CardHeader> <h1 className="font-bold underline">Key Characteristics</h1> </CardHeader>
            <CardContent>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nulla natus fugit esse accusamus, tempora at corrupti sapiente voluptates, nisi soluta harum vero aliquam minus autem ex fuga aperiam.
              </p>

            </CardContent>
          </Card>
        </div>

        <div className="text-xl ">
          <Card className="hover:bg-crophover">
            <CardHeader> <h1 className="font-bold underline">Nutrient Content</h1> </CardHeader>
            <CardContent>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nulla natus fugit esse accusamus, tempora at corrupti sapiente voluptates, nisi soluta harum vero aliquam minus autem ex fuga aperiam.
              </p>

            </CardContent>
          </Card>
        </div>

        <div className="text-xl ">
          <Card className="hover:bg-crophover">
            <CardHeader> <h1 className="font-bold underline">Water Retention</h1> </CardHeader>
            <CardContent>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nulla natus fugit esse accusamus, tempora at corrupti sapiente voluptates, nisi soluta harum vero aliquam minus autem ex fuga aperiam.
              </p>

            </CardContent>
          </Card>
        </div>

        <div className="text-xl ">
          <Card className="hover:bg-crophover">
            <CardHeader> <h1 className="font-bold underline">Common Crops</h1> </CardHeader>
            <CardContent>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nulla natus fugit esse accusamus, tempora at corrupti sapiente voluptates, nisi soluta harum vero aliquam minus autem ex fuga aperiam.
              </p>

            </CardContent>
          </Card>
        </div>

        <div className="text-xl ">
          <Card className="hover:bg-crophover">
            <CardHeader> <h1 className="font-bold underline">Health Tips</h1> </CardHeader>
            <CardContent>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nulla natus fugit esse accusamus, tempora at corrupti sapiente voluptates, nisi soluta harum vero aliquam minus autem ex fuga aperiam.
              </p>

            </CardContent>
          </Card>
        </div>

        <div className="text-xl ">
          <Card className="hover:bg-crophover">
            <CardHeader> <h1 className="font-bold underline">Environmental Impact</h1> </CardHeader>
            <CardContent>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nulla natus fugit esse accusamus, tempora at corrupti sapiente voluptates, nisi soluta harum vero aliquam minus autem ex fuga aperiam.
              </p>

            </CardContent>
          </Card>
        </div>


        <div className="text-xl ">
          <Card className="hover:bg-crophover">
            <CardHeader> <h1 className="font-bold underline">CLimate Considerations</h1> </CardHeader>
            <CardContent>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sed nulla natus fugit esse accusamus, tempora at corrupti sapiente voluptates, nisi soluta harum vero aliquam minus autem ex fuga aperiam.
              </p>

            </CardContent>
          </Card>
        </div>


        <div className="flex  gap-48">
          <div className="border-4 border-border">
            Image 1 Here
          </div> 

          <div className="border-4 border-border">
            Image 2 Here
          </div>
        </div>

        </div>

      </div>
    </>

    
  );
}
}
