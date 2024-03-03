import React from 'react'
import Styles from './Footer.module.css'

function Footer() {
    return (
        <footer id={Styles['container']} >
            <p id={Styles['logo']}>Receta.io</p>
            <ul id={Styles['links']}>
                <ul>
                    lorem
                    <hr />
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <ul>
                    lorem
                    <hr />
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <ul>
                    lorem
                    <hr />
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
            </ul>
        </footer>
    )
}

export default Footer