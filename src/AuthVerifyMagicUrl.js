import React from 'react';
import account from '../../services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthVerifyMagicUrl({Authstyle,Redirectpath,UserId,Secret}){
    
    const navigate = useNavigate();
    async function VerifyURL(e){
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
        <button onClick={(e)=>{VerifyURL(e)}} className='button' style={Authstyle}>Verify MagicUrl</button>
        </div>
        </>
    )

}

export default AuthVerifyMagicUrl;