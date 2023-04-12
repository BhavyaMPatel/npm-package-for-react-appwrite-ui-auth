import React from 'react';
import account from '../../services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthLoginWithPhone({Authstyle,Redirectpath,UserId,Phoneno}){
    
    const navigate = useNavigate();
    async function LoginWithPhone(e){
    e.preventDefault();
    try{
    await account.createPhoneSession(UserId,Phoneno);
    navigate(Redirectpath)
    }catch(e){
    alert(e.message);
    }
    }


    return (
        <>
        <div>
        <button onClick={(e)=>{LoginWithPhone(e)}} className='button' style={Authstyle}>Login With Phone</button>
        </div>
        </>
    )

}

export default AuthLoginWithPhone;