import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function AuthLogout({Authstyle,Redirectpath}){
    
    const navigate = useNavigate();
    async function Logout(e){
    e.preventDefault();
    await account.deleteSessions();
    navigate(Redirectpath)
    }

    return (
        <>
        <div>
            <button onClick={(e)=>{Logout(e)}} className='button' style={Authstyle}>Logout</button>
        </div>
        </>
    )

}

export default AuthLogout;