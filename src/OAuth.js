import React from 'react';
import account from '../../services/appwriteConfig';

function oAuthGoogle({Authstyle,Provider,Sucesspath,Failpath}){
    
    async function LoginGoogle(e){
    e.preventDefault();
    account.createOAuth2Session(Provider,Sucesspath,Failpath);
    }


    return (
        <>
        <div>
            <button onClick={(e)=>{LoginGoogle(e)}} className='button' style={Authstyle} >Signup With {provider}</button>
        </div>
        </>
    )

}

export default oAuthGoogle;