import React from 'react'
import Styles from './AddRecipe.module.css'

function AddRecipe() {
    return (
        <div id={Styles['container']}>
            <h2>Add Recipe</h2>
            <div id={Styles['main']}>

                <form id={Styles['type']}>

                    <input id={Styles['veg']} type='radio' name='type' onChange={() => console.log("selece")} />
                    <label htmlFor={Styles['veg']} >Veg</label>

                    <input id={Styles['non-veg']} type='radio' name='type' onChange={() => console.log("selece")} />
                    <label htmlFor={Styles['non-veg']} >Non-Veg</label>

                    <input id={Styles['egg']} type='radio' name='type' onChange={() => console.log("selece")} />
                    <label htmlFor={Styles['egg']} >Egg</label>

                </form>

                <form id={Styles['recipe']}>

                    <input id={Styles['name']} type='text' placeholder='Recipe Name' />

                    <textarea id={Styles['about']} type='text' placeholder='About' rows='10' cols='50' />

                    <label id={Styles['image-upload-label']} htmlFor={Styles['image-upload-btn']}>
                        + Add Image
                        <input id={Styles['image-upload-btn']} type='file' accept='image/*' />
                    </label>

                    <textarea id={Styles['ingredients']} type='text' placeholder='Ingredients' rows='10' cols='50' />

                    <textarea id={Styles['instructions']} type='text' placeholder='Cooking Instructions...' rows='10' cols='50' />

                    <button id={Styles['btn']} >Add</button>

                </form>

            </div>
        </div>
    )
}

export default AddRecipe