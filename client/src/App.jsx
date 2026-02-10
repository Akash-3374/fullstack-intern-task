import { Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Templates from "./pages/Templates";
import Favorites from "./pages/Favorites";

function App() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      {token && (
        <nav style={{ padding: 10 }}>
          <Link to="/templates">Templates</Link> |{" "}
          <Link to="/favorites">Favorites</Link> |{" "}
          <button onClick={logout}>Logout</button>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/templates" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/templates" element={token ? <Templates /> : <Navigate to="/login" />} />
        <Route path="/favorites" element={token ? <Favorites /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
