import React from 'react'
import Styles from './Card.module.css'

function Card({ title, content }) {
    return (
        <div className={Styles['container']}>
            <h4>
                {title}
            </h4>
            <p>
                {content}
            </p>
        </div>
    )
}

export default Card