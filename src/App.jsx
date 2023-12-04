import About from './components/About'
import Footer from './components/Footer'
import Interests from './components/Interests'
import Info from '/src/components/Info'

const App = () => {

  return (
  <div className="app">
    <Info />
    <About/>
    <Interests/>
    <Footer/>
  </div>
  )
}

export default App
