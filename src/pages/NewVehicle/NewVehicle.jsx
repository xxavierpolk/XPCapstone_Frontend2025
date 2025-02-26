import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function NewVehicle() {

    const nav = useNavigate();
    
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        color: '',
        mileage: '',
    });

    async function handleSubmit(e) {


        e.preventDefault();
        const newVehicle = {
            make: formData.make,
            model: formData.model,
            year: formData.year,
            color: formData.color,
            mileage: formData.mileage,
        };
        console.log(newVehicle);
        try {
           await fetch('http://localhost:3000/api/vehicles', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(newVehicle)
           })
        } catch (error) {
            console.error(error);
        }
       
       

        if (formData.make && formData.model && formData.year && formData.color && formData.mileage) {
            alert('Vehicle added successfully');

            nav('/dashboard');
        }
        
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="make" type="text" placeholder="Make" onChange={handleChange}/>

                <input name="model" type="text" placeholder="Model" onChange={handleChange}/>

                <input name="year" type="text" placeholder="Year" onChange={handleChange}/>

                <input name="color" type="text" placeholder="Color" onChange={handleChange}/>

                <input name="mileage" type="text" placeholder="Mileage" onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}