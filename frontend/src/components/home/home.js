
import React from "react"
import { useState, useEffect } from "react";
import { About } from "../about";
import { Navigation } from "../navigation";
import { Header } from "../header";
import { Features } from "../features";
import JsonData from "../../data/data.json";
import { Gallery } from "../gallery";
import { Contact } from "../contact";
import SmoothScroll from "smooth-scroll";
  
export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });

const Home =() => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    return (
        <div >
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />  
        <Gallery data={landingPageData.Gallery}/>
        <Contact data={landingPageData.Contact} />
        </div>
     
    )
}

export default Home;