import React, { useState } from 'react'
export const LandingPage=()=>{
    const [signInObject,setSignInObject]=useState({
        email:'',
        password:''
    })
    const [signUpObject,setSignUpObjet]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })
    const [signInRegex,setSignInRegex]=useState({
        email:'Invalid Email',
        password:'Invalid Password'
    })
    const [signUpRegex,setSignUpRegex]=useState({
        firstName:'Invalid First Name',
        lastName:'Invalid Last Name',
        email:'Invalid Email',
        password:'Invalid Password'
    })

    const onSignInClick=()=>{

    }
    const onSignUpClick=()=>{
        
    }
return(
    <div>

    </div>
)
}