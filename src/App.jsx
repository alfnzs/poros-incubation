import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
