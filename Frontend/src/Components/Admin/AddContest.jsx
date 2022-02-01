import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from "../Styles/AddStudent.module.css";
import AdminHome from "./AdminHome";
const initState = {
    title: "",
    type: "",
    startTime: null,
    endTime: null,
    tags: ""
}
const AddContest = () => {
    const [data, setData] = useState(initState);
    // destructuring data and get the keys
    const { title, type, startTime, endTime, tags } = data;
    //storing the contest data
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(data)
        setData({ ...data, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //send data to backend to add it in database
        axios.post("http://localhost:4000/contest", data)
            .then(res => alert("Succefully added data!"))
            .catch(err => console.log(err))
    }
    return (
        <>
            <AdminHome/>
        <div className={styles.container}>
            <div>
                <h1 className={styles.addStudentHeading}>Add a contest</h1>
                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className={styles.formContainer}
                >
                    <div className={styles.inputFields}>
                         <TextField
                            label="Title"
                            name="title"
                            value={title}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                        <TextField
                            label="Type"
                            name="type"
                            value={type}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                        <TextField
                            type="time"
                            name="startTime"
                            value={startTime}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                        <TextField
                            type="time"
                            name="endTime"
                            value={endTime}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                        <TextField
                            label="Tags"
                            name="tags"
                            value={tags}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                    <Button color="primary" variant="outlined" type="submit" className={styles.submitBtn}>Submit</Button>
                   </div>
                </form>
            </div>
            </div>
            </>
    )
}

export default AddContest;