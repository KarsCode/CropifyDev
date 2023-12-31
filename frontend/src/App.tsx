import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import PlantDisease from './pages/PlantDisease';
import Layout from './Layout';
import PlantDiseases from './pages/PlantDiseases';
import SoilType from './pages/SoilType';
import SoilTypes from './pages/SoilTypes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path="/plantDisease/:id" element={<PlantDisease/>} />
        <Route path="/plantDiseases" element={<PlantDiseases/>} />
        <Route path="/soilTypes" element={<SoilTypes/>} />
        <Route path="/soilType/:id" element={<SoilType/>} />
        

      </Route>
    </Routes>
    
  )
}

export default App
