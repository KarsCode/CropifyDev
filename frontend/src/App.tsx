import './global.css'
import {Route, Routes} from "react-router-dom";
// import IndexPage from './pages/IndexPage';
import PlantDisease from './pages/PlantDisease';
import Layout from './Layout';
import Home from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/CropDoctor" element={<div>CropDoctor</div>} />
        <Route path="/SoilCheck" element={<div>SoilCheck</div>} />
        <Route path="/Blog" element={<div>Blog</div>} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="/Profile" element={<div>Profile</div>} />
        <Route path="/plantDisease/:id" element={<PlantDisease/>} />
      
      </Route>  
    </Routes>
    
    
  )
}

export default App
