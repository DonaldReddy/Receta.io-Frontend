import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './MyRecipes.module.css'
import Card from './Card/Card.jsx'

function Recipes() {
    return (
        <div id={Styles['container']}>
            <h2>
                My Recipes
            </h2>
            <div id={Styles['main']}>
                <form id={Styles['search-bar']}>
                    <input type='text' placeholder='Enter...' />
                    <button type='submit'>🔍</button>
                </form>
                <NavLink to='add-recipe'>+ Post New Recipe</NavLink>
            </div>
            <div id={Styles['cards']}>
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
                <Card title="asdasdasd" content="asdjnas asidnsdoa aoisdnasidninad asdsd asd s d sa sd sd" />
            </div>
        </div>
    )
}

export default Recipes