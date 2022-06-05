
import React from 'react'
import Cami from '../Image/camila22.jpg'
import About from './About/About'
import Footer from './Footer'


export default function Card() {
    return (
        <div className="container--info">

            <img src={Cami} alt="" />
            <About />
            <Footer />
        </div>


    );
}


