import type React from "react";
import car from "../assets/images/roadster.png";
import volant from "../assets/images/sateering.png";
import param from "../assets/images/settings.png";
import men from "../assets/images/user.png";
import "./FilAriane.css";

const steps = ["Matricule", "Confirm", "Options", "Results"];

interface FilArianeProps {
  currentStep: string;
}

const FilAriane: React.FC<FilArianeProps> = ({ currentStep }) => {
  return (
    <div className="container-box">
      <ul className="fil-ariane">
        {steps.map((step) => (
          <li
            key={step}
            className={`fil-ariane__item ${currentStep === step ? "active" : ""}`}
          >
            <span className="fil-ariane__inner">
              <img
                src={
                  step === "Matricule"
                    ? car
                    : step === "Confirm"
                      ? volant
                      : step === "Options"
                        ? param
                        : men
                }
                alt=""
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilAriane;
