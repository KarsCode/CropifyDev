'use client'
import React,{useState} from 'react';
import { MapContainer, GeoJSON} from 'react-leaflet';
import mapData from '../../../public/gadm41_IND_1.json';
import soilInformation, {StateSoilInformation} from './soilInformation';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card"
import 'leaflet/dist/leaflet.css';

interface ModalState {
  isoCode: string | null;
  information: StateSoilInformation | null;
}




const ChoroplethMap: React.FC = () => {
  const center: [number,number] = [20.5937, 78.9629];
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  

  const getFillColor = (isoCode: string) => {
    switch (isoCode) {
      case 'IN-AP':
        return '#9e3a10'; // Red soil, laterite soils
      case 'IN-AR':
        return '#036651'; // Forest soils, mountain soils
      case 'IN-AS':
        return '#8c9e05'; // Alluvial soils, riverine soils
      case 'IN-BR':
        return '#8c9e05'; // Alluvial soils, clayey soils
      case 'IN-CT':
        return '#9e3a10'; // Red and yellow soils, laterite soils
      case 'IN-GA':
        return '#5f6936'; // Laterite soils, red soils
      case 'IN-GJ':
        return '#967809'; // Alluvial soils, black soils
      case 'IN-HR':
        return '#8c9e05'; // Alluvial soils, sandy soils
      case 'IN-HP':
        return '#036651'; // Mountain soils, brown soils
      case 'IN-JH':
        return '#9e3a10'; // Red and yellow soils, laterite soils
      case 'IN-KA':
        return '#3d2f23'; // Laterite soils, red soils
      case 'IN-KL':
        return '#5f6936'; // Laterite soils, red soils
      case 'IN-MP':
        return '#3d2f23'; // Black soils, red and yellow soils
      case 'IN-MH':
        return '#3d2f23'; // Black soils, red and yellow soils
      case 'IN-MN':
        return '#8c9e05'; // Alluvial soils, hill soils
      case 'IN-ML':
        return '#036651'; // Forest soils, red and yellow soils
      case 'IN-MZ':
        return '#036651'; // Forest soils, red and yellow soils
      case 'IN-NL':
        return '#036651'; // Hill soils, laterite soils
      case 'IN-OR':
        return '#9e3a10'; // Alluvial soils, red and yellow soils
      case 'IN-PB':
        return '#8c9e05'; // Alluvial soils, sandy soils
      case 'IN-RJ':
        return '#967809'; // Desert soils, saline soils
      case 'IN-SK':
        return '#036651'; // Forest soils, mountain soils
      case 'IN-TN':
        return '#9e3a10'; // Red soils, black soils
      case 'IN-TG':
        return '#9e3a10'; // Red soils, laterite soils
      case 'IN-TR':
        return '#8c9e05'; // Alluvial soils, hill soils
      case 'IN-UP':
        return '#8c9e05'; // Alluvial soils, clayey soils
      case 'IN-UT':
        return '#8c9e05'; // Alluvial soils, mountain soils
      case 'IN-WB':
        return '#8c9e05'; // Alluvial soils, deltaic soils
      default:
        return 'gray'; // Default color
    }
  };


  const geoJSONStyle = (feature: any) => ({
    fillColor: getFillColor(feature.properties.ISO_1),
    color: 'black',
    weight: 1,
    fillOpacity: feature.properties.ISO_1 === hoveredState ? 1 : 0.8,
  });

  const handleMouseOver = (event: any) => {
    console.log('Event:', event);
    if (event.target && event.layer.feature && event.layer.feature.properties) {
      const isoCode = event.layer.feature.properties.ISO_1;
      console.log('ISO Code:', isoCode);
      setHoveredState(isoCode);
    }
  };
  const handleMouseOut = () => {
    setHoveredState(null);
  };


  const handleFeatureClick = (event: any) => {
    const isoCode = event.layer.feature.properties.ISO_1;
    const information = soilInformation[isoCode];
    // Add logic to fetch and display state information based on isoCode
  };

  
  console.log(mapData);   

  return ( 
  <div>

    
   <MapContainer style = {{ height: "600px",backgroundColor: "transparent"}} zoom ={4.52} center = {center} zoomControl = {false}
   scrollWheelZoom={false}  // Disable scroll wheel zoom
   doubleClickZoom={false}  // Disable double click zoom
   touchZoom={false}
   dragging={false}
   zoomSnap={0.01}>
      <GeoJSON data ={mapData.features} style = {geoJSONStyle} eventHandlers={{
          mouseover: handleMouseOver,
          mouseout: handleMouseOut,
          click: handleFeatureClick,
        }} />



   </MapContainer>


   </div>
  );
};

export default ChoroplethMap;
