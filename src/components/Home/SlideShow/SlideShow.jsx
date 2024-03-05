import React, { useEffect, useState } from 'react'
import Styles from './SlideShow.module.css'

function SlideShow() {

    const imgs = ['0.jpg', '1.jpg', '2.png', '3.jpg',]

    const [imgidx, setImgidx] = useState(0)

    function handleNext() {
        setImgidx((prev) => {
            return (prev + 1) % imgs.length
        })
    }

    function handlePrevious() {
        setImgidx((imgidx - 1 + imgs.length) % imgs.length)
    }

    useEffect(() => {
        const ref = setInterval(handleNext, 4000);
        return () => clearInterval(ref);
    }, [])

    return (
        <div id={Styles['container']}>

            <button id={Styles['btn-1']} onClick={handlePrevious} >{'<'}</button>
            <img src={imgs[imgidx]} />
            <button id={Styles['btn-2']} onClick={handleNext} >{'>'}</button>

        </div>
    )
}

export default SlideShow