import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './SignIn.module.css'
import UserContext from '../../context/UserContext.js'

function SignIn() {


    const { userAuth } = useContext(UserContext)
    const navigate = useNavigate()

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
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
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
        console.log(loginInfo);
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

                    <button type='submit' onClick={handleSubmit}> Log In</button>

                </form>

            </div>

        </div>
    )
}

export default SignIn