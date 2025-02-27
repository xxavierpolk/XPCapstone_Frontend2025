Description

🚗 LA GARÅGE is a full-stack MERN application that allows car enthusiasts and collectors to digitally manage their vehicles. Users can create an account, add cars to their virtual garage, update details, and remove vehicles.


📌 Features

✅ User Authentication (Signup, Login, Logout)✅ Secure Database Storage (MongoDB)✅ Full CRUD Functionality (Create, Read, Update, Delete Vehicles)✅ Private User Garages (Only the owner can manage their vehicles)✅ RESTful API with Express and Mongoose✅ Responsive Frontend with React

🛠️ Tech Stack

Frontend: React, React Router, useState, useEffect

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT & Cookies

API Testing: Postman
___________________

🚀 Getting Started

1️⃣ Clone the Repository

git clone 
https://github.com/xxavierpolk/XPCapstone_Frontend2025
https://github.com/xxavierpolk/XPCapstone_Backend2025


2️⃣ Install Dependencies

Backend

cd Backend
npm install

Frontend

cd ../Frontend
npm install

3️⃣ Set Up Environment Variables

Create a .env file inside the Backend folder and add:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=3000

4️⃣ Start the Application

Run Backend Server

cd Backend
npm run server

(Backend runs on http://localhost:3000)

Run Frontend

cd ../Frontend
npm run dev

(Frontend runs on http://localhost:5173)

_____________________________________________________

🔗 API Routes

USER AUTHENTICATION/USERS

Method

Route

Description

POST

/api/users

Register a new user
_________________
POST

/api/auth

Login and get token
__________________
VEHICLES

Method

Route

Description

GET

/api/vehicles

Get all vehicles
_________________
GET

/api/vehicles/:userid

Get vehicles by user ID
_________________
POST

/api/vehicles

Add a new vehicle
_________________
PUT

/api/vehicles/:vehicleid

Update vehicle details
_________________
DELETE

/api/vehicles/:vehicleid

Remove a vehicle


___________________________________



🛠️ Future Features

📸 Image Upload for Vehicles

📜 Vehicle Maintenance Logs

🌂 Tags for Custom Organization



