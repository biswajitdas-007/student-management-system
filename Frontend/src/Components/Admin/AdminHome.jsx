import { Link } from "react-router-dom";
import styles from "../Styles/AdminHome.module.css";

const AdminHome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                {/** navigation routes links */}
                <nav>
                    <Link to="/admin-home-page" className={styles.navRoutes}>Students</Link>
                    <Link to="/add-student" className={styles.navRoutes}>Add Student</Link>
                    <Link to="/contests" className={styles.navRoutes}>Contests</Link>
                    <Link to="/add-contest" className={styles.navRoutes}>Add Contest</Link>
                </nav>
            </div>
        </div>
    )
}

export default AdminHome;