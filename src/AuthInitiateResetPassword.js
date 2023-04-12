import React from 'react';
import account from '../../services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthInisiateResetPassword({Authstyle,Redirectpath,Email,ClickRedirect}){
    
    const navigate = useNavigate();
    async function InitiateReset(e){
    e.preventDefault();
    try{
    await account.createPasswordRecovery(Email,ClickRedirect);
    navigate(Redirectpath)
    }catch(e){
    alert(e.message);
    }
    }


    return (
        <>
        <div>
        <button onClick={(e)=>{InitiateReset(e)}} className='button' style={Authstyle}>Initiate Reset</button>
        </div>
        </>
    )

}

export default AuthInisiateResetPassword;