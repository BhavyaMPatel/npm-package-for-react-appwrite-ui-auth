import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function Authlogin({email,password}){
    
    const navigate = useNavigate();

    async function Login(e){
    e.preventDefault();
    try{
    await account.createEmailSession(email, password);
    navigate('/home')
    }catch(e){
        alert(e.message);
    }
    }


    return (
        <>
        <div>
            <button onClick={(e)=>{Login(e)}} className='btn circular'>Login</button>
        </div>
        </>
    )

}

export default Authlogin;