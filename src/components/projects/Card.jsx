import "../../assets/css/projects.css";

const Card = ({ title, at, link, content, index }) => (
  <div className={`div${parseInt(index) + 1} card reveal`}>
    <h2>
      <a href={link} target="_blank" rel="noreferrer" className="underline-magical">
        {title}
      </a>
      {at}
    </h2>
    <p dangerouslySetInnerHTML={{ __html: content }}></p>
  </div>
);
export default Card;
