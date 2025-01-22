import { useCallback, useEffect, useState } from "react";
import "./Admin.css";

type Query = {
  id: number;
  contact_email: string;
  submit_date: string;
  category: string;
  message: string;
};

type History = {
  id: number;
  user_id: number | null;
  email: string;
  vehicle_brand: string;
  vehicle_model: string;
  compared_vehicle_brand: string;
  compared_vehicle_model: string;
  yearly_savings: number;
  distance: number;
  insurance_cost: number | null;
  trip_type: string | null;
  mixed_trip_details: string | null;
  renewal_date: string | null;
  different_brand: string | null;
  trip_modifications: string | null;
  comparison_date: string;
};

function Admin() {
  const [queries, setQueries] = useState<Query[]>([]);
  const [history, setHistory] = useState<History[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/history`,
        {
          credentials: "include",
        },
      );
      if (!response.ok) {
        throw new Error("Failed to fetch history");
      }
      const data: History[] = await response.json();
      const uniqueEntries = Array.from(
        new Map(data.map((item: History) => [item.id, item])).values(),
      );
      setHistory(uniqueEntries);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
    }
  }, []);

  const fetchQueries = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/queries`,
        {
          credentials: "include",
        },
      );
      if (!response.ok) {
        throw new Error("Failed to fetch queries");
      }
      const data = await response.json();
      setQueries(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
    }
  }, []);

  useEffect(() => {
    fetchQueries();
    fetchHistory();
  }, [fetchQueries, fetchHistory]);

  const handleEdit = async (id: number) => {
    const newMessage = prompt("Message à modifier :");
    if (newMessage) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/queries/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ message: newMessage }),
          },
        );
        if (response.ok) {
          setQueries((prevQueries) =>
            prevQueries.map((query) =>
              query.id === id ? { ...query, message: newMessage } : query,
            ),
          );
        } else {
          alert("Failed to update the query");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while updating the query");
      }
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/queries/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );
      if (response.ok) {
        setQueries((prevQueries) =>
          prevQueries.filter((query) => query.id !== id),
        );
      } else {
        alert("Failed to delete the query");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the query");
    }
  };

  const handleEditHistory = async (id: number) => {
    const newDistance = prompt("Nouvelle distance (km) :");
    if (newDistance && !Number.isNaN(Number(newDistance))) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/history/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ distance: Number(newDistance) }),
          },
        );
        if (response.ok) {
          setHistory((prevHistory) =>
            prevHistory.map((item) =>
              item.id === id
                ? { ...item, distance: Number(newDistance) }
                : item,
            ),
          );
        } else {
          alert("Failed to update the history entry");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while updating the history entry");
      }
    }
  };

  const handleDeleteHistory = async (id: number) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/history/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );
      if (response.ok) {
        setHistory((prevHistory) =>
          prevHistory.filter((item) => item.id !== id),
        );
      } else {
        alert("Failed to delete the history entry");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the history entry");
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      {error && <div className="error">{error}</div>}
      <div className="queries-section">
        <h3>Formulaires de contact</h3>
        <ul className="queries-list">
          {queries.map((query) => (
            <li key={query.id} className="query-item">
              <p>
                <strong>Email :</strong> {query.contact_email}
              </p>
              <p>
                <strong>Date de soumission :</strong>{" "}
                {new Date(query.submit_date).toLocaleString()}
              </p>
              <p>
                <strong>Catégorie :</strong> {query.category}
              </p>
              <p>
                <strong>Message :</strong> {query.message}
              </p>
              <div className="admin-buttons-container">
                <button
                  type="button"
                  className="admin-edit-button"
                  onClick={() => handleEdit(query.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="admin-delete-button"
                  onClick={() => handleDelete(query.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="history-section">
        <h3>Historique des Comparaisons</h3>
        <ul className="history-list">
          {history.map((entry) => (
            <li key={entry.id} className="history-item">
              <p>
                <strong>User ID :</strong> {entry.user_id}
              </p>
              <p>
                <strong>Email de contact :</strong> {entry.email}
              </p>
              <p>
                <strong>Véhicule actuel :</strong> {entry.vehicle_brand}{" "}
                {entry.vehicle_model}
              </p>
              <p>
                <strong>Véhicule comparé :</strong>{" "}
                {entry.compared_vehicle_brand} {entry.compared_vehicle_model}
              </p>
              <p>
                <strong>Economies annuelles estimées :</strong>{" "}
                {entry.yearly_savings} €
              </p>
              <p>
                <strong>Distance de trajet :</strong> {entry.distance} km
              </p>
              <p>
                <strong>Coût d'assurance :</strong> {entry.insurance_cost} €
              </p>
              <p>
                <strong>Date de renouvellement :</strong> {entry.renewal_date}
              </p>
              <p>
                <strong>Type de trajets effectués :</strong> {entry.trip_type}
              </p>
              <p>
                <strong>Trajets mixtes oui/non :</strong>{" "}
                {entry.mixed_trip_details}
              </p>
              <p>
                <strong>Choix de marque différente :</strong>{" "}
                {entry.different_brand}
              </p>
              <p>
                <strong>Modifications des habitudes annoncées :</strong>{" "}
                {entry.trip_modifications}
              </p>
              <p>
                <strong>Date de comparaison :</strong>{" "}
                {new Date(entry.comparison_date).toLocaleString()}
              </p>
              <div className="admin-buttons-container">
                <button
                  type="button"
                  className="admin-edit-button"
                  onClick={() => handleEditHistory(entry.id)}
                >
                  Modifier
                </button>
                <button
                  type="button"
                  className="admin-delete-button"
                  onClick={() => handleDeleteHistory(entry.id)}
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
