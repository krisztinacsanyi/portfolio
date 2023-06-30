import React from "react";
import "../assets/css/header.css";

export default function Header() {
  return (
    <header className="light">
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
       {/*  <h3>
          With 3+ years experience, and a passion for collaboration and
          innovation. Skilled in collaborating with designers and backend devs,
          delivering scalable, responsive interfaces. Problem solver, flexible,
          and focused on user-centric solutions.
        </h3> */}
      </section>
    </header>
  );
}
