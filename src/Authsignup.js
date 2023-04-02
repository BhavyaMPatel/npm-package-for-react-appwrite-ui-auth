import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AppSignup({email,password,name}){
    
    const navigate = useNavigate();

    async function use(e){
    e.preventDefault();
    const userId=name+email[0]+email[1];

    try{
    const newuser=await account.create(userId,email,password,name);
    console.log(newuser);
    await account.createEmailSession(email, password);
    navigate('/login')
    }catch(e){
        console.log(e);
    }
    }


    return (
        <>
        <div>
            <button onClick={(e)=>{use(e)} }>signup</button>
        </div>
        </>
    )

}

export default AppSignup;