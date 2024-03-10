import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Styles from './App.module.css'

function App() {

  return (
    <div id={Styles['container']}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )

}

export default App
