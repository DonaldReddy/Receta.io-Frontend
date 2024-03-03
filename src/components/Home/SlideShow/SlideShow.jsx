import React, { useState } from 'react'
import Styles from './SlideShow.module.css'

function SlideShow() {

    const imgs = ['0.jpg', '1.jpg', '2.jpg', '3.jpg',]

    const [imgidx, setImgidx] = useState(0)

    function handleNext() {
        setImgidx((imgidx + 1) % imgs.length)
    }

    function handlePrevious() {
        setImgidx((imgidx - 1) % imgs.length)
    }

    return (
        <div id={Styles['container']}>

            <button id={Styles['btn-1']} onClick={handlePrevious} >{'<'}</button>
            <img src={imgs[imgidx]} />
            <button id={Styles['btn-2']} onClick={handleNext} >{'>'}</button>

        </div>
    )
}

export default SlideShow