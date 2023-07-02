const Exp = ({ title, subtitle, content, time }) => (
  <li>
    <div className="content reveal">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{content}</p>
    </div>
    <div className="time">
      <h5>{time}</h5>
    </div>
  </li>
);
export default Exp;
