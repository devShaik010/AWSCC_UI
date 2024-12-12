import React, { useEffect }  from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import GallerySection from "../Components/GallerySection/GallerySection";
import Footer from "../Components/Footer/Footer";
import Bot from "../Components/bot-msg/Bot";


function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "gallery-page">
            <NavBar />
            <GallerySection />
            <Footer />
            <Bot />

        </div>
    ) ;
}


export default Gallery ;
