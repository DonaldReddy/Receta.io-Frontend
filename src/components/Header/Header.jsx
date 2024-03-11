import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Header.module.css'
import UserContext from '../../context/UserContext.js'

function Header() {

    const { userAuth } = useContext(UserContext)

    return (
        <nav id={Styles['container']}>
            <NavLink to={'/'} id={Styles['logo']}>Receta.io</NavLink>
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
                <li>{
                    userAuth ?
                        (<NavLink to={'/my-recipes'} className={({ isActive }) => isActive ? Styles['active'] : ""}>
                            My Recipes
                        </NavLink>)
                        :
                        (<NavLink to={'/sign-in'} className={({ isActive }) => isActive ? Styles['active'] : ""}>
                            Sign In
                        </NavLink>)
                }
                </li>
                <li>{
                    userAuth ?
                        (<NavLink to={'/my-account'} className={({ isActive }) => isActive ? Styles['active'] : ""}>
                            👨‍🍳
                        </NavLink>)
                        :
                        (<NavLink to={'/sign-up'} className={({ isActive }) => isActive ? Styles['active'] : ""}>
                            Sign Up
                        </NavLink>)
                }
                </li>
            </ul>
        </nav>
    )
}

export default Header