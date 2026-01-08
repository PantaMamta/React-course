import "../styles/dashboard.scss";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <h1>Welcome 🎉</h1>
      <p>You are logged in</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
