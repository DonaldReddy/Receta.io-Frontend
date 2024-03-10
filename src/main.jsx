import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Recipes from './components/Recipes/Recipes.jsx'
import MyRecipes from './components/MyRecipes/MyRecipes.jsx'
import MyAccount from './components/MyAccount/MyAccount.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} ></Route>
      <Route path='recipes' element={<Recipes />} ></Route>
      <Route path='my-recipes' element={<MyRecipes />} > </Route>
      <Route path='my-account' element={<MyAccount />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
