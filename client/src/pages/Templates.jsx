import { useEffect, useState } from "react";
import API from "../services/api";

export default function Templates() {
  const [templates, setTemplates] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await API.get("/templates");
        setTemplates(res.data);
      } catch (err) {
        alert("Failed to load templates");
      }
    };

    fetchTemplates();
  }, []);

  const addFavorite = async (id) => {
    try {
      await API.post(
        `/favorites/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Added to favorites");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add favorite");
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
          <p><b>Category:</b> {t.category}</p>

          <button onClick={() => addFavorite(t._id)}>
            Favorite
          </button>
        </div>
      ))}
    </div>
  );
}
