import React from 'react'
import Styles from './Recipes.module.css'
import Card from './Card/Card.jsx'

function Recipes() {
    return (
        <div id={Styles['container']}>
            <h2>
                Recipes
            </h2>
            <form id={Styles['search-bar']}>
                <input type='text' placeholder='Enter...' />
                <button type='submit'>🔍</button>
            </form>
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