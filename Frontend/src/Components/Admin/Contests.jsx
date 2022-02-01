import { useEffect, useState } from "react";
import axios from "axios";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from "../Styles/Students.module.css";
import Button from '@mui/material/Button';
import AdminHome from "./AdminHome";
const Contests = () => {
    const [contestData, setContestData] = useState([]);
    const handleDelete = (id) => {
        // sending contest id to backend to delete a contest
        axios.delete(`http://localhost:4000/contest/${id}`).then(res => getData())
            .catch(err => console.log("err: ", err));
    }
    const handleFilter = () => {
        
    }
    const getData = () => {
        //get all contest from backend
        axios.get("http://localhost:4000/contest")
            .then(res => setContestData(res.data))
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
                <Button variant="contained" size="medium" color="inherit" onClick={handleFilter} sx={{color:"black"}}>Filetr by DSA</Button>
                <Button variant="contained" size="medium" color="inherit" onClick={handleFilter} sx={{color:"black"}}>Filter by Coding</Button>
            </div>
                <div className={styles.studentContainer}>
                    {/** displaying all contests*/}
                {contestData && contestData.map((contest) => {
                    var tags = contest.tags.split(",");
                    var temp = [];
                    for (var i = 0; i < tags.length; i++){
                        var temp1 = tags[i].split(" ");
                        temp.push(temp1);
                    }
                    tags = temp;
                    console.log(temp);
                    return (
                    
                    <div key={contest._id} className={styles.studentBox}>
                        <h1>{contest.title}</h1>
                        <p>Type: {contest.type}</p>
                        <p>Start Time: {contest.startTime}</p>
                        <p>End Time: {contest.endTime}</p>
                            <div className={styles.tagContainer}> Tags: {temp.map((tag) => {
                              return  tag.map((e) => {
                                return <div>{e}</div>
                            })
                        })}</div>
                        <DeleteForeverIcon onClick={() => handleDelete(contest._id)} sx={{cursor:"pointer"}}>Delete</DeleteForeverIcon>
                            </div>
                )
            })}
        </div>
            </div>
            </>
    )
}

export default Contests;