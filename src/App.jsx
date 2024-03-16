import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import OurRecipe from './components/OurRecipe/OurRecipe'

function App() {
  

  useEffect(()=>{
    document.querySelector('html').setAttribute('data-theme', 'light')
  },[])

  return (
    <div className='max-w-[83%] mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      
    </div>
  )
}

export default App
