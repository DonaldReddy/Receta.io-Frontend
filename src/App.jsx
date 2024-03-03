import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Styles from './App.module.css'

function App() {

  return (
    <div id={Styles['container']}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
