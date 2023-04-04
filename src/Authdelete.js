import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function Authdelete({email,password}){
    
    const navigate = useNavigate();

    async function Delete(e){
    e.preventDefault();
    await account.deleteSessions();
    navigate('/')
    }

    return (
        <>
        <div>
            <button onClick={(e)=>{Delete(e)}} className='btn circular'>DeleteUser</button>
        </div>
        </>
    )

}

export default Authdelete;