import { useState, useContext } from "react";
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

const AdminLogin = () => {
    const { isAuth, toggleAuth } = useContext(AuthContext);
    console.log("auth: ", isAuth)
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
        var isTrue = false;
        var i = email.length - 16;
        var str = "";
        for (i; i < email.length; i++){
            str += email[i];
        }
        if (str == ".masaischool.com") {
            isTrue = true;
        }
        if (isTrue) {
            toggleAuth()
        } else {
            alert("Wrong Credentials")
        }
    }
    return (
        <div>
            <h2 className={styles.heading}>Admin Login</h2>
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
                {isAuth && <Navigate to="/admin-home-page"/>}
                <Button variant="outlined" color="primary" type="submit" className={styles.submitBtn}>Login</Button>
                
            </form>
        </div>
    )
}

export default AdminLogin;