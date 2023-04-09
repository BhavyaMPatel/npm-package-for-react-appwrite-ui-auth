import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthVerifyPhone({Authstyle,Redirectpath,UserId,Secret}){
    
    const navigate = useNavigate();
    async function VerifyPhone(e){
    e.preventDefault();
    try{
    await account.updateMagicURLSession(UserId,Secret);
    navigate(Redirectpath)
    }catch(e){
    alert(e.message);
    }
    }


    return (
        <>
        <div>
        <button onClick={(e)=>{VerifyPhone(e)}} className='button' style={Authstyle}>Verify MagicUrl</button>
        </div>
        </>
    )

}

export default AuthVerifyPhone;