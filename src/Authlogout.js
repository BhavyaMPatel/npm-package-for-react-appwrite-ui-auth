import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function Authlogout({email,password}){
    
    const navigate = useNavigate();

    async function Logout(e){
    e.preventDefault();
    await account.deleteSessions();
    navigate('/login')
    }


    return (
        <>
        <div>
            <button onClick={(e)=>{Logout(e)}}>Logout</button>
        </div>
        </>
    )

}

export default Authlogout;