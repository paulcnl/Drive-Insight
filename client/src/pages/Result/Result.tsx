import "./Result.css";
import FilAriane from "../../components/FilAriane";
import CardResultGreen from "../../components/CardResultGreen/CardResultGreen";
import CardResultRed from "../../components/CardResultRed/CardResultRed";

function Result() {
  return (
    <>
      <div className="result_container">
        <FilAriane />
        <h2>Resultat</h2>
        <div className="result_card_container">
          <CardResultGreen />
          <CardResultRed />
        </div>
      </div>
    </>
  );
}

export default Result;
