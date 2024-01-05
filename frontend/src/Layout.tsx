import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/footer"
import './global.css'
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";
// import { useContext } from "react";
//  import { UserContext } from "./UserContext";
export default function Layout() {
  //  const {user} = useContext(UserContext);
   //console.log(user);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="layoutfinal" >
      <Outlet />
      <Footer/>
      </div>
    <Toaster/>
    </ThemeProvider>
  );
}