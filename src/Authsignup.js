import React from 'react';
import account from '../../services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthSignup({Email,Password,Name,Authstyle,Redirectpath}){
    
    const navigate = useNavigate();
    async function Authsignup(e){
    e.preventDefault();
    const userId=Name+Email[0];
    try{
    await account.create(userId,Email,Password,Name);
    await account.createEmailSession(Email, Password);
    navigate(Redirectpath)
    }catch(e){
        alert(e.message);
    }
    }

    return (
        <>
        <div>
            <button onClick={(e)=>{Authsignup(e)} } className='button' style={Authstyle}>SignUp</button>
        </div>
        </>
    )

}

export default AuthSignup;