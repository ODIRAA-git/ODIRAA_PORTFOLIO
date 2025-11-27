import React from "react";
import Logo from "../assets/Logo.png";
function Hero(){
    return(
        <>
            <div className="intro-section mt-10 pl-10">
                <p className="text-3xl md:text-4xl font-bold mb-4">
        I turn ideas into <span className="text-blue-400">high-impact web apps</span> 🚀
      </p>
                <ul>
                    <li className="font-bold w-auto">Hi there!, Just call me...</li>
                    <li className="inline-block animate-zoom-in delay-500 pl-5"><img src={Logo} alt="Logo" className="wiggle-hover font-bold-12 w-auto object-contain transition-transform duration-300 hover:rotate-3"  /></li>
                </ul>

            </div>







        </>
    );
}
export default Hero;



     