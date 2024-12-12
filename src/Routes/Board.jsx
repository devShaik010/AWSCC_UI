import React, { useEffect }  from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import TeamSection from "../Components/TeamSection/TeamSection"; 
import Footer from "../Components/Footer/Footer";
import Bot from "../Components/bot-msg/Bot";


function Board() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "board-page">
            <NavBar />
            <TeamSection/>
            <Footer />
            <Bot />

        </div>
    ) ;
}


export default Board ;
