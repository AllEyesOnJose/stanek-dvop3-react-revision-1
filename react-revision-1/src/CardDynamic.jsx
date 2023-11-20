/* eslint-disable react/prop-types */
import "./Card.css";

function CustomCard(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.link}>{props.linkName}</a>
    </div>
  );
}

export default CustomCard;
