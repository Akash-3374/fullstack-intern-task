import { useEffect, useState } from "react";
import API from "../services/api";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await API.get("/favorites", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFavorites(res.data);
      } catch (err) {
        alert("Failed to load favorites");
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>My Favorites</h2>

      {favorites.map((f) => (
        <div
          key={f._id}
          style={{
            border: "1px solid #ccc",
            padding: 20,
            marginBottom: 10,
          }}
        >
          <h3>{f.template.name}</h3>
          <p>{f.template.description}</p>
          <p><b>Category:</b> {f.template.category}</p>
        </div>
      ))}
    </div>
  );
}
