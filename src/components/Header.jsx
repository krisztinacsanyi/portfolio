import React from "react";
import "../assets/css/header.css";

export default function Header() {
    return (
        <header className="light">
            <div className="header-inner">
                <menu>
                    <a href="#objective">Objective</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </menu>
                <section className="loadTop">
                    <h1>Krisztina Csanyi</h1>
                    <h2>Frontend developer</h2>
                </section>
            </div>
        </header>
    );
}
