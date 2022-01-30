import { Link } from "react-router-dom";
import styles from "../Styles/LandingPage.module.css";
export const LandingPage = () => {
    return (
        <div className={styles.navLink}>
                <Link to="/" className={styles.link}>Student Login</Link>
                <Link to="/admin-login" className={styles.link}>Admin Login</Link>
        </div>
    )
}