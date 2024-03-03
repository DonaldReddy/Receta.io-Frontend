import React from 'react'
import SlideShow from './SlideShow/SlideShow'
import Styles from './Home.module.css'

function Home() {
    return (
        <div id={Styles['container']}>
            <section>
                <SlideShow />
            </section>

            <section>

            </section>
        </div>
    )
}

export default Home