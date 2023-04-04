import React from 'react';
import account from '../../src/services/appwriteConfig';

function oAuthGoogle({sucesspath,failpath}){
    
    async function LoginGoogle(e){
    e.preventDefault();
    account.createOAuth2Session('google',sucesspath,failpath);
    }


    return (
        <>
        <div>
            <button onClick={(e)=>{LoginGoogle(e)}} className='btn circular'>Google</button>
        </div>
        </>
    )

}

export default oAuthGoogle;