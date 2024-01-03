import './global.css'
import {Route, Routes} from "react-router-dom";
import PlantDisease from './pages/PlantDisease';
import Layout from './Layout';
import Home from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SoilType from './pages/SoilType';
import SoilCheck from './pages/SoilCheck';
import CropDoctor from './pages/CropDoctor';
import BlogPage from './pages/BlogPage';
import SingleBlogPost from './pages/SingleBlogPost';

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/CropDoctor" element={<CropDoctor/>} />
        <Route path="/SoilCheck" element={<SoilCheck/>} />
        <Route path="/Blog" element={<BlogPage/>} />
        <Route path="/Blog/pageId" element={<SingleBlogPost/>} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="/Profile" element={<div>Profile</div>} />
        <Route path="/plantDisease/:id" element={<PlantDisease/>} />
        <Route path="/soilType/:id" element={<SoilType/>} />
      </Route>
    </Routes>
    
    
  )
}

export default App
