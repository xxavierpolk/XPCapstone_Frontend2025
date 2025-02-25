import { Outlet } from "react-router-dom"
import { useAuth } from "../context/auth/auth_context"



export default function ProtectedRoutes() {
    const { cookies } = useAuth();

    return cookies.token ? <Outlet /> : <h1>AYE! HOLD IT! YOU AINT SUPPOSED TO BE HERE.</h1>
}