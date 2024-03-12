import React from 'react'
import Styles from './Loader.module.css'

function Loader() {
    return (
        <div id={Styles['loader']}>
            <div id={Styles['triangle']} ></div>
        </div>
    )
}

export default Loader