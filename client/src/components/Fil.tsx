import car from "../assets/images/roadster.svg";
import param from "../assets/images/settings.svg";
import volant from "../assets/images/steering.svg";
import men from "../assets/images/user.svg";
const FilDAriane = () => {
  return (
    <div className="box-ariane">
      <img src={car} alt="" />
      <img src={volant} alt="" />
      <img src={param} alt="" />
      <img src={men} alt="" />
    </div>
  );
};

export default FilDAriane;
