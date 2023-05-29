import React from "react";
import Header from "./Header";
import Tombol from "./Tombol";
import KotakTeks from "./KotakTeks";

function Login(){
    return(
        
        <div>
            <label>Email</label>
        <KotakTeks placholder="Email"/>
        <label>Katasandi</label>
        <KotakTeks placholder="Katasandi"/>
        <Tombol>Login</Tombol>
        </div>
    )
}

export default Login;