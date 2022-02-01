import { useEffect, useState } from "react";
import axios from "axios";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from "../Styles/Students.module.css";
import Button from '@mui/material/Button';
import AdminHome from "./AdminHome";
const Students = () => {
    const [studentsData, setStudentsData] = useState([]);
    const [sort, setSort] = useState(false);
    const handleDelete = (id) => {
        // sending students id to backend to delete a student details
        axios.delete(`http://localhost:4000/${id}`).then(res => getData())
            .catch(err => console.log("err: ", err));
    }

    //sort by name method to sort students by name
    const handleSortByName = () => {
        setStudentsData(studentsData.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            } else {
                return 1;
            }
        }));
        setSort(!sort);
    }

    // handleSortByAge method is sorting students by age
    const handleSortByAge = () => {
        setStudentsData(studentsData.sort((a, b) => {
            return a.age - b.age;
        }));
        setSort(!sort);
    }
    const getData = () => {
        //getting all students present in database
        axios.get("http://localhost:4000/students")
            .then(res => setStudentsData(res.data))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getData();
    },[])
    return (
        <>
            <AdminHome/>
        <div className={styles.container}>
            <div className={styles.sortBtn}>
                <Button variant="contained" color="inherit" size="medium" onClick={handleSortByName} sx={{color:"black"}}>Sort by name</Button>
                <Button variant="contained" size="medium" color="inherit" onClick={handleSortByAge} sx={{color:"black"}}>Sort by age</Button>
            </div>
                <div className={styles.studentContainer}>
                    {/** displaying all students */}
            {studentsData && studentsData.map((student) => {
                return (
                    <div key={student._id} className={styles.studentBox}>
                        <h1>{student.name}</h1>
                        <p>Email: {student.email}</p>
                        <p>Education: {student.education}</p>
                        <p>City: {student.city}</p>
                        <p>Gender: {student.gender}</p>
                        <p>Age: {student.age}</p>
                        <p>Contact No: {student.contact}</p>
                        <DeleteForeverIcon onClick={() => handleDelete(student._id)} sx={{cursor:"pointer"}}>Delete</DeleteForeverIcon>
                    </div>
                )
            })}
        </div>
            </div>
        </>
    )
}

export default Students;