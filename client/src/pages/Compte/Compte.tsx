import "./Compte.css";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
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
  address: string;
  phoneNumber: string;
};

type Auth = {
  user: User;
  message: string;
};

type Context = {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
};

function Compte() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const { auth, setAuth } = useOutletContext() as Context;
  const [isdisabled, setIsDisabled] = useState(true);
  const [firstname, setFirstname] = useState(auth?.user?.firstname || "");
  const [lastname, setLastname] = useState(auth?.user?.lastname || "");
  const [email, setEmail] = useState(auth?.user?.email || "");
  const [phone_number, setPhone_number] = useState(
    auth?.user?.phoneNumber || "",
  );
  const [address, setAddress] = useState(auth?.user?.address || "");

  useEffect(() => {
    const fetchData = async () => {
      if (!auth || !auth.user) {
        console.error("User is not authenticated.");
        return;
      }

      try {
        const userId = auth.user.id;
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/vehicles?userId=${userId}`,
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
      } catch (error) {}
    };
    fetchData();
  }, [auth]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!auth?.user?.id) {
      console.error("User ID is undefined");
      return;
    }

    const userId = auth.user.id;

    const updatedUser = {
      firstname,
      lastname,
      email,
      phone_number,
      address,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${userId}`,
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

      const data = await response.json();
      setAuth(data);
      setIsDisabled(true);
    } catch (error) {}
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (response.ok) {
        setAuth(null);
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className="compte">
        <div className="deco">
          <button type="button" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
        <div className="user">
          <img src={avatar} alt="" className="avatar" />
          <div className="info-box">
            <div className="user-info">
              <form className="user-info-perso" onSubmit={handleSubmit}>
                <div className="info-box">
                  <div className="input-compte">
                    <div className="label-input">
                      <label htmlFor="prenom">Prénom</label>
                      <input
                        type="text"
                        title={firstname}
                        disabled={isdisabled}
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname}
                      />
                    </div>
                    <div className="label-input">
                      <label htmlFor="nom">Nom</label>
                      <input
                        type="text"
                        title={lastname}
                        disabled={isdisabled}
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname}
                      />
                    </div>
                    <div className="label-input">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        title={email}
                        disabled={isdisabled}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="label-input">
                      <label htmlFor="phoneNumber">Numéro de telephone</label>
                      <input
                        type="text"
                        title={"phoneNumber"}
                        disabled={isdisabled}
                        onChange={(e) => setPhone_number(e.target.value)}
                        value={phone_number}
                      />
                    </div>
                    <div className="label-input">
                      <label htmlFor="adresse">Adresse</label>
                      <input
                        type="text"
                        title={address}
                        disabled={isdisabled}
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                      />
                    </div>
                    <div className="compte-button-container">
                      <button
                        type="submit"
                        onClick={() => setIsDisabled(!isdisabled)}
                        disabled={false}
                      >
                        {isdisabled ? "Modifier" : "Enregistrer"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />

        <div className="user-info-vehicle">
          <div className="compte-box">
            <div className="vehicule">
              <p>Mes véhicules</p>
              <p>Mes informations</p>
              <button type="button">Modifier mes véhicules ✏️</button>
            </div>
            <div className="box-contenu">
              {vehicles?.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  size="small"
                  vehicleData={{
                    id: vehicle.id,
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
        </div>
        <div className="user-info-vehicle-2">
          <div className="compte-box">
            <div className="vehicule">
              <p>Mes vehicules</p>
              <button type="button">Modifier mes véhicules ✏️</button>
            </div>
            <div className="box-contenu">
              {vehicles?.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  size="small"
                  vehicleData={{
                    id: vehicle.id,
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
        </div>
        <div className="compte-question">
          <button type="button">?</button>
        </div>
      </div>
    </>
  );
}
export default Compte;
