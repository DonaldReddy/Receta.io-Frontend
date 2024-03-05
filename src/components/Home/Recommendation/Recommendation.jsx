import React from 'react'
import CardContainer from './CardContainer/CardContainer'
import Styles from './Recommendation.module.css'

function Recommendation() {
    return (
        <div id={Styles['container']}>
            <CardContainer title={"Today's Top Searched"} />
            <CardContainer title={"All Time Favourite"} />
            <CardContainer title={"Latest Recipes"} />
        </div>
    )
}

export default Recommendation