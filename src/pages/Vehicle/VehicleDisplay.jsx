// Redirect to edit vehicle card page
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import VehicleEditForm from "../../components/VehicleEditForm/VehicleEditForm";


export default function VehicleDisplay() {
    const { id } = useParams();
    const nav = useNavigate();
    const [vehicleData, setVehicleData] = useState(null);
    const [isEditing, setIsEditing] = useState(false)


    

    useEffect(() => {
        async function fetchVehicle() {
            console.log(id);
            try {
                const response = await fetch(`http://localhost:3000/api/vehicles/${id}`);
                const data = await response.json();
                setVehicleData(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchVehicle();
        
    }, []);

    // async function handleDelete() {
    //     try {
    //         await fetch('http://localhost:3000/api/vehicles/${}', {
    //             method: 'DELETE',
    //             headers: { 'Content-Type': 'application/json'}
    //         })
    //         nav('/dashboard');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    function handleEdit() {
        setIsEditing(true)

    }

    function Loading() {
        return(
            <h1>Loading.....</h1>
        )
    }

    function Loaded() {
        return(
            <div>
            <h1></h1>
            <p>Make: {vehicleData.make}</p>
            <p>Model: {vehicleData.model}</p>            
            <p>Year: {vehicleData.year}</p>
            <p>Color: {vehicleData.color}</p>
            <p>Mileage: {vehicleData.mileage}</p>
            <button 
            onClick={handleEdit}>Edit
            </button>
            {/* <button 
            onClick={handleDelete}>Delete
            </button> */}
        </div>
        )
    }
   

    return (
        
      

        <>
            {isEditing ? < VehicleEditForm vehicleData={vehicleData} />: <></>}
            {vehicleData ? Loaded() : Loading}
        
        </>
    )


}

