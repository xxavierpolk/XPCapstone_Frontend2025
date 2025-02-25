import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth/Index';
import Dashboard from './pages/dashboard/Index';
import Navbar from './components/navbar/Index';
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Navbar />
      <h2>My App</h2>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
