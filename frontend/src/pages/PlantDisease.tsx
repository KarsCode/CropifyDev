import { useParams } from "react-router-dom";
import { VITE_API_URL } from "../setupEnv";
import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import {
  Card,
  CardContent,
  CardHeader,
} from "../components/ui/card"



export default function PlantDisease() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${VITE_API_URL}/plantDisease/${id}`);
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

  );
}

  //return only if data["document"]
if(data["document"])
  {
    const document=data["document"];
  return (
    <>
      <div>
        {/* <CarouselDisease image1={document['Image1']} image2={document['Image2']} history={document['history']} description={document['description']} medication={document['medication']} solutions={document['solutions']} title={document['disease_name']}/> */}

        <div className="text-8xl font-bold pb-20">
          {document['disease_name']} 
        </div>

        <div className="flex flex-col gap-10 ">

        <div className="text-xl ">
          <Card className="hover:bg-crophover transition ease-in duration-250">
            <CardHeader> <h1 className="font-bold underline">Description</h1> </CardHeader>
            <CardContent>
              <p>
              {document['description']}
              </p>

            </CardContent>
          </Card>
        </div>

        <div className="text-xl ">
          <Card className="hover:bg-crophover transition ease-in duration-250">
            <CardHeader> <h1 className="font-bold underline">History</h1> </CardHeader>
            <CardContent>
              <p>
              {document['history']}
              </p>

            </CardContent>
          </Card>
        </div>

        <div className="text-xl ">
          <Card className="hover:bg-crophover transition ease-in duration-250">
            <CardHeader> <h1 className="font-bold underline">Medication</h1> </CardHeader>
            <CardContent>
              <p>
              {document['medication']}
              </p>

            </CardContent>
          </Card>
        </div>

        <div className="text-xl ">
          <Card className="hover:bg-crophover transition ease-in duration-250">
            <CardHeader> <h1 className="font-bold underline">Solution</h1> </CardHeader>
            <CardContent>
              <p>
              {document['solutions']}
              </p>

            </CardContent>
          </Card>
        </div>


        <div className="flex gap-48 items-center justify-between">
          <div className="border-4 border-border w-fit h-fit">
            <img src={document['Image1']}></img>
          </div> 

          <div className="border-4 border-border w-fit h-fit">
            <img src={document['Image2']}></img>
          </div>
        </div>

        </div>

      </div>
    </>
  );
}
}




//implementation excellence  - diagrams thoughts 

//cost effectiveness 