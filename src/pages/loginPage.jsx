import React, { useState } from 'react'

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    
    const formSubmit= (event) => {
        event.preventDefault();
        if(loginData.email && loginData.password){
            setValid(true)
            setSubmitted(true);
        }
        console.log(loginData)
    }

    const setFormData= (event) => {
        setLoginData({...loginData, [event.target.name]:event.target.value})
    }

  return (
    <div id="login-form">
        {submitted && valid ? <div id="login-valid">Form Submitted successful</div> : null}
        <form onSubmit={formSubmit}>
            <label className='login-form-data' >email</label>
            <input type="email" placeholder='Enter you email' name='email' onChange={setFormData}/>
            {!loginData.email && submitted ? <div className='login-validation'>Enter email</div> : null}
            <label className='login-form-data' >Password</label>
            <input type="password" placeholder='Enter your password' name='password' onChange={setFormData}/>
            {!loginData.password && submitted ? <div className='login-validation'>Enter password</div> : null}
            <input type="submit" className='login-form-data' value="submit"/>
        </form>
    </div>
  )
}

export default LoginPage