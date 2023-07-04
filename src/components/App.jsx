import "../assets/css/app.css";
import "../assets/js/app";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header";
import lozad from 'lozad'
import Objective from "./Objective";
import Parallax from "parallax-js";
import Projects from "./Projects";
import React, { useEffect } from "react";
import Skills from "./Skills";
import SmoothScroll from "smooth-scroll";
import WebFont from "webfontloader";

function App() {
    new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true,
    });
    WebFont.load({
        google: {
            families: ["Oswald", "Source Sans Pro"],
        },
    });
    useEffect(() => {
        new Parallax(document.getElementById("js-scene"));
    }, []);
    const observer = lozad();
    observer.observe();

    return (
        <div className="app">
            <Header />
            <Objective />
            <section className="js-scene reveal">
                <div className="items__inner" id="js-scene">
                    <div className="items__layer layer" data-depth="0.85">
                        <div className="items__item" data-title="no.1"></div>
                    </div>
                    <div className="items__layer layer" data-depth="0.70">
                        <div className="items__item" data-title="no.2"></div>
                    </div>
                    <div className="items__layer layer" data-depth="0.65">
                        <div className="items__item" data-title="no.3"></div>
                    </div>
                    <div className="items__layer layer" data-depth="1.20">
                        <div className="items__item" data-title="no.4"></div>
                    </div>
                    <div className="items__layer layer" data-depth="0.00">
                        <div className="items__item" data-title="no.5"></div>
                    </div>
                </div>
            </section>
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </div>
    );
}

export default App;
