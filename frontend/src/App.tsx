import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import PlantDisease from './pages/PlantDisease';
import Layout from './Layout';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path="/plantDisease/:id" element={<PlantDisease/>} />

      </Route>
    </Routes>
    
  )
}

export default App
