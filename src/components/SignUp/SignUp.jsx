import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Styles from './SignUp.module.css'
import UserContext from '../../context/UserContext.js'
import Loader from '../Loader/Loader.jsx'

function SignUp() {

    const { userAuth, setUserAuth } = useContext(UserContext)
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


    function handleChange(e) {
        setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value })
        console.log(signupInfo);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await axios.post("http://127.0.0.1:3000/sign-up", signupInfo);
        if (!response.data.status) {
            alert(response.data.error)
            return
        }
        setUserAuth(true);
        localStorage.setItem("user", JSON.stringify({ email: signupInfo.email }));
        alert("Signed Up successfully")
        navigate('/signin')
    }

    return (

        <div id={Styles['container']}>

            {/* {
                userAuth ?
                    <p>Already Logged in</p>

                    :

                    (
                        <div id={Styles['main']}>

                            <h2>Sign Up</h2>

                            <form id={Styles['sign-in']}>

                                <input placeholder='Email' type='email' name='email' onChange={handleChange} />

                                <input placeholder='password' type='password' name='password' onChange={handleChange} />

                                <input placeholder='re-enter password' type='text' name='repassword' onChange={handleChange} />

                                <button type='submit' onClick={handleSubmit}>Sign Up</button>

                            </form>

                        </div>
                    )
            } */}

            <Loader />

        </div>
    )
}

export default SignUp