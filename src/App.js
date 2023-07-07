import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Services from "./components/services";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Appointment from "./components/appointment";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Logo from "./assets/Logo.png";
import { Helmet } from "react-helmet";

const App = () => {
    return (
        <div className="App h-screen overflow-x-hidden overflow-y-scroll bg-secondary
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#399F2E]/80 relative ">
            <Helmet>
                <title>Firststep Multispecialty Clinic</title>
                
            </Helmet>
            <Header/>
            <Services/>
            <About/>
            <Testimonials/>
            <Appointment/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;