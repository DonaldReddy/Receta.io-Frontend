import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Styles from './App.module.css'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {

  return (
    <UserContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </UserContextProvider>
  )

}

export default App
