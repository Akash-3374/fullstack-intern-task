import { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3000/api/favorites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch(() => console.log("Error loading favorites"));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>My Favorites</h2>

      {favorites.length === 0 && (
        <p>No favorites added yet</p>
      )}

      {favorites.map((t) => (
        <div key={t._id} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
          <h3>{t.name}</h3>
          <p>{t.description}</p>
        </div>
      ))}
    </div>
  );
}
