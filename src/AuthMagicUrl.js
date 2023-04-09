import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthMagicUrl({Authstyle,Redirectpath,UserId,Email}){
    
    const navigate = useNavigate();
    async function LoginWithMagicUrl(e){
    e.preventDefault();
    try{
    await account.createMagicURLSession(UserId,Email);
    navigate(Redirectpath)
    }catch(e){
    alert(e.message);
    }
    }


    return (
        <>
        <div>
        <button onClick={(e)=>{LoginWithMagicUrl(e)}} className='button' style={Authstyle}>Get Magic</button>
        </div>
        </>
    )

}

export default AuthMagicUrl;