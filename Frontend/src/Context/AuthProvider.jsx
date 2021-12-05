import { createContext, useState, useEffect, Children } from "react";
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }
    const value = { isAuth, toggleAuth };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };