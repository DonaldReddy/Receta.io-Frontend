import React from 'react'
import Card from '../Card/Card'
import Styles from './CardContainer.module.css'

function CardContainer({ title, recipes }) {
    return (
        <div id={Styles['container']}>
            <h2>{title}</h2>
            <ul>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
            </ul>
        </div>
    )
}

export default CardContainer