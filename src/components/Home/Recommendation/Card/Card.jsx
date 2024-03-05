import React from 'react'
import Styles from './Card.module.css'

function Card() {
    return (
        <div id={Styles['container']}>
            <img src='https://picsum.photos/90' />
            <p unselectable='on' >loreasdcsa sad asd sad asd as a sd asd as asd asda sdsa das dasd sa dsadsadsad sad asd</p>
        </div>
    )
}

export default Card