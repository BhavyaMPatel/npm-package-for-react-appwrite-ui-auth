import React from 'react';
import account from '../../src/services/appwriteConfig';

function oAuthGoogle({Authstyle,provider,sucesspath,failpath}){
    
    async function LoginGoogle(e){
    e.preventDefault();
    account.createOAuth2Session(provider,sucesspath,failpath);
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