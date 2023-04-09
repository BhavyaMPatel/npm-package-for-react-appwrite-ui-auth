import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthInisiateResetPassword({Authstyle,Redirectpath,UserId,Secret,NewPassword}){
    
    const navigate = useNavigate();
    async function InitiateReset(e){
    e.preventDefault();
    try{
    await account.updateRecovery(UserId,Secret,NewPassword,NewPassword);
    navigate(Redirectpath)
    }catch(e){
    alert(e.message);
    }
    }


    return (
        <>
        <div>
        <button onClick={(e)=>{InitiateReset(e)}} className='button' style={Authstyle}>Reset Password</button>
        </div>
        </>
    )

}

export default AuthInisiateResetPassword;