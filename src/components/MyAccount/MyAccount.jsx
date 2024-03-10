import React from 'react'
import Styles from './MyAccount.module.css'

function MyAccount() {
    return (
        <div id={Styles['container']}>
            <h2>
                MyAccount
            </h2>
            <div id={Styles['main']}>
                <div id={Styles['profile-pic']}></div>
                <div id={Styles['info']}>
                    <p><span>Name :-</span>Donald Reddy</p>
                    <p><span>Email :-</span>donald@gmail.com</p>
                    <p><span>Gender :-</span>Male</p>
                </div>
            </div>
        </div>
    )
}

export default MyAccount