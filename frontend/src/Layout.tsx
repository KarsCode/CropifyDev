// import Header from "./Header";
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/footer"
import './global.css'
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";
export default function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="layoutfinal" >
      <Navbar/>
      <Outlet />
      <Footer/>
      
    </div>
    <Toaster/>
    </ThemeProvider>
  );
}