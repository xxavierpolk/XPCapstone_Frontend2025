import { useState } from 'react'



export default function VehicleEditForm({vehicleData}) {

    const [formData, setFormData] = useState({
        "make": vehicleData.make,
        "model": vehicleData.model,
        "year": vehicleData.year,
        "color": vehicleData.color,
        "mileage": vehicleData.mileage

    })

    async function handleSubmit() {
        try {
            await fetch(`http://localhost:3000/api/vehicles/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            alert('Vehicle updated successfully');
            nav('/dashboard');
        } catch (error) {
            console.error(error);
        }
    }

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
      } 

    return (
        <>
        <h1>Form</h1>
       
        <form onSubmit={handleSubmit}>
      <label htmlFor='make'></label>
      <input id='make' name='make' type='text' placeholder='Make' onChange={handleChange} />

      <label htmlFor='model'></label>
      <input id='model' name='model' type='text' placeholder='Model' onChange={handleChange} />

      <label htmlFor='color'></label>
      <input id='color' name='year' type='text' placeholder='Year' onChange={handleChange} />

      <label htmlFor='make'></label>
      <input id='make' name='color' type='text' placeholder='Color' onChange={handleChange} />

      <label htmlFor='model'></label>
      <input id='model' name='mileage' type='text' placeholder='Mileage' onChange={handleChange} />

      {/* <input type='submit'/> */}
      <button >Submit</button>
         </form>
        </>
    )
};