import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './SignUp.module.css'
import UserContext from '../../context/UserContext.js'

function SignUp() {

    const { userAuth } = useContext(UserContext)
    const navigate = useNavigate()

    const [signupInfo, setSignupInfo] = useState({
        email: "",
        password: "",
        repassword: ""
    })


    useEffect(() => {
        if (userAuth) {
            const ref = setTimeout(() => navigate('/'), 3000)
            return () => clearTimeout(ref);
        }
    }, [])

    if (userAuth)
        return <p>
            Already logged in
        </p>

    function handleChange(e) {
        setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value })
        console.log(signupInfo);
    }

    function handleSubmit(e) {

    }

    return (

        <div id={Styles['container']}>

            <div id={Styles['main']}>

                <h2>Sign In</h2>

                <form id={Styles['sign-in']}>

                    <input placeholder='Email' type='email' name='email' onChange={handleChange} />

                    <input placeholder='password' type='password' name='password' onChange={handleChange} />

                    <input placeholder='re-enter password' type='text' name='repassword' onChange={handleChange} />

                    <button type='submit' onClick={handleSubmit}>Sign Up</button>

                </form>

            </div>

        </div>
    )
}

export default SignUp