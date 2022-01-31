import { createContext, useState, useEffect, Children } from "react";
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [adminAuth, setAdminAuth] = useState(false);
    const [studentAuth, setStudentAuth] = useState(false);
    const toggleAdminAuth = () => {
        setAdminAuth(!adminAuth);
    }
    const toggleStudentAuth = () => {
        setStudentAuth(!studentAuth);
    }
    const value = { adminAuth, studentAuth, toggleAdminAuth, toggleStudentAuth };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };