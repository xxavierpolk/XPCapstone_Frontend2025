import { useAuth } from "../../context/auth/auth_context";
import { useNavigate } from "react-router-dom";



const Dashboard = () => {
  const nav = useNavigate();
  const { logout } = useAuth();

  function handleLogout() {
    logout();
    nav("/auth");
  }

  return (
    <div>
      <h1>Only Users Should See This Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
