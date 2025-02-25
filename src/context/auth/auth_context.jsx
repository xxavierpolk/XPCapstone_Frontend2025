// Imports
import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';

// Create context
const AuthContext = createContext();

// Create functional component AuthProvider. Destructures children as its sole parameter
export default function AuthProvider({ children}) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);


    // Login Function
    async function login(formData) {
        try {
            // Make a POST request to the backend with the form data
            const response = await fetch('http://localhost:3000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
    
            });
            const data = await response.json();

            // Take the token from the response and store it in a cookie
            setCookie('token', data.token);
            return data;
        } catch (error) {
            console.error(error);
            return { errors: [{ msg: 'Server Error' }] };
        }
        

    // Register Function
    async function signUp(formData) {
        
    }

    // Logout Function
    function logout() {}

    return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
}