import React from 'react'
import SlideShow from './SlideShow/SlideShow'
import Recommendation from './Recommendation/Recommendation'
import Styles from './Home.module.css'

function Home() {
    return (
        <div id={Styles['container']}>
            <section>
                <SlideShow />
            </section>

            <section>
                <Recommendation />
            </section>
        </div>
    )
}

export default Home