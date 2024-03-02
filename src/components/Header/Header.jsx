import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Header.module.css'

function Header() {

    return (
        <div id={Styles['container']}>
            <p id={Styles['logo']}>Receta.io</p>
            <ul id={Styles['nav-list']}>
                <li>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? Styles['active'] : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/recipes'} className={({ isActive }) => isActive ? Styles['active'] : ""}>
                        Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/my-recipes'} className={({ isActive }) => isActive ? Styles['active'] : ""}>
                        My Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/my-account'} className={({ isActive }) => isActive ? Styles['active'] : ""}>
                        👨‍🍳
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Header