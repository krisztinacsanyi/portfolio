import React from "react";
import "../assets/css/header.css";

export default function Header() {
    return (
        <header className="light">
            <div className="header-inner">
                <menu>
                    <ul>
                        <li>
                            <span>Objective</span>
                        </li>
                        <li>
                            <span>Projects</span>
                        </li>
                        <li>
                            <span>Skills</span>
                        </li>
                        <li>
                            <span>Contact</span>
                        </li>
                    </ul>
                </menu>
                <section>
                    <h1>Krisztina Csanyi</h1>
                    <h2>Frontend developer</h2>
                </section>
            </div>

        </header>
    );
}
