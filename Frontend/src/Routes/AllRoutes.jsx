import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AddContest from "../Components/Admin/AddContest";
import AddStudent from "../Components/Admin/AddStudent";
import Contests from "../Components/Admin/Contests";
import Students from "../Components/Admin/Students";
import AdminLogin from "../Components/User/AdminLogin";
import HomePage from "../Components/User/HomePage";
import { StudentContests } from "../Components/User/StudentContests";
import StudentLogin from "../Components/User/StudentLogin";
import { AuthContext } from "../Context/AuthProvider";
const AllRoutes = () => {
    const { adminAuth, studentAuth } = useContext(AuthContext);
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/student-login" element={<StudentLogin/>}></Route>
            <Route exact path="/admin-login" element={<AdminLogin />}></Route>
            <Route exact path="/student-dashboard" element={studentAuth ? <StudentContests/> : <HomePage/>}/>
            <Route exact path="/admin-home-page" element={ adminAuth ? <Students />: <HomePage/>}></Route>
            <Route exact path="/contests" element={adminAuth ? <Contests/>: <HomePage />}></Route>
            <Route exact path="/add-student" element={adminAuth ? <AddStudent /> : <HomePage/>}></Route>
            <Route exact path="/add-contest" element={adminAuth ? <AddContest/> : <HomePage/>}></Route>
             
        </Routes>
    )
}
export default AllRoutes;