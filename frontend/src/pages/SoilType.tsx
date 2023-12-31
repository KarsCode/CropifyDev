import { useParams } from "react-router-dom";
import { VITE_API_URL } from "../setupEnv";
import { useEffect, useState } from "react";

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
    return <p>Loading...</p>;
  }

  console.log(data);
if(data["document"]){
  return (
    <>
      {id}
      {/* Render your component using the fetched data */}
    </>
  );
}
}
