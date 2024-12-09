import car from "../assets/images/roadster.png";
import volant from "../assets/images/sateering.png";
import param from "../assets/images/settings.png";
import men from "../assets/images/user.png";
import "./FilAriane.css";

const FilAriane = () => {
  return (
    <div className="container-box">
      <ul className="fil-ariane">
        <li className="fil-ariane__item">
          <span className="fil-ariane__inner">
            <img src={car} alt="" />
          </span>
        </li>
        <li className="fil-ariane__item">
          <span className="fil-ariane__inner">
            <img src={volant} alt="" />
          </span>
        </li>
        <li className="fil-ariane__item">
          <span className="fil-ariane__inner">
            <img src={param} alt="" />
          </span>
        </li>
        <li className="fil-ariane__item">
          <span className="fil-ariane__inner">
            <img src={men} alt="" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FilAriane;
