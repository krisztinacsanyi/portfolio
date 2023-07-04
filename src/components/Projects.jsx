import React from "react";
import Card from "./projects/Card";
import "../assets/css/projects.css";

export default function Projects() {
    const CARDS = [
        {
            title: "E-learning course",
            at: " @ Case Solvers",
            link: "https://elearning.mabisz.hu",
            content:
                "The MABISZ e-learning course provides basic insurance knowledge to those interested. I worked on developing the tool, which made it possible to bring to life this course for MABISZ. This tool empowers users to create microsites effortlessly, even without any prior developer knowledge. My role as both the lead developer and product owner was instrumental in shaping this platform. I took on the responsibility of designing and implementing the frontend while also contributing to essential components of the backend and database planning.",
        },
        {
            title: "BGE Career Festival",
            at: " @ Case Solvers",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7057683155977134081/",
            content:
                "I was the main developer and content responsible while working on BGE's job fair. This event encompassed multiple pages, where users could seek internships, full-time positions, career counseling, and much more. The Job Fair was enriched with interactive lectures, consulting hours, chatting with the exhibitors, and other interesting programs. Students could gain insight into the work of the exhibitors, browse through multiple jobs and apply with their CVs as well. The event was awarded a special prize by HRBEST in 2021.",
        },
        {
            title: "My personal projects",
            at: " @ GitHub",
            link: "https://github.com/krisztinacsanyi",
            content:
                "I have made some personal projects during my education at Corvinus University of Budapest, Webler Oktatósútió and Webuni. Some of them have made it to GitHub, which can be accessed by going to the contact section of this page or clicking the title.",
        },
    ];
    return (
        <section id="projects">
            <div className="title reveal">Projects</div>
            <section className="card-grid reveal">
                {CARDS.map((element, index) => (
                    <Card
                        title={element.title}
                        content={element.content}
                        at={element.at}
                        link={element.link}
                        key={index}
                        index={index}
                    />
                ))}
            </section>
            <section className="want-more reveal">
                <div className="want-more-title">
                    <h2>Want more?</h2>
                    <span className='cursor'>_</span>
                </div>
                <p>Message me via email if you want some screenshots about my work</p>
            </section>
        </section>
    );
}
