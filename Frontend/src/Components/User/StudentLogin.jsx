import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import styles from "../Styles/AdminLogin.module.css";
import { Navigate } from "react-router-dom";

const StudentLogin = () => {
    const { studentAuth, toggleStudentAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [values, setValues] =useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
        ...values,
        showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/student-login", { "email": email }).then(res => {
            if (res.data !== "user-not-found") {
                toggleStudentAuth();
            } else {
                alert("Wrong email !!!")
            }
        }).catch(err => console.log(err));
    }
    return (
        <div>
            <h2 className={styles.heading}>Student Login</h2>
            <form action="" className={styles.adminForm} onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    type="email"
                    sx={{width:"100%", margin:"10px", color:"white"}}
                    onChange={handleEmail}
                />
                <FormControl  variant="outlined" sx={{width:"100%", margin:"10px", borderColor:"red"}}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    
                </FormControl>
                {studentAuth && <Navigate to="/student-dashboard"/>}
                <Button variant="outlined" color="primary" type="submit" className={styles.submitBtn}>Login</Button>
                
            </form>
        </div>
    )
}

export default StudentLogin;