import React from "react";
import Exp from "./experience/Exp";
import "../assets/css/experience.css";

export default function Experience() {
  let EXP = [
    {
      title: "FRONTEND | FULLSTACK DEVELOPER",
      subtitle: "Case Solvers",
      content:
        "As an employee at this company, I served as the sole frontend developer, allowing me to handle every aspect of page creation from inception to completion. This involved conceptualizing the design based on business requirements, establishing database connections, and developing both the backend and frontend components. Additionally, I undertook the crucial responsibilities of SEO management, conducting performance testing and optimization, and adhering to clean code principles. Working closely with my teammates, I collaborated on updating application versions utilizing Git. Furthermore, I embraced valuable learning opportunities within the organization, expanding my skill set with Node.js and React.js.",
      time: "2020 - now",
    },
    {
      title: "NODE.JS DEVELOPER",
      subtitle: "Webuni",
      content:
        "Gained some knowledge about these topics: JavaScript, V8, Node.Js, npm, Postman, Express.js, Middleware, Request, Response, REST, RESTful APIs.",
      time: "2022",
    },
    {
      title: "PEGA CERTIFIED SYSTEM ARCHITECT",
      subtitle: "Pega",
      content:
        "Learned the core principles of low-code application development on Pega Platform.",
      time: "2021",
    },
    {
      title: "WEB DEVELOPER",
      subtitle: "Webler Oktatóstúdió",
      content:
        "During the web programming course, I learned about all forms of website development, from simple static websites to complete web store and responsive websites using: HTML5, CSS3, Bootstrap, Javascript, PHP, MySQL.",
      time: "2020",
    },
    {
      title: "SYSTEM ADMINISTRATOR | WEB DEVELOPER",
      subtitle: "Krémpatika",
      content:
        "I was responsible for the visual and structural components of the online store, shaping its image and form. I employed my coding skills to make new elements while keeping the overall aesthetic of the shop. Additionally, I was also a system administrator for the webshop, entailing the resolution of bugs, addressing emerging business requirements, and ensuring uninterrupted operation of the store.",
      time: "2019 - 2020",
    },
    {
      title: "BUSINESS INFORMATICS ENGINEER",
      subtitle: "Corvinus University of Budapest",
      content:
        "During my time at Corvinus I gained practical knowledge in the fields of software development, business analytics (systems engineering), IT project management, process development, database management and development, digitalisation, IT consulting, business intelligence solutions.",
      time: "2017-2021",
    },
  ];
  return (
    <section id="experience">
      <div className="title reveal">Experience and education</div>
      <div className="timeline reveal">
        <ul>
          {EXP.map((element, index) => {
            return (
              <Exp
                title={element.title}
                subtitle={element.subtitle}
                content={element.content}
                time={element.time}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
