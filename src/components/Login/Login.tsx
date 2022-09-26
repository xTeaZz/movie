import React from "react";
import { TextField } from "@mui/material";
import './Login.scss'

function Login () {

    return (
        <div className="login-form">
            <TextField id="outlined-basic" label="ID" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
    )
}

export default Login