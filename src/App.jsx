import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth/Index';
import Dashboard from './pages/dashboard/Index';
import Navbar from './components/navbar/Index';
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from './pages/Home/Home';
import NewVehicle from './pages/NewVehicle/NewVehicle';
function App() {
  return (
    <>
      <Navbar />
      <h2>La Garåge</h2>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add' element={<NewVehicle />} />
        </Route>
       
      </Routes>
    </>
  );
}

export default App;
