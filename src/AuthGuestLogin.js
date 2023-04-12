import React from 'react';
import account from '../../services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthGuestLogin({Authstyle,Redirectpath}){
    
    const navigate = useNavigate();
    async function GuestLogin(e){
    e.preventDefault();
    try{
    await account.createAnonymousSession();
    navigate(Redirectpath)
    }catch(e){
    alert(e.message);
    }
    }


    return (
        <>
        <div>
        <button onClick={(e)=>{GuestLogin(e)}} className='button' style={Authstyle}>Guest Login</button>
        </div>
        </>
    )

}

export default AuthGuestLogin;