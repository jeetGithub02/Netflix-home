import React from "react";
import PageIndex from "./components/PageIndex.jsx";
import Features from "./components/Features.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
function NetflixHome(){
    return(
        <div>
            <PageIndex/>
            <Features/>
            <FAQ />
            <Footer />
        </div>
    )
}
export default NetflixHome;