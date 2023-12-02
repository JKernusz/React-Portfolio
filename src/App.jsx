import './App.css'
import { useState } from "react";
import {Outlet} from "react-router-dom"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Footer from "./components/Footer"
function App() {
    return (
      <div>
      <Navbar />
      <Outlet />
      <Footer />
      
    </div>
    );
  }
      
    

export default App
