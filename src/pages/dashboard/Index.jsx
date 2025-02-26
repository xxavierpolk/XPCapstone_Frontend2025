import { useAuth } from "../../context/auth/auth_context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Cards/Card.jsx";
import NewVehicle from "../NewVehicle/NewVehicle.jsx";



const Dashboard = () => {
  const { logout, cookies } = useAuth();
  const nav = useNavigate();
  const [cars, setCars] = useState([]);

  function handleLogout() {
    logout();
    nav("/auth");
  }

  useEffect(() => {
    try {
      async function getCars() {
        const response = await fetch('http://localhost:3000/api/vehicles')
        const data = await response.json();
        setCars(data);

      }
      getCars();
    } catch (error) {
        console.log(error);
    }
  },[]);

  console.log(cars);

  return (
    <div>
      <h1>Only Users Should See This 
        Page</h1>
      <div className="card-container">
      {cars.map((car) => <Card key={car._id} car={car}/> )}

      <div className="new-Whip" onClick={() => nav('/add') }>Add New Car

      </div>

      </div>
      <button onClick={handleLogout}>Logout</button>

    </div>


  );
};

export default Dashboard;
