import React from "react";
import icon1 from "./../assets/images/client-audiophile.svg";
import icon2 from "./../assets/images/client-databiz.svg";
import icon3 from "./../assets/images/client-maker.svg";
import icon4 from "./../assets/images/client-meet.svg";
import heroImage from "./../assets/images/image-hero-desktop.png";


const Showcase = () => {
   return (
      <div className="showcase">
         <div className="container">
            <div className="even-col">
               <h1>make remote work</h1>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis quia excepturi pariatur. Officia, blanditiis tempore.
               </p>
               <a href="#" className="btn">
                  learn more
               </a>

               {/* icons */}
               <div className="icons">
                  <img src={icon1} alt="client icon" />
                  <img src={icon2} alt="client icon" />
                  <img src={icon3} alt="client icon" />
                  <img src={icon4} alt="client icon" />
               </div>
            </div>

            <div className="even-col">
                <img src={heroImage} alt="heroImage" />
            </div>
         </div>
      </div>
   );
};

export default Showcase;
