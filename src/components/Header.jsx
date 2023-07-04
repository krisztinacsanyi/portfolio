import React from "react";
import "../assets/css/header.css";

export default function Header() {
    return (
        <header className="header reveail" id="header">
            <div className="header-inner">
                <div className="block">
                    <div className="pre"><span>#0</span>Krisztina Csanyi | Frontend developer</div>
                    <h1>Hi there.</h1>
                    <ul className="anchornav">
                        <li><a href="#objective">Objective <span>#1 What's the purpose</span></a></li>
                        <li><a href="#projects">Projects <span>#2 What I worked on</span></a></li>
                        <li><a href="#experience">Experience <span>#3 What knowledge I have</span></a></li>
                        <li><a href="#skills">Skills <span>#4 What skills I gained</span></a></li>
                        <li><a href="#contact">Contact <span>#5 Write me a message</span></a></li>
                    </ul>
                </div>
            </div>
        </header>
        /*
         <header className="light">
              <div className="header-inner">
                <menu>
                  <a href="#objective">Objective</a>
                  <a href="#projects">Projects</a>
                  <a href="#experience">Experience</a>
                  <a href="#skills">Skills</a>
                  <a href="#contact">Contact</a>
                </menu>
                <section className="loadTop">
                  <h1>Krisztina Csanyi</h1>
                  <h2>Frontend developer</h2>
                </section>
              </div>
            </header>
        */
    );
}
