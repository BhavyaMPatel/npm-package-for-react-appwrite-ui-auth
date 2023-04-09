import React from 'react';
import account from '../../src/services/appwriteConfig';
import {useNavigate} from 'react-router-dom';

function Authdelete({Authstyle,Redirectpath}){
    
    const navigate = useNavigate();
    async function Delete(e){
    e.preventDefault();
    account.delete();
    navigate(Redirectpath)
    }

    return (
        <>
        <div>
            <button onClick={(e)=>{Delete(e)}} className='button' style={Authstyle}>DeleteUser</button>
        </div>
        </>
    )

}

export default Authdelete;