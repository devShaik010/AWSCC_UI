import React, { useEffect }  from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import EventsSection from "../Components/EventsSection/EventsSection";
import Footer from "../Components/Footer/Footer";
import Bot from "../Components/bot-msg/Bot";


function Events() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "events-page">
            <NavBar />
            <EventsSection />
            <Footer />
            <Bot />

        </div>
    ) ;
}


export default Events ;