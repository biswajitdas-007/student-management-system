import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../Styles/HomePage.module.css";
const HomePage = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:4000/contest")
    //         .then(res => setData(res.data))
    //         .catch(err => console.log(err));
    // }, [])
    return (
        <div className={styles.mainContainer}>
            <div className={styles.navLink}>
                <Link to="/student-login" className={styles.link}>Student Login</Link>
                <Link to="/admin-login" className={styles.link}>Admin Login</Link>
            </div>
        </div>
    )
}
export default HomePage;
