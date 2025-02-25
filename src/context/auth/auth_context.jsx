// Imports
import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';


const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Use cookies to keep track and manage cookies
  const [cookies, setCookies, removeCookie] = useCookies();

  //   Login Function
  async function login(formData) {
    try {
      // Make post request to backend with formData
      const response = await fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

    });
        const data = await response.json();

    // Take the token from the response and store it in a cookie
        setCookies('token', data.token);
        return data;
        } catch (err) {
            console.error(err);
    }
  }

  // register Function
  async function signUp(formData) {
    try {
      // Make post request to backend with formData
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

    });
    const data = await response.json();

    // Take the token from the response and store it in a cookie
        setCookies('token', data.token);
        return data;
         } catch (err) {
      console.error(err);
    }
  } 

  // Logout Function
  function logout() {
    ['token'].forEach((obj) => removeCookie(obj));
  }

  const value = useMemo(
    () => ({
      cookies,
      login,
      logout,
      signUp,
    }),
    [cookies]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Cheeky function so we don't have import useContext in every file or everytime i want to use Auth
export function useAuth() {
  return useContext(AuthContext);
}






// // Imports
// import { createContext, useContext, useMemo } from 'react';
// import { useCookies } from 'react-cookie';

// // Create context
// const AuthContext = createContext();

// // Create functional component AuthProvider. Destructures children as its sole parameter
// export default function AuthProvider({ children}) {
//     const [cookies, setCookie, removeCookie] = useCookies(['token']);


//     // Login Function
//     async function login(formData) {
//         try {
//             // Make a POST request to the backend with the form data
        //     const response = await fetch('http://localhost:3000/api/auth', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(formData)
    
        //     });
        //     const data = await response.json();

        //     // Take the token from the response and store it in a cookie
        //     setCookie('token', data.token);
        //     return data;
        // } catch (error) {
//             console.error(error);
//             return { errors: [{ msg: 'Server Error' }] };
//         }
        

//     // Register Function
//     async function signUp(formData) {
//         try {
//             // Make a POST request to the backend with the form data
        //     const response = await fetch('http://localhost:3000/api/users', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(formData)
    
        //     });
        //     const data = await response.json();

        //     // Take the token from the response and store it in a cookie
        //     setCookie('token', data.token);
        //     return data;
        // } catch (error) {
//             console.error(error);
//             return { errors: [{ msg: 'Server Error' }] };
//         }
//     }

//     // Logout Function
//     function logout() {
//         ['token'].forEach((cookie) => {
//             removeCookie(cookie);
//         });
//     }


//     const value = useMemo(() => ({
//         cookies,
//         login,
//         logout,
//         signUp
//     }), [cookies]);
    

//     return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
// }
// }