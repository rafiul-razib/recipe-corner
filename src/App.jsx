import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  useEffect(()=>{
    document.querySelector('html').setAttribute('data-theme', 'light')
  },[])

  return (
    <>
      <Navbar></Navbar>
      
    </>
  )
}

export default App
