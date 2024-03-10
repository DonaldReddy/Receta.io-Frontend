import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Recipes from './components/Recipes/Recipes.jsx'
import MyRecipes from './components/MyRecipes/MyRecipes.jsx'
import AddRecipe from './components/MyRecipes/AddRecipe/AddRecipe.jsx'
import MyAccount from './components/MyAccount/MyAccount.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      <Route index element={<Home />} />

      <Route path='recipes' element={<Recipes />} />

      <Route path='my-recipes'>

        <Route index element={<MyRecipes />} />

        <Route path='add-recipe' element={<AddRecipe />} />

      </Route>

      <Route path='my-account' element={<MyAccount />} ></Route>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
