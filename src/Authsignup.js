import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthSignup({email,password,name,Authstyle,Redirectpath}){
    
    const navigate = useNavigate();
    async function Authsignup(e){
    e.preventDefault();
    const userId=name+email[0]+email[1];
    try{
    await account.create(userId,email,password,name);
    await account.createEmailSession(email, password);
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