import { useEffect, useState } from "react";

export default function Templates() {
  const [templates, setTemplates] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3000/api/templates")
      .then((res) => res.json())
      .then((data) => setTemplates(data))
      .catch(() => alert("Failed to load templates"));
  }, []);

  const addFavorite = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/favorites/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("Favorite added");
    } catch (err) {
      alert(err.message || "Failed to add favorite");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Templates</h2>

      {templates.map((t) => (
        <div
          key={t._id}
          style={{
            border: "1px solid #ccc",
            padding: 20,
            marginBottom: 10,
          }}
        >
          <h3>{t.name}</h3>
          <p>{t.description}</p>
          <p>
            <b>Category:</b> {t.category}
          </p>

          <button onClick={() => addFavorite(t._id)}>
            Favorite
          </button>
        </div>
      ))}
    </div>
  );
}
