import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AddContest from "../Components/Admin/AddContest";
import AddStudent from "../Components/Admin/AddStudent";
import Contests from "../Components/Admin/Contests";
import Students from "../Components/Admin/Students";
import AdminLogin from "../Components/User/AdminLogin";
import HomePage from "../Components/User/HomePage";
import { AuthContext } from "../Context/AuthProvider";
const AllRoutes = () => {
    const { isAuth } = useContext(AuthContext);
    return (
        <Routes>
             <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/admin-login" element={isAuth ? <Students/> : <AdminLogin />}></Route>
                <Route exact path="/admin-home-page" element={ isAuth ? <Students />: <AdminLogin/>}></Route>
                <Route exact path="/contests" element={isAuth ? <Contests/>: <AdminLogin />}></Route>
                <Route exact path="/add-student" element={isAuth ? <AddStudent /> : <AdminLogin/>}></Route>
                <Route exact path="/add-contest" element={isAuth ? <AddContest/> : <AdminLogin/>}></Route>
             
        </Routes>
    )
}
export default AllRoutes;