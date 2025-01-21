import "./Compte.css";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import avatar from "../../assets/images/538474-user_512x512.webp";
import VehicleCard from "../../components/VehicleCard/VehicleCard";

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  licensePlate: string;
  powerType: string;
  horsepower: number;
  price: number;
  imageUrl: string;
}

type User = {
  id: number;
  email: string;
  isAdmin?: boolean;
  firstname: string;
  lastname: string;
  adress: string;
  phoneNumber: string;
};

type Auth = {
  user: User;
  message: string;
};

function Compte() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const { auth } = useOutletContext() as { auth: Auth | null };
  const [isdisabled, setIsDisabled] = useState(false);
  const [firstname, setFirstname] = useState(auth?.user?.firstname || "");
  const [lastname, setLastname] = useState(auth?.user?.lastname || "");
  const [email, setEmail] = useState(auth?.user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(auth?.user?.phoneNumber || "");
  const [adress, setAdress] = useState(auth?.user?.adress || "");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userId = auth?.user?.id;
    const updatedUser = {
      firstname,
      lastname,
      email,
      phoneNumber,
      adress,
    };
    try {
      const response = await fetch(
        `http://localhost:3310/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(updatedUser),
        },
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.info("handleSubmit", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = auth?.user?.id;
      try {
        const response = await fetch(
          `http://localhost:3310/api/vehicles?userId=${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          },
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.info("fetchData", error);
      }
    };
    fetchData();
  }, [auth?.user?.id]);

  return (
    <>
      <div className="compte">
        <div className="user">
          <img src={avatar} alt="" className="avatar" />
          <div className="user-info">
            <div className="nickname">
              <h2>user_nickname</h2>
              <button
                type="button"
                onClick={() => setIsDisabled(!isdisabled)}
                disabled={false}
              >
                {isdisabled ? "Modifier" : "Enregistrer"}
              </button>
            </div>
            <form className="user-info-perso" onSubmit={handleSubmit}>
              <input
                type="text"
                title={firstname}
                disabled={isdisabled}
                onChange={handleInputChange(setFirstname)}
              />
              <input
                type="text"
                title={lastname}
                disabled={isdisabled}
                onChange={handleInputChange(setLastname)}
              />
              <input
                type="text"
                title={email}
                disabled={isdisabled}
                onChange={handleInputChange(setEmail)}
              />
              <input
                type="text"
                title={phoneNumber}
                disabled={isdisabled}
                onChange={handleInputChange(setPhoneNumber)}
              />
              <input
                type="text"
                title={adress}
                disabled={isdisabled}
                onChange={handleInputChange(setAdress)}
              />
            </form>
          </div>
        </div>
        <hr />

        <div className="user-info-vehicle">
          <div className="compte-box">
            <div className="vehicule">
              <p>Mes véhicules</p>
              <button type="button">Modifier mes véhicules ✏️</button>
            </div>
            <div className="box-contenu">
              {vehicles?.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  size="small"
                  vehicleData={{
                    brand: vehicle.brand,
                    model: vehicle.model,
                    license_plate: vehicle.licensePlate,
                    engine: {
                      power_type: vehicle.powerType,
                      horsepower: vehicle.horsepower,
                    },
                    price: vehicle.price,
                    car_picture: vehicle.imageUrl,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="compte-box">
            <div className="comparaison">
              <p>Mes dernières comparaisons</p>
            </div>
            <div className="box-contenu">
              <div className="box-card">
                <div className="car-card-red"> </div>
                <div className="car-card-green"> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="compte-question">
          <button type="button">?</button>
        </div>
      </div>
    </>
  );
}
export default Compte;
