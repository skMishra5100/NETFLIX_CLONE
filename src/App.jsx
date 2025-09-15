import "./assets/netflix/netflix.css";
import Qsn from "./assets/netflix/Qsn";
import Header from "./assets/netflix/header";
import Footer from "./assets/netflix/footer";
import Section from "./assets/netflix/section";
import Section2 from "./assets/netflix/section2";
import Section3 from "./assets/netflix/section3";
import Section4 from "./assets/netflix/section4";
import { Outlet } from "react-router-dom";
import "./assets/netflix/responsive.css";
import "./assets/netflix/HomeResponsive.css"

const App = () => {

  return (
   <>
   <Header/>
   <Outlet/>
   <Section/>
   <Section2/>
   <Section/>
   <Section3/>
   <Section4/>
   <Qsn/>
   <Footer/>
   </>
  )
}

export default App


