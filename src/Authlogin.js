import React from 'react';
import account from '../../services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthLogin({Authstyle,Redirectpath,Email,Password}){
    
    const navigate = useNavigate();
    async function Login(e){
    e.preventDefault();
    try{
    await account.createEmailSession(Email, Password);
    navigate(Redirectpath)
    }catch(e){
    alert(e.message);
    }
    }

    return (
        <>
        <div>
        <button onClick={(e)=>{Login(e)}} className='button' style={Authstyle}>Login</button>
        </div>
        </>
    )

}

export default AuthLogin;