import { Link } from "react-router-dom";

export default function vehicleCard({ car }) {
    return (
        <Link to={`/vehicle/${car._id}`}>
        <div className="card">
            <h4>{car.make}</h4>
            <h4>{car.model}</h4>
            <h4>{car.year}</h4>
            <h4>{car.color}</h4>
            <h4>{car.mileage}</h4>
        </div>
        </Link> 
    );
}