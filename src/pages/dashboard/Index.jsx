import { useAuth } from "../../context/auth/auth_context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const Dashboard = () => {
  const { logout, cookies } = useAuth();
  const nav = useNavigate();
  

  function handleLogout() {
    logout();
    nav("/auth");
  }

  useEffect(() => {
    console.log(cookies);
  },[]);

  return (
    <div>
      <h1>Only Users Should See This Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
